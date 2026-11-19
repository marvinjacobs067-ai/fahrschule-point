import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'
import { COMPANY } from '../data/fahrschule'
import { Logo } from './Logo'

interface NavItem {
  label: string
  to: string
  isSection?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Klassen', to: '/#klassen', isSection: true },
  { label: 'Ablauf', to: '/#ablauf', isSection: true },
  { label: 'Theorie & Praxis', to: '/#theorie-praxis', isSection: true },
  { label: 'Kontakt', to: '/#kontakt', isSection: true },
]

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const routeKey = `${location.pathname}${location.hash}`
  const [openForRoute, setOpenForRoute] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const mobileMenuOpen = openForRoute === routeKey
  const closeMobileMenu = () => setOpenForRoute(null)
  const toggleMobileMenu = () =>
    setOpenForRoute((prev) => (prev === routeKey ? null : routeKey))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    closeMobileMenu()
    if (item.isSection && item.to.startsWith('/#')) {
      e.preventDefault()
      const targetId = item.to.slice(2)
      if (location.pathname === '/') {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          window.history.replaceState(null, '', `/#${targetId}`)
        }
      } else {
        navigate(`/#${targetId}`)
      }
    }
  }

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault()
    closeMobileMenu()
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
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-[0_2px_14px_-6px_rgba(20,23,26,0.1)]'
          : 'bg-canvas/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Fahrschule Point – Startseite"
          className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-red focus-visible:ring-offset-2 rounded-lg"
        >
          <Logo variant="dark" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              (!item.isSection && location.pathname === item.to) ||
              (item.isSection &&
                location.pathname === '/' &&
                location.hash === item.to.slice(1))

            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => handleNavClick(item, e)}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-surface-subtle text-ink'
                    : 'text-slate-body hover:bg-surface-subtle/70 hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.contact.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-body transition-colors hover:text-ink tabular-nums"
          >
            <Phone className="h-4 w-4 text-point-red" aria-hidden="true" />
            <span>{COMPANY.contact.phoneDisplay}</span>
          </a>
          <a
            id="header-cta-anmelden"
            href="/#voranmeldung"
            onClick={handleRegisterClick}
            className="inline-flex items-center gap-1.5 rounded-lg bg-point-red px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-point-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-red focus-visible:ring-offset-2"
          >
            <span>Jetzt anmelden</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/#voranmeldung"
            onClick={handleRegisterClick}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-point-red px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-point-red-hover"
          >
            Jetzt anmelden
          </a>
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-white text-ink transition-colors hover:bg-surface-subtle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-border-subtle bg-white px-4 pt-3 pb-5 shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => handleNavClick(item, e)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-surface-subtle"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-border-subtle pt-4">
            <a
              href="/#voranmeldung"
              onClick={handleRegisterClick}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-point-red px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-point-red-hover"
            >
              <span>Jetzt unverbindlich voranmelden</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={COMPANY.contact.phoneHref}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-subtle bg-canvas px-3 py-2.5 text-xs font-medium text-ink tabular-nums"
              >
                <Phone className="h-3.5 w-3.5 text-point-red" aria-hidden="true" />
                <span>{COMPANY.contact.phoneDisplay}</span>
              </a>
              <a
                href={COMPANY.contact.mobileHref}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-subtle bg-canvas px-3 py-2.5 text-xs font-medium text-ink tabular-nums"
              >
                <Phone className="h-3.5 w-3.5 text-point-red" aria-hidden="true" />
                <span>{COMPANY.contact.mobileDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
