import { Phone, ClipboardEdit } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { COMPANY } from '../data/fahrschule'

export function MobileActionBar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleVoranmelden = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const el = document.getElementById('voranmeldung')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.replaceState(null, '', '/#voranmeldung')
      }
    } else {
      navigate('/#voranmeldung')
    }
  }

  return (
    <div
      role="region"
      aria-label="Schnellzugriff"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-white/95 px-3 py-2.5 backdrop-blur-md shadow-[0_-4px_18px_-8px_rgba(20,23,26,0.16)] md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <a
          id="mobile-bar-call"
          href={COMPANY.contact.mobileHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-subtle bg-canvas px-3 py-2.5 text-sm font-semibold text-ink transition-colors active:bg-surface-subtle"
        >
          <Phone className="h-4 w-4 text-point-red" aria-hidden="true" />
          <span>Anrufen</span>
        </a>
        <a
          id="mobile-bar-register"
          href="/#voranmeldung"
          onClick={handleVoranmelden}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-point-red px-3 py-2.5 text-sm font-semibold text-white transition-colors active:bg-point-red-hover"
        >
          <ClipboardEdit className="h-4 w-4" aria-hidden="true" />
          <span>Voranmelden</span>
        </a>
      </div>
    </div>
  )
}
