import { useEffect, useMemo, useState } from 'react'
import {
  findActorByName,
  findMovieById,
  getAllMovies,
  getMoviesOnly,
  getSeriesOnly,
  MOVIES_DATA,
} from './data.js'
import { CastCard, CatalogGrid, Footer, Nav, PosterCard, PosterRow, Section, typeFilter } from './components.jsx'
import { fetchPersonProfile, fetchTalkFeed, fetchTmdbDetailByQuery, fetchTmdbTitle, parseTmdbId } from './tmdb.js'
import { findLocalOrExtraMovie, isSeries, mergeUnique, movieHref, normalizeText, posterFallback, searchItems } from './utils.js'

const BASE_URL = import.meta.env.BASE_URL

const OTT_LOGOS = {
  Netflix: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'Prime Video': `${BASE_URL}prime-video-logo.svg`,
  Hotstar: 'https://cdn.jiostar.com/jiostar/wp-content/uploads/2025/07/JioHot-Star-1.png',
  Crunchyroll: 'https://images.icon-icons.com/2389/PNG/512/crunchyroll_logo_icon_145360.png',
}

const DOOMSDAY_HERO = 'https://comicbookmovie.com/cdn-cgi/image/fit=cover,width=920,quality=75/images/articles/banners/avengers-doomsday-directors-wish-robert-downey-jr-a-happy-60th-birthday-with-awesome-doctor-doom-fan-art-ab218483.jpg'
const TALK_EXCLUDED_TITLES = ['kennedy', 'wuthering heights', 'one piece']

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/')
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return hash.replace(/^#/, '') || '/'
}

function useExtras() {
  const [extras, setExtras] = useState([])
  const addExtras = (items) => setExtras((current) => mergeUnique([...current, ...(Array.isArray(items) ? items : [items])]))
  return [extras, addExtras]
}

function mergePlatforms(localPlatforms = [], remotePlatforms = []) {
  const set = new Set()
  ;[...(Array.isArray(localPlatforms) ? localPlatforms : []), ...(Array.isArray(remotePlatforms) ? remotePlatforms : [])]
    .filter(Boolean)
    .forEach((item) => set.add(item))
  return Array.from(set)
}

function isPlaceholderPoster(url) {
  const value = String(url || '').trim()
  if (!value) return true
  return /ui-avatars\.com|upload\.wikimedia\.org|placeholder|no-image|\b(w1280|w200|w300)\b/.test(value)
}

function mergeMovieDetails(localItem, remoteItem) {
  if (!localItem) return remoteItem
  if (!remoteItem) return localItem
  const hasLocalPoster = !isPlaceholderPoster(localItem.poster)
  const hasLocalBackdrop = !isPlaceholderPoster(localItem.backdrop)
  return {
    ...remoteItem,
    ...localItem,
    platform: mergePlatforms(localItem.platform, remoteItem.platform),
    cast: Array.isArray(localItem.cast) && localItem.cast.length ? localItem.cast : remoteItem.cast,
    overview: localItem.overview || remoteItem.overview,
    poster: hasLocalPoster ? localItem.poster : remoteItem.poster || localItem.poster,
    backdrop: hasLocalBackdrop ? localItem.backdrop : remoteItem.backdrop || localItem.backdrop,
    country: localItem.country || remoteItem.country,
    language: localItem.language || remoteItem.language,
    duration: localItem.duration || remoteItem.duration,
    trailer: localItem.trailer || remoteItem.trailer,
    vibes: localItem.vibes || remoteItem.vibes,
    wiki: localItem.wiki || remoteItem.wiki,
    imdb: localItem.imdb && localItem.imdb !== 'N/A' ? localItem.imdb : remoteItem.imdb,
    imdbUrl: localItem.imdbUrl || remoteItem.imdbUrl,
  }
}

