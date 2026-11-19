import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { COMPANY } from '../data/fahrschule'

const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: `${COMPANY.name} Mannheim-Seckenheim – Dein Weg zum Führerschein seit ${COMPANY.foundedYear}`,
    description:
      'Fahrschule Point in Mannheim-Seckenheim: Inhabergeführt von Peter Schmitt seit 1981. Pkw (B, BF17), Anhänger (B96, BE) & Zweirad (A, A2, A1, AM, Mofa). 5,0 ★ Google-Bewertung.',
  },
  '/impressum': {
    title: `Impressum – ${COMPANY.name}`,
    description: `Impressum und Anbieterkennzeichnung der ${COMPANY.name}, Inhaber ${COMPANY.owner}, ${COMPANY.address.full}.`,
  },
  '/datenschutz': {
    title: `Datenschutzerklärung – ${COMPANY.name}`,
    description: `DSGVO-Informationen zum Datenschutz der Website ${COMPANY.domain} (${COMPANY.name}, Mannheim-Seckenheim).`,
  },
}

export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? ROUTE_META['/']
    document.title = meta.title
    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) {
      descTag.setAttribute('content', meta.description)
    }

    if (hash) {
      const targetId = hash.replace('#', '')
      // Wait one frame for route content to mount
      window.requestAnimationFrame(() => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}
