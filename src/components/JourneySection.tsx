import { useState } from 'react'
import { ChevronDown, CheckSquare, Square, FileCheck2 } from 'lucide-react'
import { JOURNEY_STEPS, REQUIRED_DOCUMENTS } from '../data/fahrschule'

export function JourneySection() {
  const [checklistOpen, setChecklistOpen] = useState(true)
  const [checkedIds, setCheckedIds] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <section id="ablauf" className="border-t border-border-subtle bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-point-red">
            Ablauf & Unterlagen
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            In 4 klaren Schritten zum Führerschein
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-body sm:text-lg">
            Kein Behörden-Dschungel, kein Rätselraten: Wir zeigen dir von Anfang an genau,
            was als Nächstes ansteht – übersichtlich für dich und deine Eltern.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY_STEPS.map((step) => (
            <li
              key={step.number}
              className="surface-editorial relative flex flex-col rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-3xl font-extrabold tracking-tight text-point-red tabular-nums"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-border-subtle ml-4"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">
                {step.description}
              </p>
              <p className="mt-4 border-t border-border-subtle pt-3 text-xs leading-relaxed text-slate-muted">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>

        {/* Collapsible Interactive Document Checklist */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-xs">
          <button
            id="toggle-unterlagen-checkliste"
            type="button"
            onClick={() => setChecklistOpen((prev) => !prev)}
            aria-expanded={checklistOpen}
            aria-controls="unterlagen-checkliste-content"
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-canvas/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-point-red"
          >
            <div className="flex items-start gap-3.5 sm:items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-point-red-tint text-point-red">
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink sm:text-lg">
                  Checkliste: Welche Unterlagen brauchst du für den Antrag?
                </h3>
                <p className="mt-0.5 text-sm text-slate-muted">
                  Hake direkt ab, was du schon bereitliegen hast ({checkedIds.length} von{' '}
                  {REQUIRED_DOCUMENTS.length} erledigt)
                </p>
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-slate-muted transition-transform duration-200 ${
                checklistOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>

          {checklistOpen && (
            <div
              id="unterlagen-checkliste-content"
              className="border-t border-border-subtle px-6 py-6"
            >
              <ul className="grid gap-3 md:grid-cols-2">
                {REQUIRED_DOCUMENTS.map((doc) => {
                  const isChecked = checkedIds.includes(doc.id)
                  return (
                    <li key={doc.id}>
                      <button
                        type="button"
                        onClick={() => toggleItem(doc.id)}
                        aria-pressed={isChecked}
                        className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                          isChecked
                            ? 'border-ink/20 bg-canvas/80'
                            : 'border-border-subtle bg-white hover:border-ink/20'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare
                            className="mt-0.5 h-5 w-5 shrink-0 text-point-red"
                            aria-hidden="true"
                          />
                        ) : (
                          <Square
                            className="mt-0.5 h-5 w-5 shrink-0 text-slate-muted"
                            aria-hidden="true"
                          />
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-sm font-semibold ${
                                isChecked
                                  ? 'text-slate-muted line-through'
                                  : 'text-ink'
                              }`}
                            >
                              {doc.title}
                            </span>
                            {doc.requiredFor && (
                              <span className="rounded-md bg-surface-subtle px-2 py-0.5 text-[11px] font-medium text-slate-body">
                                {doc.requiredFor}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-slate-muted">
                            {doc.detail}
                          </p>
                        </div>
                      </button>
                    </li>
                  )
                })}
              </ul>

              <p className="mt-5 text-xs leading-relaxed text-slate-muted">
                Hinweis: Für deine unverbindliche Voranmeldung brauchst du noch nicht alle
                Unterlagen. Bring einfach mit, was du schon hast – den Rest besprechen wir
                gemeinsam im Büro.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
