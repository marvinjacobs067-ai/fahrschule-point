import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Mail, Send, AlertCircle, RotateCcw } from 'lucide-react'
import { COMPANY, LICENSE_CLASSES } from '../data/fahrschule'

interface RegistrationFormProps {
  selectedClassId: string
  onSelectedClassChange: (classId: string) => void
  classSelectionHint?: string | null
}

interface FormState {
  name: string
  email: string
  phone: string
  birthDate: string
  message: string
  privacyAccepted: boolean
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  birthDate: '',
  message: '',
  privacyAccepted: false,
}

export function RegistrationForm({
  selectedClassId,
  onSelectedClassChange,
  classSelectionHint,
}: RegistrationFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | 'licenseClass', string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const highlightSelect = Boolean(classSelectionHint)

  const selectedClassLabel =
    LICENSE_CLASSES.find((c) => c.id === selectedClassId)?.name ??
    'Noch unsicher / Beratung gewünscht'

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `Unverbindliche Voranmeldung – ${selectedClassLabel} (${form.name.trim()})`,
    )
    const bodyLines = [
      `Hallo Peter Schmitt / Team der ${COMPANY.name},`,
      '',
      'ich möchte mich unverbindlich voranmelden:',
      '',
      `Gewünschte Klasse: ${selectedClassLabel}`,
      `Name: ${form.name.trim()}`,
      `E-Mail: ${form.email.trim()}`,
      `Telefon / Mobil: ${form.phone.trim()}`,
      form.birthDate ? `Geburtsdatum: ${form.birthDate}` : null,
      form.message.trim() ? `Nachricht / Fragen:\n${form.message.trim()}` : null,
      '',
      'Viele Grüße',
      form.name.trim(),
    ].filter(Boolean)

    return `${COMPANY.contact.emailHref}?subject=${subject}&body=${encodeURIComponent(
      bodyLines.join('\n'),
    )}`
  }

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState | 'licenseClass', string>> = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Bitte gib deinen Vor- und Nachnamen ein.'
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.'
    }
    if (!form.phone.trim() || form.phone.trim().length < 6) {
      nextErrors.phone = 'Bitte gib eine Telefon- oder Mobilnummer für Rückfragen an.'
    }
    if (!form.privacyAccepted) {
      nextErrors.privacyAccepted =
        'Bitte bestätige den Hinweis zum Datenschutz, damit wir deine Anfrage bearbeiten können.'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    /**
     * HINWEIS FÜR LIVEGANG AUF KLASSISCHEM WEBHOSTING (point-fahrschule.de):
     * Da dies ein rein statisches Frontend-Bundle in `dist/` ist, kann hier später
     * optional ein eigener PHP-Mailer auf demselben Webspace (z. B. `fetch('/api/voranmeldung.php', ...)`)
     * angebunden werden. Bis dahin übernimmt der Bestätigungsscreen samt fertiger
     * E-Mail-Übernahme (mailto) eine sofort nutzbare, DSGVO-freundliche Lösung ohne Drittanbieter.
     */
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setForm(INITIAL_FORM)
    setErrors({})
  }

  if (submitted) {
    return (
      <div
        id="voranmeldung-confirmation"
        className="surface-editorial rounded-2xl p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-2xl font-extrabold text-ink">
          Deine Voranmeldung ist vorbereitet!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-body">
          Vielen Dank, <strong className="text-ink">{form.name.trim()}</strong>. Klicke jetzt
          einfach auf den Button unten, um deine vorausgefüllte Voranmeldung direkt per
          E-Mail an <span className="font-medium text-ink">{COMPANY.contact.email}</span> zu
          senden – oder ruf uns gerne kurz an.
        </p>

        <dl className="mt-6 space-y-2 rounded-xl border border-border-subtle bg-canvas p-4 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-slate-muted">Führerscheinklasse:</dt>
            <dd className="font-semibold text-ink">{selectedClassLabel}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-slate-muted">E-Mail:</dt>
            <dd className="font-medium text-ink">{form.email.trim()}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-slate-muted">Telefon / Mobil:</dt>
            <dd className="font-medium text-ink tabular-nums">{form.phone.trim()}</dd>
          </div>
          {form.birthDate && (
            <div className="flex flex-wrap justify-between gap-2">
              <dt className="text-slate-muted">Geburtsdatum:</dt>
              <dd className="font-medium text-ink tabular-nums">{form.birthDate}</dd>
            </div>
          )}
        </dl>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            id="btn-voranmeldung-mailto"
            href={buildMailtoHref()}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-point-red px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-point-red-hover"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Voranmeldung per E-Mail absenden</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-subtle bg-white px-4 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-canvas"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>Angaben ändern</span>
          </button>
        </div>

        <p className="mt-4 text-xs text-slate-muted">
          Alternativ kannst du deine Anfrage jederzeit persönlich am Montag oder Mittwoch
          (17:30 – 19:00 Uhr) in der {COMPANY.address.street} mit uns besprechen.
        </p>
      </div>
    )
  }

  return (
    <form
      id="voranmeldung-form"
      onSubmit={handleSubmit}
      noValidate
      className="surface-editorial rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-ink">
            Unverbindlich voranmelden
          </h3>
          <p className="mt-1.5 text-sm text-slate-body">
            Kostenlos & unverbindlich – wir melden uns persönlich bei dir (oder deinen
            Eltern) zurück.
          </p>
        </div>
      </div>

      {classSelectionHint && (
        <div
          role="status"
          className="mt-4 rounded-xl border border-point-red/20 bg-point-red-tint px-4 py-2.5 text-xs font-medium text-point-red"
        >
          Vorausgewählt: <strong>{classSelectionHint}</strong> – du kannst die Auswahl
          unten jederzeit anpassen.
        </div>
      )}

      <div className="mt-6 space-y-5">
        {/* Führerscheinklasse */}
        <div>
          <label
            htmlFor="field-license-class"
            className="block text-sm font-semibold text-ink"
          >
            Gewünschte Führerscheinklasse
          </label>
          <select
            id="field-license-class"
            value={selectedClassId}
            onChange={(e) => onSelectedClassChange(e.target.value)}
            className={`mt-1.5 block w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink transition-all focus:border-point-red focus:outline-none focus:ring-2 focus:ring-point-red/20 ${
              highlightSelect
                ? 'border-point-red ring-2 ring-point-red/25'
                : 'border-border-subtle'
            }`}
          >
            <option value="beratung">Noch unsicher / Beratung gewünscht</option>
            <optgroup label="Pkw">
              {LICENSE_CLASSES.filter((c) => c.category === 'pkw').map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Anhänger">
              {LICENSE_CLASSES.filter((c) => c.category === 'anhaenger').map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Zweirad">
              {LICENSE_CLASSES.filter((c) => c.category === 'zweirad').map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="field-name" className="block text-sm font-semibold text-ink">
            Vor- und Nachname <span className="text-point-red">*</span>
          </label>
          <input
            id="field-name"
            type="text"
            autoComplete="name"
            required
            placeholder="z. B. Max Mustermann"
            value={form.name}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, name: e.target.value }))
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
            }}
            aria-invalid={Boolean(errors.name)}
            className={`mt-1.5 block w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-slate-muted/70 focus:border-point-red focus:outline-none focus:ring-2 focus:ring-point-red/20 ${
              errors.name ? 'border-point-red' : 'border-border-subtle'
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-point-red">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="field-email" className="block text-sm font-semibold text-ink">
              E-Mail-Adresse <span className="text-point-red">*</span>
            </label>
            <input
              id="field-email"
              type="email"
              autoComplete="email"
              required
              placeholder="name@beispiel.de"
              value={form.email}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, email: e.target.value }))
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
              }}
              aria-invalid={Boolean(errors.email)}
              className={`mt-1.5 block w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-slate-muted/70 focus:border-point-red focus:outline-none focus:ring-2 focus:ring-point-red/20 ${
                errors.email ? 'border-point-red' : 'border-border-subtle'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-point-red">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="field-phone" className="block text-sm font-semibold text-ink">
              Telefon / Mobil <span className="text-point-red">*</span>
            </label>
            <input
              id="field-phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="z. B. 0177 ..."
              value={form.phone}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, phone: e.target.value }))
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
              }}
              aria-invalid={Boolean(errors.phone)}
              className={`mt-1.5 block w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-slate-muted/70 focus:border-point-red focus:outline-none focus:ring-2 focus:ring-point-red/20 ${
                errors.phone ? 'border-point-red' : 'border-border-subtle'
              }`}
            />
            {errors.phone && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-point-red">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Optional Birth Date */}
        <div>
          <label
            htmlFor="field-birthdate"
            className="block text-sm font-semibold text-ink"
          >
            Geburtsdatum{' '}
            <span className="font-normal text-slate-muted">(optional, hilfreich bei BF17 / A1)</span>
          </label>
          <input
            id="field-birthdate"
            type="date"
            value={form.birthDate}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, birthDate: e.target.value }))
            }
            className="mt-1.5 block w-full rounded-xl border border-border-subtle bg-white px-3.5 py-3 text-sm text-ink focus:border-point-red focus:outline-none focus:ring-2 focus:ring-point-red/20"
          />
        </div>

        {/* Optional Message */}
        <div>
          <label htmlFor="field-message" className="block text-sm font-semibold text-ink">
            Nachricht oder Fragen{' '}
            <span className="font-normal text-slate-muted">(optional)</span>
          </label>
          <textarea
            id="field-message"
            rows={3}
            placeholder="z. B. gewünschter Starttermin, Kombination BF17 + BE oder Fragen von Eltern..."
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, message: e.target.value }))
            }
            className="mt-1.5 block w-full rounded-xl border border-border-subtle bg-white px-3.5 py-3 text-sm text-ink placeholder:text-slate-muted/70 focus:border-point-red focus:outline-none focus:ring-2 focus:ring-point-red/20"
          />
        </div>

        {/* Privacy Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              id="field-privacy"
              type="checkbox"
              checked={form.privacyAccepted}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, privacyAccepted: e.target.checked }))
                if (errors.privacyAccepted) {
                  setErrors((prev) => ({ ...prev, privacyAccepted: undefined }))
                }
              }}
              className="mt-1 h-4 w-4 rounded border-border-subtle accent-point-red"
            />
            <span className="text-xs leading-relaxed text-slate-body">
              Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner
              unverbindlichen Anfrage verwendet werden. Hinweise dazu findest du in unserer{' '}
              <Link
                to="/datenschutz"
                className="font-semibold text-ink underline decoration-border-subtle underline-offset-2 hover:text-point-red"
              >
                Datenschutzerklärung
              </Link>
              . <span className="text-point-red">*</span>
            </span>
          </label>
          {errors.privacyAccepted && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-point-red">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.privacyAccepted}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          id="btn-submit-voranmeldung"
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-point-red px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-point-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-red focus-visible:ring-offset-2"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          <span>Unverbindliche Voranmeldung vorbereiten</span>
        </button>
      </div>
    </form>
  )
}
