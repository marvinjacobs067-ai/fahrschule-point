import { useState } from 'react'
import { Car, Caravan, Bike, ArrowRight, Check, Info } from 'lucide-react'
import {
  LICENSE_CATEGORIES,
  LICENSE_CLASSES,
  type LicenseCategoryId,
  type LicenseClass,
} from '../data/fahrschule'

interface LicenseClassesSectionProps {
  onSelectClass: (licenseClass: LicenseClass) => void
}

const CATEGORY_ICONS: Record<LicenseCategoryId, typeof Car> = {
  pkw: Car,
  anhaenger: Caravan,
  zweirad: Bike,
}

export function LicenseClassesSection({ onSelectClass }: LicenseClassesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<LicenseCategoryId>('pkw')

  const filteredClasses = LICENSE_CLASSES.filter(
    (item) => item.category === activeCategory,
  )
  const activeMeta = LICENSE_CATEGORIES.find((c) => c.id === activeCategory)

  return (
    <section id="klassen" className="border-t border-border-subtle bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-point-red">
            Führerscheinklassen
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Welche Klasse passt zu dir?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-body sm:text-lg">
            Vom ersten Mofa über Begleitetes Fahren ab 17 bis zum großen Anhänger oder
            offenen Motorrad – wir begleiten dich persönlich durch Theorie und Praxis.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Führerschein-Kategorien"
          className="mt-10 flex flex-wrap items-center gap-2 border-b border-border-subtle pb-4"
        >
          {LICENSE_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id]
            const count = LICENSE_CLASSES.filter(
              (c) => c.category === category.id,
            ).length
            const isSelected = activeCategory === category.id

            return (
              <button
                key={category.id}
                id={`tab-klasse-${category.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-klasse-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-red focus-visible:ring-offset-2 sm:px-5 ${
                  isSelected
                    ? 'bg-ink text-white shadow-sm'
                    : 'bg-canvas text-slate-body hover:bg-surface-subtle hover:text-ink'
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${isSelected ? 'text-point-red' : 'text-slate-muted'}`}
                  aria-hidden="true"
                />
                <span>{category.label}</span>
                <span
                  className={`rounded-md px-1.5 py-0.5 text-xs tabular-nums ${
                    isSelected
                      ? 'bg-white/15 text-white'
                      : 'bg-white text-slate-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}

          {activeMeta && (
            <p className="mt-2 w-full text-sm text-slate-muted sm:mt-0 sm:ml-auto sm:w-auto">
              {activeMeta.subtitle}
            </p>
          )}
        </div>

        {/* Class Cards */}
        <div
          id={`panel-klasse-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-klasse-${activeCategory}`}
          className={`mt-8 grid gap-6 ${
            filteredClasses.length === 2
              ? 'md:grid-cols-2'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {filteredClasses.map((cls) => (
            <article
              key={cls.id}
              className="surface-editorial flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/25"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="inline-flex min-w-[3.25rem] items-center justify-center rounded-xl bg-ink px-3 py-1.5 text-lg font-extrabold tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {cls.code}
                  </span>
                  <span className="rounded-lg bg-canvas px-2.5 py-1 text-xs font-medium text-slate-body">
                    {cls.minAge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-ink">{cls.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">
                  {cls.shortDescription}
                </p>

                <ul className="mt-5 space-y-2 border-t border-border-subtle pt-4">
                  {cls.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-ink-soft"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-point-red"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {cls.note && (
                  <div className="mt-4 flex items-start gap-2 rounded-xl bg-canvas p-3 text-xs leading-relaxed text-slate-body">
                    <Info
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-point-red"
                      aria-hidden="true"
                    />
                    <span>{cls.note}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-2">
                <button
                  id={`btn-anfragen-${cls.id}`}
                  type="button"
                  onClick={() => onSelectClass(cls)}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink bg-white px-4 py-3 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-red focus-visible:ring-offset-2"
                >
                  <span>Für diese Klasse anfragen</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Helpful Footer Note for Combinations */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border-subtle bg-canvas px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <p className="text-sm text-slate-body">
            <strong className="font-semibold text-ink">
              Unsicher, welche Kombination sinnvoll ist?
            </strong>{' '}
            Zum Beispiel BF17 zusammen mit Anhänger (B96 / BE) oder ein Motorrad-Aufstieg?
            Wir beraten dich gerne persönlich – unverbindlich und verständlich.
          </p>
          <a
            href="#voranmeldung"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-point-red transition-colors hover:text-point-red-hover"
          >
            <span>Kurz nachfragen</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
