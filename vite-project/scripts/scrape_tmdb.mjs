import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const OUTPUT_FILE = path.join(__dirname, '..', 'tmdb-scraped-data.json')
const OUTPUT_POSTER_FILE = path.join(__dirname, '..', 'public', 'tmdb-poster-links.json')
const TMDB_API_BASE = 'https://api.themoviedb.org/3'
const FALLBACK_TMDB_API_KEY = '1d66712bb8b0ba574af641067b35f74a'

function getTmdbApiKey() {
  return process.env.TMDB_API_KEY?.trim() || FALLBACK_TMDB_API_KEY
}

async function fetchTmdb(pathSuffix) {
  const key = getTmdbApiKey()
  if (!key) throw new Error('Missing TMDB API key')
  const sep = pathSuffix.includes('?') ? '&' : '?'
  const url = `${TMDB_API_BASE}${pathSuffix}${sep}api_key=${encodeURIComponent(key)}&language=en-US`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`TMDB request failed: ${response.status}`)
  return response.json()
}

function extractPoster(detail) {
  if (detail.poster_path) return `${TMDB_API_BASE.replace('/3', '')}/t/p/w600_and_h900_face${detail.poster_path}`
  if (Array.isArray(detail.images?.posters) && detail.images.posters.length) {
    const filePath = detail.images.posters.find((p) => p.file_path)?.file_path
    if (filePath) return `${TMDB_API_BASE.replace('/3', '')}/t/p/w600_and_h900_face${filePath}`
  }
  if (detail.backdrop_path) return `${TMDB_API_BASE.replace('/3', '')}/t/p/w600_and_h900_face${detail.backdrop_path}`
  return ''
}

function providerNames(detail) {
  const providers = new Set()
  const results = detail?.['watch/providers']?.results || {}
  const regionOrder = ['IN', 'US', 'GB', 'CA', 'AU', 'DE', 'FR']
  const seen = new Set()

  function addList(list) {
    if (!Array.isArray(list)) return
    list.forEach((provider) => {
      const name = String(provider.provider_name || '').trim()
      if (name && !seen.has(name)) {
        seen.add(name)
        providers.add(name)
      }
    })
  }

  for (const region of regionOrder) {
    const group = results[region]
    if (!group) continue
    addList(group.flatrate)
    addList(group.rent)
    addList(group.buy)
    if (providers.size) break
  }

  return Array.from(providers)
}

function mapDetail(detail, mediaType, badge = '') {
  const isSeries = mediaType === 'tv'
  const title = isSeries ? detail.name : detail.title
  const releaseDate = isSeries ? detail.first_air_date : detail.release_date
  const vote = Number(detail.vote_average)
  const imdbId = String(detail?.external_ids?.imdb_id || detail?.imdb_id || '').trim()

  return {
    id: `tmdb-${mediaType}-${detail.id}`,
    tmdbId: String(detail.id),
    imdbId,
    imdbUrl: imdbId ? `https://www.imdb.com/title/${imdbId}` : '',
    title: title || 'Untitled',
    year: releaseDate ? String(releaseDate).slice(0, 4) : 'TBA',
    type: isSeries ? 'Show' : 'Movie',
    releaseDate: releaseDate || '',
    poster: extractPoster(detail),
    backdrop: detail.backdrop_path ? `${TMDB_API_BASE.replace('/3', '')}/t/p/original${detail.backdrop_path}` : '',
    rating: Number.isFinite(vote) && vote > 0 ? vote.toFixed(1) : 'N/A',
    imdb: Number.isFinite(vote) && vote > 0 ? vote.toFixed(1) : 'N/A',
    rt: detail?.vote_count ? `${detail.vote_count}` : 'N/A',
    genre: Array.isArray(detail.genres) ? detail.genres.map((g) => g.name).filter(Boolean) : [],
    director: Array.isArray(detail.credits?.crew) ? detail.credits.crew.filter((p) => p.job === 'Director').map((p) => p.name).join(', ') : 'TMDB',
    cast: Array.isArray(detail.credits?.cast)
      ? detail.credits.cast.slice(0, 30).map((p) => ({
          name: p.name || '',
          role: p.character || 'Cast',
          img: p.profile_path ? `${TMDB_API_BASE.replace('/3', '')}/t/p/w500${p.profile_path}` : '',
        })).filter((p) => p.name)
      : [],
    overview: detail.overview || 'No overview available.',
    country: Array.isArray(detail.production_countries) ? detail.production_countries.map((c) => c.name || c).filter(Boolean).join(', ') : 'N/A',
    language: String(detail.original_language || '').toUpperCase() || 'N/A',
    duration: isSeries ? (Array.isArray(detail.episode_run_time) ? detail.episode_run_time.find(Boolean) : 0) ? `~${detail.episode_run_time.find(Boolean)}m/ep` : 'TBA' : detail.runtime ? `${detail.runtime}m` : 'TBA',
    platform: providerNames(detail),
    trailer: Array.isArray(detail.videos?.results) ? (() => {
      const video = detail.videos.results.find((v) => v.site === 'YouTube' && /Trailer|Teaser/i.test(v.type || '')) || detail.videos.results.find((v) => v.site === 'YouTube')
      return video?.key ? `https://www.youtube.com/watch?v=${video.key}` : ''
    })() : '',
    talkBadge: badge || (isSeries ? 'Series Buzz' : 'Upcoming'),
  }
}

