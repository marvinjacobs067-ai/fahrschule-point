import { useState } from 'react'
import { MapPin, ExternalLink, Shield, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../data/fahrschule'

/**
 * DSGVO-konforme 2-Klick-Lösung für Google Maps.
 * Vor dem expliziten Klick werden keinerlei Daten oder Anfragen an Google-Server übertragen.
 */
export function GoogleMapsEmbed() {
  const [mapLoaded, setMapLoaded] = useState(false)

  if (mapLoaded) {
    return (
      <div className="overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle bg-canvas px-4 py-2.5 text-xs">
          <span className="inline-flex items-center gap-1.5 font-medium text-ink">
            <MapPin className="h-3.5 w-3.5 text-point-red" aria-hidden="true" />
            <span>{COMPANY.address.full}</span>
          </span>
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.reputation.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-point-red hover:underline"
            >
              <span>In Google Maps öffnen</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
            <button
              id="btn-maps-unload"
              type="button"
              onClick={() => setMapLoaded(false)}
              className="inline-flex items-center gap-1 rounded-md border border-border-subtle bg-white px-2.5 py-1 font-medium text-slate-body transition-colors hover:text-ink"
            >
              <EyeOff className="h-3 w-3" aria-hidden="true" />
              <span>Ausblenden</span>
            </button>
          </div>
        </div>
        <iframe
          title={`Standort ${COMPANY.name}, ${COMPANY.address.full}`}
          src={COMPANY.reputation.googleMapsEmbedUrl}
          className="h-[340px] w-full border-0 sm:h-[380px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-ink text-white shadow-xs">
      {/* Stylized offline SVG map backdrop of Mannheim-Seckenheim (zero external requests) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 420"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
      >
        <rect width="800" height="420" fill="#171B20" />
        {/* Soft arterial roads inspired by Seckenheim / Zähringer Straße */}
        <path
          d="M-20 310 C 160 280, 320 225, 520 175 C 640 145, 730 120, 820 100"
          stroke="#4A5564"
          strokeWidth="12"
          fill="none"
        />
        <path
          d="M-20 310 C 160 280, 320 225, 520 175 C 640 145, 730 120, 820 100"
          stroke="#D62828"
          strokeOpacity="0.45"
          strokeWidth="2.5"
          strokeDasharray="10 8"
          fill="none"
        />
        <path
          d="M120 -10 L 235 430"
          stroke="#2F3640"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M360 -10 L 425 430"
          stroke="#39414C"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M590 -10 L 660 430"
          stroke="#2F3640"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M0 115 L 800 180"
          stroke="#2B313A"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M0 370 L 800 295"
          stroke="#2B313A"
          strokeWidth="5"
          fill="none"
        />
        {/* Neckar curve hint */}
        <path
          d="M-20 55 C 180 20, 420 40, 820 15"
          stroke="#243447"
          strokeWidth="22"
          fill="none"
        />
      </svg>

      {/* Foreground Consent Card */}
      <div className="relative z-10 flex min-h-[340px] flex-col items-center justify-center p-6 text-center sm:min-h-[380px] sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-point-red text-white shadow-lg shadow-point-red/30">
          <MapPin className="h-6 w-6" aria-hidden="true" />
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
          Standort & Anfahrt · 2-Klick-Karte
        </p>
        <h3 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
          {COMPANY.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-white/85">
          {COMPANY.address.full}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            id="btn-maps-load"
            type="button"
            onClick={() => setMapLoaded(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-point-red px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-point-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>Google Maps laden</span>
          </button>

          <a
            id="link-maps-external"
            href={COMPANY.reputation.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/15"
          >
            <span>In Google Maps öffnen</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-5 flex max-w-md items-start gap-2 rounded-xl border border-white/10 bg-black/30 px-3.5 py-2.5 text-left text-[11px] leading-relaxed text-white/70">
          <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/60" aria-hidden="true" />
          <span>
            Aus Datenschutzgründen wird die interaktive Karte erst nach deinem Klick geladen.
            Dabei werden Daten (u. a. deine IP-Adresse) an Google übertragen. Mehr dazu in
            unserer{' '}
            <Link
              to="/datenschutz"
              className="underline decoration-white/40 underline-offset-2 hover:text-white"
            >
              Datenschutzerklärung
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  )
}
