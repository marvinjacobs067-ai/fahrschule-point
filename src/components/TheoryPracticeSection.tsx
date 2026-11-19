import { Clock, Laptop, CalendarCheck, ShieldCheck } from 'lucide-react'
import { OPENING_HOURS, PHOTO_SLOTS } from '../data/fahrschule'
import { PhotoPlaceholder } from './PhotoPlaceholder'

export function TheoryPracticeSection() {
  return (
    <section
      id="theorie-praxis"
      className="border-t border-border-subtle bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: Schedule & Learning Concept */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-point-red">
              Theorie & Praxis
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Feste Zeiten im Büro, flexibel im Alltag
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-body">
              Unser Theorieunterricht und die persönliche Büroberatung finden zweimal
              wöchentlich in der Zähringer Str. 101 statt. Praktische Fahrstunden vereinbaren
              wir ganz individuell nach deinem Schul-, Uni- oder Arbeitsplan.
            </p>

            {/* Opening Hours Card */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border-subtle bg-canvas">
              <div className="flex items-center justify-between border-b border-border-subtle bg-ink px-5 py-4 text-white">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-point-red" aria-hidden="true" />
                  <h3 className="text-sm font-bold tracking-wide text-white">
                    Büro- & Theoriezeiten
                  </h3>
                </div>
                <span className="text-xs text-white/65">Mannheim-Seckenheim</span>
              </div>

              <dl className="divide-y divide-border-subtle">
                {OPENING_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className={`flex flex-col justify-between gap-1 px-5 py-4 sm:flex-row sm:items-center ${
                      row.isOpen ? 'bg-white' : 'bg-canvas/70'
                    }`}
                  >
                    <div>
                      <dt
                        className={`text-sm font-semibold ${
                          row.isOpen ? 'text-ink' : 'text-slate-muted'
                        }`}
                      >
                        {row.day}
                      </dt>
                      {row.note && (
                        <p className="text-xs text-slate-muted">{row.note}</p>
                      )}
                    </div>
                    <dd
                      className={`text-sm font-semibold tabular-nums ${
                        row.isOpen ? 'text-point-red' : 'text-slate-muted'
                      }`}
                    >
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Highlights */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border-subtle bg-white p-4">
                <Laptop className="h-5 w-5 text-point-red" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-bold text-ink">Online-Lernsystem</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-body">
                  Alle aktuellen amtlichen Prüfungsfragen bequem per App oder Browser
                  üben – jederzeit zwischendurch.
                </p>
              </div>
              <div className="rounded-xl border border-border-subtle bg-white p-4">
                <CalendarCheck className="h-5 w-5 text-point-red" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-bold text-ink">
                  Individuelle Fahrstunden
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-body">
                  Terminabsprache direkt mit deinem Fahrlehrer – passend zu Schule,
                  Ausbildung oder Beruf.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Authentic Visual Placeholders */}
          <div className="space-y-6 lg:col-span-6">
            <PhotoPlaceholder
              slot={PHOTO_SLOTS.classroom}
              aspectClassName="aspect-[16/10]"
              tone="warm"
            />
            <PhotoPlaceholder
              slot={PHOTO_SLOTS.fleet}
              aspectClassName="aspect-[16/10]"
              tone="dark"
            />
            <div className="flex items-start gap-3 rounded-xl border border-border-subtle bg-canvas px-4 py-3.5">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-point-red"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-slate-body">
                <strong className="font-semibold text-ink">
                  Gut zu wissen für Eltern:
                </strong>{' '}
                Unsere Ausbildungsfahrzeuge sind modern ausgestattet, regelmäßig gewartet
                und bieten maximale Sicherheit für die ersten Fahrstunden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
