import { Link } from 'react-router-dom'
import { MapPin, Phone, Smartphone, Mail, Clock, ExternalLink } from 'lucide-react'
import { COMPANY } from '../data/fahrschule'
import { Logo } from './Logo'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {

  return (
    <footer className="bg-ink text-white pb-24 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Fahrschule Point – Startseite" className="group inline-block">
              <Logo variant="light" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Inhabergeführte Fahrschule in Mannheim-Seckenheim seit {COMPANY.foundedYear}.
              Persönliche, ruhige und individuelle Ausbildung für Pkw, Anhänger und Zweirad.
            </p>
            <p className="mt-4 text-xs font-medium text-white/55">
              Inhaber: {COMPANY.owner}
            </p>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Kontakt & Standort
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-point-red" aria-hidden="true" />
                <div>
                  <p>{COMPANY.address.street}</p>
                  <p>
                    {COMPANY.address.zip} {COMPANY.address.city}
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-point-red" aria-hidden="true" />
                <a
                  href={COMPANY.contact.phoneHref}
                  className="transition-colors hover:text-white tabular-nums"
                >
                  Festnetz: {COMPANY.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Smartphone className="h-4 w-4 shrink-0 text-point-red" aria-hidden="true" />
                <a
                  href={COMPANY.contact.mobileHref}
                  className="transition-colors hover:text-white tabular-nums"
                >
                  Mobil: {COMPANY.contact.mobileDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-point-red" aria-hidden="true" />
                <a
                  href={COMPANY.contact.emailHref}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Links Column */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Büro & Theorie
              </h2>
              <div className="mt-4 flex items-start gap-2.5 text-sm text-white/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-point-red" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Mo & Mi</p>
                  <p className="tabular-nums">17:30 – 19:00 Uhr</p>
                  <p className="mt-1.5 text-xs text-white/55">
                    Di, Do – So geschlossen
                    <br />
                    (Fahrstunden nach Vereinbarung)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Navigation
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <Link to="/#klassen" className="transition-colors hover:text-white">
                    Führerscheinklassen
                  </Link>
                </li>
                <li>
                  <Link to="/#ablauf" className="transition-colors hover:text-white">
                    Ablauf & Unterlagen
                  </Link>
                </li>
                <li>
                  <Link to="/#theorie-praxis" className="transition-colors hover:text-white">
                    Theorie & Praxis
                  </Link>
                </li>
                <li>
                  <a
                    href={COMPANY.reputation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>
            © {COMPANY.foundedYear}–{CURRENT_YEAR} {COMPANY.name} · Inhaber {COMPANY.owner} ·{' '}
            {COMPANY.domain}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/impressum" className="transition-colors hover:text-white">
              Impressum
            </Link>
            <Link to="/datenschutz" className="transition-colors hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
