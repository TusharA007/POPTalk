const TMDB_API_BASE = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w600_and_h900_face'
const TMDB_BACKDROP_BASE = 'https://image.tmdb.org/t/p/original'
const DEFAULT_TMDB_API_KEYS = ['1d66712bb8b0ba574af641067b35f74a', 'd05d55df5bdb6ccdc7307d3e2975d412']
const TMDB_API_KEYS_URL = '/tmdb-api.json'
let cachedTmdbApiKeys = null

function parseTmdbKeys(value) {
  if (!value) return []
  if (Array.isArray(value)) return value.filter(Boolean).map(String)
  const text = String(value || '').trim()
  if (!text) return []
  if (text.startsWith('[')) {
    try {
      const parsed = JSON.parse(text)
      return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : []
    } catch (_err) {
      return []
    }
  }
  return text.split(/[,;\s]+/).filter(Boolean).map(String)
}

async function getTmdbApiKeys() {
  if (Array.isArray(cachedTmdbApiKeys) && cachedTmdbApiKeys.length) return cachedTmdbApiKeys

  const fromWindow = window.POP_TMDB_API_KEYS || window.POPTMDB_API_KEYS || window.POP_TMDB_API_KEY || window.POPTMDB_API_KEY || ''
  const windowKeys = parseTmdbKeys(fromWindow)
  if (windowKeys.length) {
    cachedTmdbApiKeys = windowKeys
    return cachedTmdbApiKeys
  }

  try {
    const localValue = localStorage.getItem('poptalk_tmdb_api_keys') || localStorage.getItem('POPTALK_TMDB_API_KEYS')
    const localKeys = parseTmdbKeys(localValue)
    if (localKeys.length) {
      cachedTmdbApiKeys = localKeys
      return cachedTmdbApiKeys
    }
  } catch (_err) {
    // ignore storage errors
  }

  try {
    const response = await fetch(TMDB_API_KEYS_URL)
    if (response.ok) {
      const json = await response.json()
      const fileKeys = parseTmdbKeys(json?.keys)
      if (fileKeys.length) {
        cachedTmdbApiKeys = fileKeys
        return cachedTmdbApiKeys
      }
    }
  } catch (_err) {
    // ignore fetch errors
  }

  cachedTmdbApiKeys = DEFAULT_TMDB_API_KEYS
  return cachedTmdbApiKeys
}

function isoDate(date) {
  const d = new Date(date)
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function addDays(date, days) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

function weekKey() {
  const now = new Date()
  const firstJan = new Date(now.getFullYear(), 0, 1)
  const days = Math.floor((now - firstJan) / 86400000)
  return `${now.getFullYear()}-w${Math.ceil((days + firstJan.getDay() + 1) / 7)}`
}

export async function fetchTmdb(path, language = 'en-US') {
  const keys = await getTmdbApiKeys()
  if (!keys.length) throw new Error('Missing TMDB API key')
  const sep = path.includes('?') ? '&' : '?'
  let lastError = null

  for (const key of keys) {
    try {
      const response = await fetch(`${TMDB_API_BASE}${path}${sep}api_key=${encodeURIComponent(key)}&language=${encodeURIComponent(language)}`)
      if (response.ok) return response.json()
      lastError = new Error(`TMDB request failed: ${response.status} for key ${key}`)
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err))
    }
  }

  throw lastError || new Error('TMDB request failed for all keys')
}

async function searchTmdbWithLanguages(query, mediaType = 'movie') {
  const languages = ['en-US', 'hi-IN', 'te-IN']
  for (const language of languages) {
    const payload = await fetchTmdb(`/search/${mediaType}?query=${encodeURIComponent(query)}&page=1`, language)
    if (Array.isArray(payload.results) && payload.results.length) {
      return payload
    }
  }
  return { results: [] }
}

function genreNames(detail) {
  return Array.isArray(detail?.genres) ? detail.genres.map((g) => g.name).filter(Boolean).slice(0, 5) : []
}

function runtime(detail, isSeries) {
  if (isSeries) {
    const run = Array.isArray(detail.episode_run_time) ? detail.episode_run_time.find(Boolean) : 0
    return run ? `~${run}m/ep` : 'TBA'
  }
  return detail.runtime ? `${detail.runtime}m` : 'TBA'
}

function trailerUrl(detail) {
  const videos = Array.isArray(detail?.videos?.results) ? detail.videos.results : []
  const picked =
    videos.find((v) => v.site === 'YouTube' && /Trailer|Teaser/i.test(v.type || '')) ||
    videos.find((v) => v.site === 'YouTube')
  return picked?.key ? `https://www.youtube.com/watch?v=${picked.key}` : ''
}

function providerNames(detail) {
  const providers = new Set()
  const countries = detail?.watch/providers?.results || {}
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

  for (const country of regionOrder) {
    const data = countries[country]
    if (!data) continue
    addList(data.flatrate)
    addList(data.rent)
    addList(data.buy)
    if (providers.size) break
  }

  return Array.from(providers)
}

