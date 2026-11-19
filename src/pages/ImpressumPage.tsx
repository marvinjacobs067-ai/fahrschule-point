import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { COMPANY } from '../data/fahrschule'

export function ImpressumPage() {
  return (
    <div className="bg-canvas py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-body transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Zurück zur Startseite</span>
        </Link>

        <article className="surface-editorial mt-6 rounded-2xl p-6 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-point-red">
            Rechtliche Angaben
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Impressum
          </h1>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-body">
            <section>
              <h2 className="text-lg font-bold text-ink">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-2">
                <strong className="text-ink">{COMPANY.name}</strong>
                <br />
                Inhaber: {COMPANY.owner}
                <br />
                {COMPANY.address.street}
                <br />
                {COMPANY.address.zip} {COMPANY.address.city}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Kontakt</h2>
              <p className="mt-2 tabular-nums">
                Telefon (Festnetz):{' '}
                <a
                  href={COMPANY.contact.phoneHref}
                  className="font-medium text-ink underline decoration-border-subtle underline-offset-2 hover:text-point-red"
                >
                  {COMPANY.contact.phoneDisplay}
                </a>
                <br />
                Mobil:{' '}
                <a
                  href={COMPANY.contact.mobileHref}
                  className="font-medium text-ink underline decoration-border-subtle underline-offset-2 hover:text-point-red"
                >
                  {COMPANY.contact.mobileDisplay}
                </a>
                <br />
                E-Mail:{' '}
                <a
                  href={COMPANY.contact.emailHref}
                  className="font-medium text-ink underline decoration-border-subtle underline-offset-2 hover:text-point-red"
                >
                  {COMPANY.contact.email}
                </a>
                <br />
                Website: https://{COMPANY.domain}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                Berufsrechtliche Angaben & Aufsichtsbehörde
              </h2>
              <p className="mt-2">
                Erlaubnis nach dem Fahrlehrergesetz (FahrlG) erteilt durch die zuständige
                Behörde.
                <br />
                Zuständige Aufsichtsbehörde: Stadt Mannheim – Fachbereich Sicherheit und
                Ordnung / Fahrerlaubnisbehörde{' '}
                <span className="text-slate-muted">
                  (Angaben ggf. vor Livegang mit Inhaber prüfen/ergänzen)
                </span>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="mt-2">
                {/* TODO: Vor Livegang mit Inhaber Peter Schmitt abklären */}
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{' '}
                <span className="rounded bg-canvas px-1.5 py-0.5 font-mono text-xs text-ink">
                  [Falls vorhanden vom Inhaber ergänzen]
                </span>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-2">
                {COMPANY.owner}
                <br />
                {COMPANY.address.street}
                <br />
                {COMPANY.address.zip} {COMPANY.address.city}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">Haftung für Inhalte & Links</h2>
              <p className="mt-2">
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Für Inhalte externer Websites, auf die
                wir verlinken (z. B. Google Maps), übernehmen wir keine Gewähr; hierfür ist
                stets der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
