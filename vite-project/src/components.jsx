import { useMemo, useState, useEffect, useRef } from 'react'
import { getAllMovies } from './data.js'
import { castHref, isSeries, movieHref, posterFallback, searchItems } from './utils.js'
import { searchTmdb } from './tmdb.js'

const BASE_URL = import.meta.env.BASE_URL

export function Nav({ active = 'home' }) {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [compactSearchOpen, setCompactSearchOpen] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(() => (typeof window === 'undefined' ? 1200 : window.innerWidth))
  const closeMobile = () => {
    setMobileOpen(false)
    setCompactSearchOpen(false)
  }

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isCompactNav = viewportWidth <= 1080
  const isMobileNav = viewportWidth <= 640
  const navStyle = {
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1200,
    minHeight: 64,
    background: '#0b0b0d',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  }
  const navInnerStyle = {
    minHeight: 64,
    display: 'flex',
    alignItems: 'center',
    gap: isCompactNav ? 8 : 12,
    padding: isCompactNav ? '0 12px' : '0 16px',
    width: isCompactNav ? '100%' : '100%',
    maxWidth: isCompactNav ? (isMobileNav ? 420 : 760) : 1440,
    margin: '0 auto',
  }
  const navCenterStyle = isCompactNav ? {
    display: mobileOpen ? 'flex' : 'none',
    position: 'absolute',
    top: 64,
    left: 12,
    right: 12,
    maxWidth: 360,
    margin: '0 auto',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 4,
    padding: 8,
    background: '#111216',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    boxShadow: '0 18px 50px rgba(0, 0, 0, 0.36)',
  } : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    flex: '1 1 auto',
    minWidth: 0,
    position: 'static'
  }
  const navTextStyle = { display: 'inline' }
  const compactActionStyle = isCompactNav ? {
    width: 38,
    height: 42,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    background: 'rgba(255, 255, 255, 0.06)',
    color: '#f4f5f8',
    cursor: 'pointer',
    flexShrink: 0,
  } : { display: 'none' }
  const menuActionStyle = isCompactNav ? {
    ...compactActionStyle,
    flexDirection: 'column',
    gap: 5,
  } : { display: 'none' }
  const compactSearchStyle = {
    display: compactSearchOpen ? 'block' : 'none',
    position: 'absolute',
    top: 64,
    left: 16,
    right: 16,
    maxWidth: 420,
    margin: '0 auto',
    zIndex: 1201,
    padding: 10,
    background: '#0b0b0d',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom" style={navStyle}>
        <div className="container-fluid nav-inner" style={navInnerStyle}>
          <a className="navbar-brand nav-brand" href="#/">
            <span className="brand-mark">PT</span>
            <span className="brand-name">POPTalk</span>
          </a>
          <div className="navbar-nav nav-center tablet-nav" style={navCenterStyle}>
            <a className={`nav-item ${active === 'home' ? 'active' : ''}`} href="#/" onClick={closeMobile}>
              <span style={navTextStyle}>Explore</span>
            </a>
            <a className={`nav-item ${active === 'series' ? 'active' : ''}`} href="#/series" onClick={closeMobile}>
              <span style={navTextStyle}>Series</span>
            </a>
            <a className={`nav-item ${active === 'movies' ? 'active' : ''}`} href="#/movies" onClick={closeMobile}>
              <span style={navTextStyle}>Movies</span>
            </a>
          </div>
          <button
            className="nav-search-icon"
            type="button"
            aria-label="Toggle search"
            onClick={() => {
              setMobileOpen(false)
              setCompactSearchOpen((current) => !current)
            }}
            style={compactActionStyle}
          >
            <span className="search-glyph" aria-hidden="true"></span>
          </button>
          <button className="nav-search-bar" type="button" onClick={() => setOpen(true)} style={isCompactNav ? { display: 'none' } : undefined}>
            <span>Search movies, shows, cast...</span>
          </button>
          <button
            className="nav-menu-toggle"
            type="button"
            onClick={() => {
              setCompactSearchOpen(false)
              setMobileOpen((current) => !current)
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            style={menuActionStyle}
          >
            <img src={`${BASE_URL}hamburger.png`} alt="" aria-hidden="true" style={{ width: 24, height: 24, display: 'block', filter: 'invert(1)' }} />
          </button>
        </div>
        <div className="nav-search-popover" style={compactSearchStyle}>
          <button className="nav-search-bar" type="button" onClick={() => setOpen(true)} style={{ display: 'flex', width: '100%', minWidth: 0 }}>
            <span>Search movies, shows, cast...</span>
          </button>
        </div>
      </nav>
      {open ? <SearchOverlay onClose={() => setOpen(false)} /> : null}
    </>
  )
}

function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const [remoteResults, setRemoteResults] = useState([])
  const [remoteLoading, setRemoteLoading] = useState(false)

  const localResults = useMemo(() => searchItems(getAllMovies(), query).slice(0, 24), [query])
  const results = useMemo(() => {
    const combined = [...localResults]
    const seen = new Set(combined.map((item) => item.id))
    remoteResults.slice(0, 24).forEach((item) => {
      if (!seen.has(item.id)) {
        combined.push(item)
        seen.add(item.id)
      }
    })
    return combined
  }, [localResults, remoteResults])

  useEffect(() => {
    const term = String(query || '').trim()
    let active = true
    if (!term || term.length < 2) {
      setRemoteResults([])
      setRemoteLoading(false)
      return () => {
        active = false
      }
    }

    setRemoteLoading(true)
    const timer = window.setTimeout(() => {
      Promise.all([searchTmdb(term, 'movie'), searchTmdb(term, 'tv')])
        .then(([movies, series]) => {
          if (!active) return
          setRemoteResults([...movies, ...series])
        })
        .catch(() => {
          if (!active) return
          setRemoteResults([])
        })
        .finally(() => {
          if (active) setRemoteLoading(false)
        })
    }, 260)

    return () => {
      active = false
      window.clearTimeout(timer)
    }
  }, [query])

  return (
    <div className="search-overlay open" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="search-overlay-box">
        <div className="search-input-row">
          <span>Search</span>
          <input value={query} autoFocus placeholder="Search movies, shows, cast & crew..." onChange={(event) => setQuery(event.target.value)} />
          <button type="button" onClick={onClose}>Close</button>
        </div>
        <div className="search-heading">Search Results</div>
        <div className="search-results-grid">
          {!query ? <p className="search-empty">Type to search across all movies and shows.</p> : null}
          {query && !results.length ? <p className="search-empty">No results found for "{query}"</p> : null}
          {remoteLoading ? <p className="search-empty">Loading TMDB results…</p> : null}
          {results.length ? (
            <div className="sr-grid">
              {results.map((item) => {
                const fallback = posterFallback(item.title, 96)
                return (
                  <a className="sr-card" href={movieHref(item.id)} key={item.id} onClick={onClose}>
                    <img
                      src={item.poster || fallback}
                      alt={item.title}
                      onError={(event) => {
                        if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback
                      }}
                    />
                    <div className="sr-card-info">
                      <h4>{item.title}</h4>
                      <p>{item.year} • {item.type}</p>
                      {item.platform?.length ? <span className="search-platform">{item.platform[0]}</span> : null}
                    </div>
                  </a>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export function Section({ title, badge, children, action }) {
  return (
    <section className="section-block">
      <div className="sec-head">
        <div className="sec-title">
          <h2>{title}</h2>
          {badge ? <span className="sec-badge">{badge}</span> : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}

export function PosterCard({ item }) {
  const platforms = Array.isArray(item.platform) ? item.platform.filter(Boolean) : []
  const fallback = posterFallback(item.title, 400)
  return (
    <a className="poster-card" href={movieHref(item.id)} draggable="false" onDragStart={(event) => event.preventDefault()}>
      <div className="p-img">
        <img
          src={item.poster || item.backdrop || fallback}
          alt={item.title}
          draggable="false"
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback
          }}
        />
        <span className="p-badge">{item.talkBadge || item.type}</span>
        <div className="p-overlay">
          <span>{item.rating || item.imdb || 'N/A'}</span>
        </div>
      </div>
      <div className="p-info">
        {platforms.length ? (
          <div className="p-platform-row">
            {platforms.slice(0, 2).map((platform) => (
              <span className={`platform-pill platform-${String(platform).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={platform}>{platform}</span>
            ))}
            {platforms.length > 2 ? <span className="platform-pill platform-more">+{platforms.length - 2}</span> : null}
          </div>
        ) : null}
        <h3>{item.title}</h3>
        <p>{item.type} • {item.year}</p>
      </div>
    </a>
  )
}

export function PosterRow({ items, loop = false, showControls = true }) {
  const rowRef = useRef(null)
  const animationRef = useRef(null)
  const wheelTimerRef = useRef(null)
  const dragRef = useRef({ active: false, moved: false, suppressClick: false, startX: 0, scrollLeft: 0 })
  const baseCount = items.length
  const loopEnabled = loop && baseCount >= 8
  const displayItems = useMemo(() => (loopEnabled ? [...items, ...items, ...items] : items), [items, loopEnabled])

  const getCardPositions = (row) => {
    return Array.from(row.querySelectorAll('.poster-card')).map((card) => card.offsetLeft - row.offsetLeft)
  }

  const getNearestCardIndex = (row, positions = getCardPositions(row)) => {
    if (!positions.length) return 0
    return positions.reduce((bestIndex, position, index) => (
      Math.abs(position - row.scrollLeft) < Math.abs(positions[bestIndex] - row.scrollLeft) ? index : bestIndex
    ), 0)
  }

  const normalizeLoopPosition = () => {
    const row = rowRef.current
    if (!row || !loopEnabled) return
    const positions = getCardPositions(row)
    if (positions.length < baseCount * 3) return
    const nearestIndex = getNearestCardIndex(row, positions)
    const middleIndex = baseCount + (nearestIndex % baseCount)
    if (nearestIndex >= baseCount && nearestIndex < baseCount * 2) return
    row.scrollLeft = positions[middleIndex]
  }

  useEffect(() => {
    const row = rowRef.current
    if (row && loopEnabled) {
      window.requestAnimationFrame(() => {
        const positions = getCardPositions(row)
        if (positions[baseCount]) row.scrollLeft = positions[baseCount]
      })
    }

    return () => {
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current)
      if (wheelTimerRef.current) window.clearTimeout(wheelTimerRef.current)
    }
  }, [baseCount, loopEnabled])

  const animateTo = (targetLeft, afterAnimation) => {
    const row = rowRef.current
    if (!row) return
    if (animationRef.current) window.cancelAnimationFrame(animationRef.current)

    const startLeft = row.scrollLeft
    const maxLeft = Math.max(0, row.scrollWidth - row.clientWidth)
    const endLeft = Math.max(0, Math.min(targetLeft, maxLeft))
    const distance = endLeft - startLeft
    const duration = Math.min(560, Math.max(280, Math.abs(distance) * 0.7))
    const startTime = performance.now()

    row.classList.add('is-sliding')
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration)
      row.scrollLeft = startLeft + distance * easeOutQuart(progress)
      if (progress < 1) {
        animationRef.current = window.requestAnimationFrame(tick)
        return
      }
      row.scrollLeft = endLeft
      row.classList.remove('is-sliding')
      animationRef.current = null
      if (afterAnimation) afterAnimation()
    }

    animationRef.current = window.requestAnimationFrame(tick)
  }

  const snapToNearestCard = () => {
    const row = rowRef.current
    if (!row) return
    const positions = getCardPositions(row)
    if (!positions.length) return
    const maxLeft = Math.max(0, row.scrollWidth - row.clientWidth)
    const nearest = positions.reduce((best, position) => (
      Math.abs(position - row.scrollLeft) < Math.abs(best - row.scrollLeft) ? position : best
    ), positions[0])
    animateTo(Math.min(nearest, maxLeft), normalizeLoopPosition)
  }

  const slide = (direction) => {
    const row = rowRef.current
    if (!row) return
    const positions = getCardPositions(row)
    if (!positions.length) return

    const maxLeft = Math.max(0, row.scrollWidth - row.clientWidth)
    const cardWidth = positions[1] ? positions[1] - positions[0] : row.querySelector('.poster-card')?.offsetWidth || 180
    const cardsPerPage = Math.max(1, Math.floor(row.clientWidth / cardWidth) - 1)
    const currentIndex = getNearestCardIndex(row, positions)
    const nextIndex = currentIndex + direction * cardsPerPage

    if (loopEnabled) {
      const targetIndex = Math.max(0, Math.min(nextIndex, positions.length - 1))
      animateTo(Math.min(positions[targetIndex], maxLeft), normalizeLoopPosition)
      return
    }

    if (direction > 0 && row.scrollLeft >= maxLeft - 4) {
      animateTo(0)
      return
    }
    if (direction < 0 && row.scrollLeft <= 4) {
      animateTo(maxLeft)
      return
    }

    const targetIndex = Math.max(0, Math.min(nextIndex, positions.length - 1))
    animateTo(Math.min(positions[targetIndex], maxLeft))
  }

  const startDrag = (clientX) => {
    const row = rowRef.current
    if (!row) return
    if (animationRef.current) window.cancelAnimationFrame(animationRef.current)
    row.classList.remove('is-sliding')
    dragRef.current = { ...dragRef.current, active: true, moved: false, startX: clientX, scrollLeft: row.scrollLeft }
  }

  const moveDrag = (clientX) => {
    const row = rowRef.current
    if (!row || !dragRef.current.active) return
    const walk = dragRef.current.startX - clientX
    if (!dragRef.current.moved && Math.abs(walk) < 6) return
    if (!dragRef.current.moved) {
      dragRef.current.moved = true
      row.classList.add('dragging')
    }
    row.scrollLeft = dragRef.current.scrollLeft + walk
  }

  const stopDrag = () => {
    const row = rowRef.current
    const moved = dragRef.current.moved
    dragRef.current.active = false
    dragRef.current.suppressClick = moved
    window.setTimeout(() => {
      dragRef.current.moved = false
      dragRef.current.suppressClick = false
    }, 320)
    if (row) {
      row.classList.remove('dragging')
      if (moved && loopEnabled) normalizeLoopPosition()
    }
    return moved
  }

  const handleClickCapture = (event) => {
    if (!dragRef.current.suppressClick) return
    event.preventDefault()
    event.stopPropagation()
  }

  const handleWheel = (event) => {
    const row = rowRef.current
    if (!row) return
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    if (!delta) return
    event.preventDefault()
    row.scrollLeft += delta
    if (wheelTimerRef.current) window.clearTimeout(wheelTimerRef.current)
    wheelTimerRef.current = window.setTimeout(normalizeLoopPosition, 120)
  }

  return (
    <div className={`poster-slider ${showControls ? 'has-controls' : 'no-controls'}`}>
      <div className="poster-slider-controls" aria-label="Poster carousel controls">
        <span className="poster-slider-label">Slider</span>
        <button className="poster-slide-btn poster-slide-prev" type="button" aria-label="Previous posters" onClick={() => slide(-1)}>
          <span className="poster-slide-fallback" aria-hidden="true">&lt;</span>
          <span aria-hidden="true">‹</span>
        </button>
        <button className="poster-slide-btn poster-slide-next" type="button" aria-label="Next posters" onClick={() => slide(1)}>
          <span className="poster-slide-fallback" aria-hidden="true">&gt;</span>
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div
        className="poster-row"
        ref={rowRef}
        onMouseDown={(event) => {
          if (event.button !== 0) return
          startDrag(event.clientX)
        }}
        onMouseMove={(event) => moveDrag(event.clientX)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onWheel={handleWheel}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={handleClickCapture}
      >
        {displayItems.map((item, index) => <PosterCard key={`${item.id}-${index}`} item={item} />)}
      </div>
    </div>
  )
}

export function CatalogGrid({ items }) {
  return <div className="catalog-grid">{items.map((item) => <PosterCard key={item.id} item={item} />)}</div>
}

export function CastCard({ member, from }) {
  const fallback = posterFallback(member.name, 120)
  return (
    <a className="cast-card cast-clickable" href={castHref(member, from)}>
      <div className="cast-avatar">
        <img
          src={member.img || member.profileImage || fallback}
          alt={member.name}
          onError={(event) => {
            if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback
          }}
        />
      </div>
      <h4>{member.name}</h4>
      <p>{member.role || 'Cast'}</p>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">POPTalk</div>
        <p>Movie and series discovery powered by your catalog plus TMDB.</p>
      </div>
      <div className="footer-bottom">© 2026 POPTalk. All rights reserved.</div>
    </footer>
  )
}

export function typeFilter(items, wanted) {
  return items.filter((item) => (wanted === 'series' ? isSeries(item) : !isSeries(item)))
}