function VibeChart({ vibes = {} }) {
  const entries = Object.entries(vibes)
    .filter(([, value]) => Number(value) > 0)
    .map(([name, value]) => ({ name, value: Number(value) }))
  const total = entries.reduce((sum, item) => sum + item.value, 0) || 100
  const radius = 72
  const circumference = 2 * Math.PI * radius
  let offset = 0
  const colors = ['#28e85f', '#8cff9d', '#00d68f', '#d8ff68', '#63ffca', '#b7ff5f']

  const segments = entries.map((entry, index) => {
    const dash = (entry.value / total) * circumference
    const segment = { ...entry, color: colors[index % colors.length], dash, offset }
    offset += dash
    return segment
  })

  return (
    <div className="vibe-chart-wrap">
      <div className="vibe-chart-graphic">
        <svg viewBox="0 0 220 220" className="vibe-chart-svg">
          <circle cx="110" cy="110" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="24" />
          {segments.map((segment) => (
            <circle
              key={segment.name}
              cx="110"
              cy="110"
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth="24"
              strokeDasharray={`${segment.dash} ${circumference - segment.dash}`}
              strokeDashoffset={-segment.offset}
              strokeLinecap="round"
              transform="rotate(-90 110 110)"
            />
          ))}
          <text x="110" y="118" textAnchor="middle" fill="var(--text)" fontSize="16" fontWeight="700">Vibes</text>
        </svg>
      </div>
      <div className="vibe-chart-legend">
        {segments.map((segment) => (
          <div className="vibe-row" key={segment.name}>
            <span className="vibe-swatch" style={{ background: segment.color }} />
            <span>{segment.name}</span>
            <span>{segment.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const path = useHashRoute()
  const [extras, addExtras] = useExtras()

  if (path.startsWith('/movie/')) return <MoviePage id={decodeURIComponent(path.replace('/movie/', ''))} extras={extras} addExtras={addExtras} />
  if (path.startsWith('/cast')) return <CastPage path={path} />
  if (path.startsWith('/movies')) return <CatalogPage type="movies" extras={extras} />
  if (path.startsWith('/series')) return <CatalogPage type="series" extras={extras} />
  return <HomePage extras={extras} addExtras={addExtras} />
}

function HomePage({ extras, addExtras }) {
  const [talk, setTalk] = useState([])
  const shouldShowInTalk = (item) => {
    const title = normalizeText(item?.title || '')
    const id = normalizeText(item?.id || '')
    return !TALK_EXCLUDED_TITLES.some((blocked) => title.includes(blocked) || id.includes(blocked))
  }
  const manualTalk = useMemo(() => (MOVIES_DATA.talkOfTown || []).filter(Boolean).filter(shouldShowInTalk), [])

  useEffect(() => {
    fetchTalkFeed()
      .then((items) => {
        setTalk(items)
        addExtras(items)
      })
      .catch(() => setTalk([]))
  }, [])

  const talkFeed = mergeUnique([...manualTalk, ...(talk || [])]).filter(shouldShowInTalk).slice(0, 16)
  const weeklyReleases = talkFeed.filter((item) => ['This Week', 'Series Soon', 'Upcoming', 'Manual'].includes(item.talkBadge)).slice(0, 14)
  const all = mergeUnique([...getAllMovies(), ...extras])

  return (
    <>
      <Nav active="home" />
      <section className="hero doomsday-hero">
        <div className="hero-bg" style={{ backgroundImage: `url('${DOOMSDAY_HERO}')` }} />
        <div className="hero-fade" />
      </section>

      <main className="main-wrap" id="talk">
        <div className="content-grid">
          <div className="left-col">
            <Section title="Talk Of The Town" badge={talk.length ? 'TMDB Weekly' : 'Manual'}>
              <PosterRow items={talkFeed} />
            </Section>
            <Section title="Weekly Releases">
              <PosterRow items={weeklyReleases.length ? weeklyReleases : talkFeed.slice(0, 14)} />
            </Section>
            <Section title="Most Interested">
              <PosterRow items={(MOVIES_DATA.mostInterested || []).slice(0, 12)} />
            </Section>
            <Section
              title={
                <div className="section-title-with-logo">
                  <img className="ott-section-logo" src={OTT_LOGOS.Netflix} alt="Netflix" />
                  <span>Netflix Picks</span>
                </div>
              }
            >
              <PosterRow items={MOVIES_DATA.netflix || []} />
            </Section>
            <Section
              title={
                <div className="section-title-with-logo">
                  <img className="ott-section-logo prime-video-logo" src={OTT_LOGOS['Prime Video']} alt="Prime Video" />
                  <span>Prime Video Picks</span>
                </div>
              }
            >
              <PosterRow items={MOVIES_DATA.prime || []} />
            </Section>
            <Section
              title={
                <div className="section-title-with-logo">
                  <img className="ott-section-logo" src={OTT_LOGOS.Hotstar} alt="Hotstar" />
                  <span>Hotstar Picks</span>
                </div>
              }
            >
              <PosterRow items={MOVIES_DATA.hotstar || []} />
            </Section>
            <Section
              title={
                <div className="section-title-with-logo">
                  <img className="ott-section-logo" src={OTT_LOGOS.Crunchyroll} alt="Crunchyroll" />
                  <span>Crunchyroll Picks</span>
                </div>
              }
            >
              <PosterRow items={MOVIES_DATA.crunchyroll || []} />
            </Section>
          </div>
          <aside className="right-col">
            <div className="sidebar-card">
              <div className="sidebar-head">
                <h3>Most Interested</h3>
              </div>
              {(MOVIES_DATA.mostInterested || []).slice(0, 8).map((item, index) => (
                <a className="si-item" href={movieHref(item.id)} key={`${item.id}-${index}`}>
                  <span className="si-rank">{index + 1}</span>
                  <div className="si-poster">
                    <img
                      src={item.poster || posterFallback(item.title, 80)}
                      alt={item.title}
                      onError={(event) => {
                        const fallback = posterFallback(item.title, 80)
                        if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback
                      }}
                    />
                  </div>
                  <div className="si-info">
                    <h4>{item.title}</h4>
                    <p>{item.date} • {item.tag}</p>
                    <span className="si-fire">{item.interested} Interested</span>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}

function CatalogPage({ type, extras }) {
  const isMoviePage = type === 'movies'
  const base = isMoviePage ? getMoviesOnly() : getSeriesOnly()
  const all = mergeUnique([...base, ...extras.filter((item) => (isMoviePage ? !isSeries(item) : isSeries(item)))])
  const params = new URLSearchParams((window.location.hash.split('?')[1] || '').trim())
  const [query, setQuery] = useState(params.get('q') || '')
  const filtered = searchItems(all, query)

  return (
    <>
      <Nav active={isMoviePage ? 'movies' : 'series'} />
      <main className="catalog-wrap">
        <section className="catalog-hero">
          <h1>{isMoviePage ? 'All Movies' : 'All Series'}</h1>
          <p>{isMoviePage ? 'Every movie in POPTalk plus TMDB discoveries.' : 'Every show and series in POPTalk plus TMDB discoveries.'}</p>
          <div className="catalog-stats">{filtered.length} titles</div>
          <div className="catalog-search">
            <span>Search</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${isMoviePage ? 'movies' : 'series'}...`} />
          </div>
        </section>
        <Section title={isMoviePage ? 'Movie Library' : 'Series Library'}>
          <CatalogGrid items={filtered} />
        </Section>
      </main>
      <Footer />
    </>
  )
}

function MoviePage({ id, extras, addExtras }) {
  const [remote, setRemote] = useState(null)
  const [loadingRemote, setLoadingRemote] = useState(Boolean(parseTmdbId(id)))
  const localMovie = findLocalOrExtraMovie(id, extras)
  const movie = remote ? mergeMovieDetails(localMovie, remote) : localMovie

  useEffect(() => {
    if (parseTmdbId(id)) {
      setLoadingRemote(true)
      fetchTmdbTitle(id)
        .then((item) => {
          setRemote(item)
          if (item) addExtras(item)
        })
        .finally(() => setLoadingRemote(false))
      return
    }

    if (!localMovie) return
    const hasNoRemotePlatform = !Array.isArray(localMovie.platform) || localMovie.platform.length === 0 || localMovie.platform.every((p) => /theatr|cinema|movie hall/i.test(String(p || '')))
    if (!hasNoRemotePlatform) return

    setLoadingRemote(true)
    const type = localMovie.type && localMovie.type.toLowerCase().includes('show') ? 'tv' : 'movie'
    fetchTmdbDetailByQuery(localMovie.title, type)
      .then((item) => {
        if (item) {
          setRemote(item)
          addExtras(item)
        }
      })
      .finally(() => setLoadingRemote(false))
  }, [id, localMovie])

  if (!movie && loadingRemote) return <Shell active="home"><main className="state-wrap">Loading TMDB title...</main></Shell>
  if (!movie) return <Shell active="home"><main className="state-wrap">Movie not found.</main></Shell>

  const similar = getAllMovies().filter((item) => item.id !== movie.id && item.genre?.some((g) => movie.genre?.includes(g))).slice(0, 10)

  return (
    <>
      <Nav active={isSeries(movie) ? 'series' : 'movies'} />
      <section className="info-hero">
        <div className="info-backdrop" style={{ backgroundImage: `url('${movie.backdrop || movie.poster || posterFallback(movie.title)}')` }} />
        <div className="info-shade" />
        <div className="info-content">
          <div className="info-poster">
            <img
              src={movie.poster || movie.backdrop || posterFallback(movie.title)}
              alt={movie.title}
              onError={(event) => {
                const fallback = posterFallback(movie.title)
                if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback
              }}
            />
          </div>
          <div className="info-main">
            <span className="hero-tag">{movie.type} • {movie.year}</span>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <div className="info-meta">
              <span>{movie.duration || 'TBA'}</span>
              <span>{movie.language || 'N/A'}</span>
              <span>{movie.country || 'N/A'}</span>
              <span>{movie.imdb && movie.imdb !== 'N/A' ? `${movie.imdb}/10` : 'Not rated'}</span>
            </div>
            <div className="genre-row">{(movie.genre || []).map((genre) => <span className="g-tag" key={genre}>{genre}</span>)}</div>
            {(movie.platform || []).length ? (
              <div className="platform-row">
                {(movie.platform || []).map((platform) => (
                  <span className={`platform-pill platform-${String(platform).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={platform}>{platform}</span>
                ))}
              </div>
            ) : null}
            {movie.trailer ? <a className="btn-pop primary" href={movie.trailer} target="_blank" rel="noreferrer">Watch Trailer</a> : null}
          </div>
        </div>
      </section>
      {movie.vibes ? (
        <Section title="Vibe Chart">
          <VibeChart vibes={movie.vibes} />
        </Section>
      ) : null}
      <main className="detail-wrap">
        <Section title="Cast & Crew">
          <div className="cast-scroll">{(movie.cast || []).map((member) => <CastCard key={`${member.name}-${member.role}`} member={member} from={movie.id} />)}</div>
        </Section>
        {movie.seasons?.length ? (
          <Section title="Seasons">
            <div className="season-grid">{movie.seasons.map((season) => <div className="season-card" key={`${season.name}-${season.year}`}><h4>{season.name}</h4><p>{season.episodes} Episodes • {season.year}</p></div>)}</div>
          </Section>
        ) : null}
        <Section title="Similar Titles">
          <PosterRow items={similar} />
        </Section>
      </main>
      <Footer />
    </>
  )
}

function CastPage({ path }) {
  const query = new URLSearchParams(path.split('?')[1] || '')
  const name = query.get('name') || ''
  const personId = query.get('tmdbPersonId') || ''
  const localActor = findActorByName(name)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetchPersonProfile({ name, tmdbPersonId: personId }).then(setProfile).catch(() => setProfile(null))
  }, [name, personId])

  const credits = mergeUnique([...(localActor?.credits || []), ...(profile?.topCredits || [])])
  const displayName = profile?.name || localActor?.name || name || 'Cast member'

  return (
    <>
      <Nav active="home" />
      <section className="cast-hero">
        <div className="cast-hero-bg" style={{ backgroundImage: `url('${profile?.profileImage || localActor?.img || posterFallback(displayName)}')` }} />
        <div className="cast-hero-fade" />
        <div className="cast-hero-inner">
          <div className="cast-head">
            <div className="cast-avatar-lg">
            <img
              src={profile?.profileImage || localActor?.img || posterFallback(displayName)}
              alt={displayName}
              onError={(event) => {
                const fallback = posterFallback(displayName)
                if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback
              }}
            />
          </div>
            <div className="cast-main">
              <p className="cast-kicker">{profile?.knownFor || 'Performer'}</p>
              <h1>{displayName}</h1>
              <div className="cast-meta-inline">
                {profile?.birthday ? <span>Born {profile.birthday}</span> : null}
                {profile?.placeOfBirth ? <span>From {profile.placeOfBirth}</span> : null}
                <span>{credits.length} credits</span>
              </div>
              <div className="cast-link-row">
                {profile?.tmdbUrl ? <a href={profile.tmdbUrl} target="_blank" rel="noreferrer">TMDB</a> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="cast-wrap">
        <Section title="Biography">
          <p className="cast-bio">{profile?.biography || localActor?.bioLocal || 'Biography is not available right now.'}</p>
        </Section>
        <Section title="Filmography">
          <div className="catalog-grid">{credits.map((credit) => <PosterCard item={credit} key={`${credit.id}-${credit.role}`} />)}</div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

function Shell({ active, children }) {
  return (
    <>
      <Nav active={active} />
      {children}
      <Footer />
    </>
  )
}