function extractBestPoster(detail) {
  if (detail?.poster_path) return `${TMDB_IMAGE_BASE}${detail.poster_path}`
  if (Array.isArray(detail?.images?.posters) && detail.images.posters.length) {
    const filePath = detail.images.posters.find((p) => p.file_path)?.file_path
    if (filePath) return `${TMDB_IMAGE_BASE}${filePath}`
  }
  if (detail?.backdrop_path) return `${TMDB_IMAGE_BASE}${detail.backdrop_path}`
  return ''
}

export function mapTmdbDetail(detail, mediaType, badge = '') {
  if (!detail?.id) return null
  const isSeries = mediaType === 'tv'
  const title = isSeries ? detail.name : detail.title
  const releaseDate = isSeries ? detail.first_air_date : detail.release_date
  const vote = Number(detail.vote_average)
  const platforms = providerNames(detail)
  const imdbId = String(detail?.external_ids?.imdb_id || detail?.imdb_id || '').trim()
  const poster = extractBestPoster(detail)

  return {
    id: `tmdb-${mediaType}-${detail.id}`,
    tmdbId: String(detail.id),
    imdbId,
    imdbUrl: imdbId ? `https://www.imdb.com/title/${imdbId}` : '',
    title: title || 'Untitled',
    year: releaseDate ? String(releaseDate).slice(0, 4) : 'TBA',
    type: isSeries ? 'Show' : 'Movie',
    releaseDate: releaseDate || '',
    poster,
    backdrop: detail.backdrop_path ? `${TMDB_BACKDROP_BASE}${detail.backdrop_path}` : '',
    rating: Number.isFinite(vote) && vote > 0 ? vote.toFixed(1) : 'N/A',
    imdb: Number.isFinite(vote) && vote > 0 ? vote.toFixed(1) : 'N/A',
    rt: 'N/A',
    genre: genreNames(detail),
    director: isSeries && detail.created_by?.length ? detail.created_by.map((p) => p.name).join(', ') : 'TMDB',
    cast: Array.isArray(detail.credits?.cast)
      ? detail.credits.cast
          .slice(0, 30)
          .map((p) => ({
            name: p.name || '',
            role: p.character || 'Cast',
            img: p.profile_path ? `${TMDB_IMAGE_BASE}${p.profile_path}` : '',
            tmdbPersonId: p.id ? String(p.id) : '',
          }))
          .filter((p) => p.name)
      : [],
    overview: detail.overview || 'No overview is available yet.',
    country: (detail.origin_country || detail.production_countries || [])
      .map((c) => c.name || c)
      .filter(Boolean)
      .join(', ') || 'N/A',
    language: String(detail.original_language || '').toUpperCase() || 'N/A',
    ageRating: 'N/A',
    duration: runtime(detail, isSeries),
    platform: platforms.length ? platforms : ['TMDB'],
    trailer: trailerUrl(detail),
    wiki: '',
    seasons:
      isSeries && Array.isArray(detail.seasons)
        ? detail.seasons.map((s) => ({
            name: s.name,
            episodes: s.episode_count,
            year: s.air_date ? String(s.air_date).slice(0, 4) : 'TBA',
          }))
        : [],
    talkBadge: badge || (isSeries ? 'Series Buzz' : 'Upcoming'),
    vibes: { drama: 35, action: 25, thriller: 20, adventure: 20 },
  }
}

export function parseTmdbId(id) {
  const match = String(id || '').match(/^tmdb-(movie|tv)-(\d+)$/)
  return match ? { mediaType: match[1], tmdbId: match[2] } : null
}

export async function fetchTmdbTitle(id) {
  const route = parseTmdbId(id)
  if (!route) return null
  const detail = await fetchTmdb(`/${route.mediaType}/${route.tmdbId}?append_to_response=credits,videos,watch/providers,external_ids,images`)
  return mapTmdbDetail(detail, route.mediaType)
}

export async function searchTmdb(query, mediaType = 'movie') {
  const text = String(query || '').trim()
  if (!text) return []
  const payload = await searchTmdbWithLanguages(text, mediaType)
  if (!Array.isArray(payload.results)) return []
  return payload.results.map((result) => ({
    id: `tmdb-${mediaType === 'movie' ? 'movie' : 'tv'}-${result.id}`,
    tmdbId: String(result.id),
    title: result.title || result.name || 'Untitled',
    year: String((result.release_date || result.first_air_date || '').slice(0, 4)) || 'TBA',
    type: mediaType === 'movie' ? 'Movie' : 'Show',
    poster: result.poster_path ? `${TMDB_IMAGE_BASE}${result.poster_path}` : result.backdrop_path ? `${TMDB_IMAGE_BASE}${result.backdrop_path}` : '',
    backdrop: result.backdrop_path ? `${TMDB_IMAGE_BASE}${result.backdrop_path}` : result.poster_path ? `${TMDB_IMAGE_BASE}${result.poster_path}` : '',
    platform: ['TMDB'],
    talkBadge: mediaType === 'movie' ? 'TMDB Movie' : 'TMDB Series',
  }))
}

