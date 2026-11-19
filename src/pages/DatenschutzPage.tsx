import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { COMPANY } from '../data/fahrschule'

export function DatenschutzPage() {
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
            DSGVO-Informationen
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Datenschutzerklärung
          </h1>

          {/* Privacy-by-design summary */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-border-subtle bg-canvas p-4 text-xs leading-relaxed text-slate-body">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-point-red"
              aria-hidden="true"
            />
            <p>
              <strong className="font-semibold text-ink">
                Datensparsam gestaltet:
              </strong>{' '}
              Diese Website verwendet keine Tracking-Cookies, keine externen Schriftarten-CDNs
              (alle Schriftarten werden lokal vom eigenen Webserver ausgeliefert) und lädt
              Google Maps erst nach deinem ausdrücklichen Klick (2-Klick-Lösung).
            </p>
          </div>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-body">
            <section>
              <h2 className="text-lg font-bold text-ink">
                1. Verantwortlicher im Sinne der DSGVO
              </h2>
              <p className="mt-2">
                <strong className="text-ink">{COMPANY.name}</strong>
                <br />
                Inhaber: {COMPANY.owner}
                <br />
                {COMPANY.address.street}
                <br />
                {COMPANY.address.zip} {COMPANY.address.city}
                <br />
                Telefon: {COMPANY.contact.phoneDisplay} · Mobil:{' '}
                {COMPANY.contact.mobileDisplay}
                <br />
                E-Mail:{' '}
                <a
                  href={COMPANY.contact.emailHref}
                  className="font-medium text-ink underline decoration-border-subtle underline-offset-2 hover:text-point-red"
                >
                  {COMPANY.contact.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                2. Hosting & Server-Logfiles
              </h2>
              <p className="mt-2">
                Beim Aufruf dieser Website erhebt der Webhosting-Anbieter automatisch
                technische Zugriffsdaten (sogenannte Server-Logfiles), wie z. B. Browsertyp,
                Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs und gekürzte/anonymisierte
                IP-Adresse. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zum
                sicheren und störungsfreien Betrieb der Website. Eine Zusammenführung dieser
                Daten mit anderen Datenquellen findet nicht statt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                3. Lokale Schriftarten & keine Tracking-Cookies
              </h2>
              <p className="mt-2">
                Alle verwendeten Schriftarten sind lokal in diese Website eingebunden. Beim
                Seitenaufruf wird keine Verbindung zu Servern externer Font-Anbieter (wie
                Google Fonts) aufgebaut. Wir setzen keine Analyse-Tools oder Werbe-Cookies
                ein.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                4. Kontaktaufnahme & unverbindliche Voranmeldung
              </h2>
              <p className="mt-2">
                Wenn du uns per Voranmelde-Formular, E-Mail oder Telefon kontaktierst,
                werden deine Angaben (z. B. Name, E-Mail-Adresse, Telefonnummer, gewünschte
                Führerscheinklasse und Nachricht) ausschließlich zur Bearbeitung deiner
                Anfrage bzw. zur Anbahnung eines Ausbildungsvertrages verarbeitet (Art. 6
                Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO). Wir geben diese Daten
                nicht ohne deine Einwilligung an Dritte weiter und löschen sie, sobald sie
                für den Zweck nicht mehr erforderlich sind und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                5. Google Maps (2-Klick-Lösung)
              </h2>
              <p className="mt-2">
                Auf unserer Website bieten wir eine interaktive Anfahrtskarte über Google
                Maps (Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin
                4, Irland) an. Um deine Privatsphäre zu schützen, ist die Karte standardmäßig
                deaktiviert – es werden zunächst keinerlei Daten an Google übertragen.
              </p>
              <p className="mt-2">
                Erst wenn du aktiv auf „Google Maps laden“ klickst, erklärst du deine
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Dabei werden deine IP-Adresse
                und technische Browserdaten an Google übermittelt (eine Übertragung an Server
                in den USA ist möglich). Alternativ kannst du unsere Adresse über den
                externen Link direkt in Google Maps öffnen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">
                6. Deine Rechte als betroffene Person
              </h2>
              <p className="mt-2">
                Du hast jederzeit das Recht auf Auskunft über deine bei uns gespeicherten
                personenbezogenen Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16 DSGVO),
                Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
                Datenübertragbarkeit (Art. 20 DSGVO) sowie auf Widerspruch gegen die
                Verarbeitung (Art. 21 DSGVO). Eine erteilte Einwilligung kannst du jederzeit
                mit Wirkung für die Zukunft widerrufen.
              </p>
              <p className="mt-2">
                Darüber hinaus steht dir ein Beschwerderecht bei der zuständigen
                Datenschutz-Aufsichtsbehörde zu (in Baden-Württemberg: Der
                Landesbeauftragte für den Datenschutz und die Informationsfreiheit
                Baden-Württemberg).
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
