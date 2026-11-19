import { Star, ExternalLink, Award, Quote } from 'lucide-react'
import { COMPANY, PHOTO_SLOTS, VALUES } from '../data/fahrschule'
import { PhotoPlaceholder } from './PhotoPlaceholder'

export function AboutSection() {
  return (
    <section
      id="ueber-uns"
      className="border-t border-border-subtle bg-canvas py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Team / Owner Photo Placeholder & Google Rating */}
          <div className="space-y-6 lg:col-span-5">
            <PhotoPlaceholder
              slot={PHOTO_SLOTS.ownerTeam}
              aspectClassName="aspect-[4/5]"
              tone="dark"
            />

            {/* Google 5.0 Reputation Block */}
            <div className="surface-editorial rounded-2xl p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1" aria-label="5,0 von 5 Sternen">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-amber-star text-amber-star"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-1.5 text-sm font-bold text-ink tabular-nums">
                      {COMPANY.reputation.rating}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-body">
                    Bestnote auf {COMPANY.reputation.platform} · Empfohlen von Fahrschülern
                    in Mannheim-Seckenheim
                  </p>
                </div>
                <a
                  href={COMPANY.reputation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border-subtle bg-canvas px-3 py-2 text-xs font-semibold text-ink transition-colors hover:bg-surface-subtle"
                >
                  <span>Ansehen</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Story, Quote & Values */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-point-red">
              Über Fahrschule Point
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Persönlich, ruhig & seit {COMPANY.foundedYear} in Mannheim zu Hause
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-body">
              Hinter Fahrschule Point steht keine anonyme Kette, sondern Inhaber{' '}
              <strong className="font-semibold text-ink">{COMPANY.owner}</strong> und über
              45 Jahre Erfahrung auf Mannheims Straßen. Viele unserer heutigen Fahrschüler
              sitzen im selben Unterrichtsraum, in dem schon ihre Eltern den Führerschein
              gemacht haben.
            </p>

            {/* Brand Core Quote */}
            <blockquote className="mt-6 rounded-2xl border-l-4 border-point-red bg-white px-6 py-5 shadow-xs">
              <Quote
                className="h-5 w-5 text-point-red/70"
                aria-hidden="true"
              />
              <p
                className="mt-2 text-lg font-bold leading-snug text-ink sm:text-xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                „{COMPANY.coreQuote}“
              </p>
              <footer className="mt-2 text-xs font-medium text-slate-muted">
                — {COMPANY.owner}, Inhaber der {COMPANY.name}
              </footer>
            </blockquote>

            {/* Values Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALUES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border-subtle bg-white p-5"
                >
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-point-red"
                    />
                    <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-body">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-slate-muted">
              <Award className="h-4 w-4 text-point-red" aria-hidden="true" />
              <span>
                Über 45 Jahre Ausbildungserfahrung in {COMPANY.address.district}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