async function main() {
  const today = new Date()
  const isoDate = (date) => {
    const d = new Date(date)
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.toISOString().slice(0, 10)
  }

  const fetchPaths = [
    [`/discover/movie?sort_by=popularity.desc&region=IN&primary_release_date.gte=${isoDate(today)}&primary_release_date.lte=${isoDate(new Date(today.getTime() + 7 * 86400000))}`, 'movie', 'This Week'],
    [`/discover/movie?sort_by=popularity.desc&region=IN&primary_release_date.gte=${isoDate(today)}&primary_release_date.lte=${isoDate(new Date(today.getTime() + 30 * 86400000))}`, 'movie', 'This Month'],
    [`/discover/tv?sort_by=popularity.desc&first_air_date.gte=${isoDate(today)}&first_air_date.lte=${isoDate(new Date(today.getTime() + 180 * 86400000))}`, 'tv', 'Series Soon'],
    ['/trending/movie/week?', 'movie', 'Trending'],
    ['/trending/tv/week?', 'tv', 'Trending Series'],
  ]

  const idSet = new Map()
  for (const [pathSuffix, mediaType, badge] of fetchPaths) {
    const payload = await fetchTmdb(pathSuffix)
    const results = Array.isArray(payload.results) ? payload.results : []
    for (const item of results.slice(0, 20)) {
      const key = `${mediaType}:${item.id}`
      if (!idSet.has(key)) idSet.set(key, { id: item.id, mediaType, badge })
    }
  }

  const items = []
  for (const { id, mediaType, badge } of idSet.values()) {
    try {
      const detail = await fetchTmdb(`/${mediaType}/${id}?append_to_response=credits,videos,watch/providers,external_ids,images`)
      const mapped = mapDetail(detail, mediaType, badge)
      items.push(mapped)
      console.log(`Fetched ${mapped.title} (${mapped.id})`)
    } catch (error) {
      console.warn(`Failed to fetch ${mediaType}/${id}:`, error.message)
    }
  }

  await writeFile(OUTPUT_FILE, JSON.stringify(items, null, 2), 'utf8')
  const posters = items.map((item) => ({ id: item.id, title: item.title, poster: item.poster, backdrop: item.backdrop }))
  await writeFile(OUTPUT_POSTER_FILE, JSON.stringify(posters, null, 2), 'utf8')
  console.log(`Saved ${items.length} TMDB items to ${OUTPUT_FILE}`)
  console.log(`Saved ${posters.length} poster links to ${OUTPUT_POSTER_FILE}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
