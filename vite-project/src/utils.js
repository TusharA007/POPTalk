import { getAllMovies } from './data.js'

export function isSeries(item) {
  const type = String(item?.type || '').toLowerCase()
  return type === 'show' || type === 'series' || type === 'tv'
}

export function posterFallback(title, size = 500) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(String(title || '?').slice(0, 2))}&background=18181c&color=6d5dfc&size=${size}&bold=true`
}

export function route(path) {
  window.location.hash = path
}

export function movieHref(id) {
  return `#/movie/${encodeURIComponent(id)}`
}

export function castHref(member, from = '') {
  const params = new URLSearchParams()
  params.set('name', member?.name || '')
  if (from) params.set('from', from)
  if (member?.tmdbPersonId || member?.tmdbId) params.set('tmdbPersonId', member.tmdbPersonId || member.tmdbId)
  return `#/cast?${params.toString()}`
}

export function findLocalOrExtraMovie(id, extras = []) {
  const normalizedId = String(id || '').toLowerCase()
  return getAllMovies().find((item) => String(item.id || '').toLowerCase() === normalizedId)
    || extras.find((item) => String(item.id || '').toLowerCase() === normalizedId)
    || null
}

export function mergeUnique(items) {
  const map = new Map()
  items.filter(Boolean).forEach((item) => {
    const key = item.id || `${String(item.title).toLowerCase()}-${item.year}-${item.type}`
    if (!map.has(key)) map.set(key, item)
  })
  return Array.from(map.values())
}

export function normalizeText(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

export function searchItems(items, query) {
  const q = normalizeText(query)
  if (!q) return items
  return items.filter((item) => {
    const fields = [
      item.title,
      item.year,
      item.type,
      item.director,
      item.country,
      item.language,
      ...(item.genre || []),
      ...(item.platform || []),
      ...(item.cast || []).map((member) => member.name),
    ]
    return fields.some((field) => normalizeText(field).includes(q))
  })
}