export async function fetchTmdbDetailByQuery(query, mediaType = 'movie') {
  const text = String(query || '').trim()
  if (!text) return null

  const payload = await fetchTmdb(`/search/${mediaType}?query=${encodeURIComponent(text)}&page=1`)
  const first = Array.isArray(payload.results) && payload.results.length ? payload.results[0] : null
  if (first && first.id) {
    const detail = await fetchTmdb(`/${mediaType}/${first.id}?append_to_response=credits,videos,watch/providers,external_ids,images`)
    return mapTmdbDetail(detail, mediaType)
  }

  if (mediaType === 'movie') {
    const fallback = await searchTmdb(query, 'tv')
    if (fallback.length && fallback[0].tmdbId) {
      const detail = await fetchTmdb(`/tv/${fallback[0].tmdbId}?append_to_response=credits,videos,watch/providers,external_ids,images`)
      return mapTmdbDetail(detail, 'tv')
    }
  }

  return null
}

export async function fetchTalkFeed() {
  const cacheKey = `poptalk-react-talk:${weekKey()}`
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null')
    if (Array.isArray(cached?.items) && cached.items.length) return cached.items
  } catch (_err) {
    // ignore cache
  }

  const today = new Date()
  const paths = [
    [`/discover/movie?sort_by=popularity.desc&region=IN&primary_release_date.gte=${isoDate(today)}&primary_release_date.lte=${isoDate(addDays(today, 7))}`, 'movie', 'This Week'],
    [`/discover/movie?sort_by=popularity.desc&region=IN&primary_release_date.gte=${isoDate(today)}&primary_release_date.lte=${isoDate(addDays(today, 31))}`, 'movie', 'This Month'],
    [`/discover/movie?sort_by=popularity.desc&region=IN&primary_release_date.gte=${isoDate(today)}&primary_release_date.lte=${isoDate(addDays(today, 365))}`, 'movie', 'Coming Soon'],
    [`/discover/tv?sort_by=popularity.desc&first_air_date.gte=${isoDate(today)}&first_air_date.lte=${isoDate(addDays(today, 180))}`, 'tv', 'Series Soon'],
    ['/trending/movie/week?', 'movie', 'Trending'],
    ['/trending/tv/week?', 'tv', 'Trending Series'],
  ]

  const groups = await Promise.all(
    paths.map(([path, mediaType, badge]) =>
      fetchTmdb(path)
        .then((payload) => (payload.results || []).slice(0, 5).map((item) => ({ id: item.id, mediaType, badge })))
        .catch(() => []),
    ),
  )

  const seen = new Set()
  const refs = groups.flat().filter((ref) => {
    const key = `${ref.mediaType}:${ref.id}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  }).slice(0, 16)

  const details = await Promise.all(
    refs.map((ref) =>
      fetchTmdb(`/${ref.mediaType}/${ref.id}?append_to_response=credits,videos,watch/providers,external_ids,images`)
        .then((detail) => mapTmdbDetail(detail, ref.mediaType, ref.badge))
        .catch(() => null),
    ),
  )
  const items = details.filter(Boolean)
  try {
    localStorage.setItem(cacheKey, JSON.stringify({ createdAt: Date.now(), items }))
  } catch (_err) {
    // ignore storage errors
  }
  return items
}

export async function fetchPersonProfile({ name, tmdbPersonId }) {
  let personId = tmdbPersonId
  if (!personId && name) {
    const search = await fetchTmdb(`/search/person?query=${encodeURIComponent(name)}&page=1`)
    personId = search.results?.[0]?.id
  }
  if (!personId) return null

  const [details, credits, externalIds] = await Promise.all([
    fetchTmdb(`/person/${personId}?`),
    fetchTmdb(`/person/${personId}/combined_credits?`),
    fetchTmdb(`/person/${personId}/external_ids?`),
  ])

  const topCredits = (credits.cast || [])
    .filter((item) => item.title || item.name)
    .sort((a, b) => String(b.release_date || b.first_air_date || '').localeCompare(String(a.release_date || a.first_air_date || '')))
    .slice(0, 30)
    .map((item) => ({
      id: `tmdb-${item.media_type === 'tv' ? 'tv' : 'movie'}-${item.id}`,
      title: item.title || item.name,
      year: String(item.release_date || item.first_air_date || 'TBA').slice(0, 4),
      type: item.media_type === 'tv' ? 'Show' : 'Movie',
      role: item.character || 'Cast',
      poster: item.poster_path ? `${TMDB_IMAGE_BASE}${item.poster_path}` : '',
    }))

  return {
    id: String(personId),
    name: details.name || name,
    biography: details.biography || '',
    birthday: details.birthday || '',
    placeOfBirth: details.place_of_birth || '',
    knownFor: details.known_for_department || 'Performer',
    profileImage: details.profile_path ? `${TMDB_IMAGE_BASE}${details.profile_path}` : '',
    imdbUrl: externalIds.imdb_id ? `https://www.imdb.com/name/${externalIds.imdb_id}` : '',
    tmdbUrl: `https://www.themoviedb.org/person/${personId}`,
    topCredits,
  }
}
