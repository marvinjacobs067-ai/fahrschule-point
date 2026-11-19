import { useState } from 'react'
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Clock,
} from 'lucide-react'
import { COMPANY, PHOTO_SLOTS, type LicenseClass } from '../data/fahrschule'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import { LicenseClassesSection } from '../components/LicenseClassesSection'
import { JourneySection } from '../components/JourneySection'
import { TheoryPracticeSection } from '../components/TheoryPracticeSection'
import { AboutSection } from '../components/AboutSection'
import { GoogleMapsEmbed } from '../components/GoogleMapsEmbed'
import { RegistrationForm } from '../components/RegistrationForm'

export function HomePage() {
  const [selectedClassId, setSelectedClassId] = useState<string>('klasse-b')
  const [classSelectionHint, setClassSelectionHint] = useState<string | null>(null)

  const handleSelectClass = (licenseClass: LicenseClass) => {
    setSelectedClassId(licenseClass.id)
    setClassSelectionHint(licenseClass.name)
    const target = document.getElementById('voranmeldung')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-canvas pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-point-red">
                {COMPANY.address.district} · {COMPANY.address.street}
              </p>

              <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
                Dein Weg zum Führerschein in Mannheim-Seckenheim.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-body sm:text-lg">
                Ruhig, persönlich und ohne Stress: Bei{' '}
                <strong className="font-semibold text-ink">{COMPANY.name}</strong> lernst du
                in deinem Tempo – für Pkw, Anhänger oder Zweirad. Klar strukturiert für dich
                und transparent für deine Eltern.
              </p>

              {/* Hero CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  id="hero-cta-voranmelden"
                  href="#voranmeldung"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-point-red px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-point-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-red focus-visible:ring-offset-2 sm:text-base"
                >
                  <span>Unverbindlich voranmelden</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  id="hero-cta-klassen"
                  href="#klassen"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink/20 bg-white px-6 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-surface-subtle/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-red focus-visible:ring-offset-2 sm:text-base"
                >
                  <span>Führerscheinklassen entdecken</span>
                </a>
              </div>

              {/* Trust Strip – Directly Visible */}
              <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-border-subtle pt-7 sm:grid-cols-3">
                <div className="flex items-start gap-2.5">
                  <Award
                    className="mt-0.5 h-5 w-5 shrink-0 text-point-red"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-sm font-bold text-ink">
                      Seit {COMPANY.foundedYear}
                    </dt>
                    <dd className="text-xs text-slate-muted">
                      Über 45 Jahre Erfahrung in Mannheim
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Star
                    className="mt-0.5 h-5 w-5 shrink-0 fill-amber-star text-amber-star"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-sm font-bold text-ink tabular-nums">
                      {COMPANY.reputation.label}
                    </dt>
                    <dd className="text-xs text-slate-muted">
                      Top empfohlen in Seckenheim
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-point-red"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-sm font-bold text-ink">Inhabergeführt</dt>
                    <dd className="text-xs text-slate-muted">
                      Persönlich durch {COMPANY.owner}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Hero Visual Placeholder */}
            <div className="lg:col-span-5">
              <PhotoPlaceholder
                slot={PHOTO_SLOTS.heroFleet}
                aspectClassName="aspect-[4/3] lg:aspect-[4/4.4]"
                tone="dark"
              />
              <div className="mt-3 flex items-center justify-between px-1 text-xs text-slate-muted">
                <span>Büro & Theorie: Mo & Mi, 17:30 – 19:00 Uhr</span>
                <a
                  href="#theorie-praxis"
                  className="font-semibold text-ink hover:text-point-red transition-colors"
                >
                  Alle Zeiten →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FÜHRERSCHEINKLASSEN (INTERAKTIV) */}
      <LicenseClassesSection onSelectClass={handleSelectClass} />

      {/* 3. DEIN WEG ZUM FÜHRERSCHEIN (ABLAUF & UNTERLAGEN) */}
      <JourneySection />

      {/* 4. THEORIE & PRAXIS */}
      <TheoryPracticeSection />

      {/* 5. ÜBER UNS / WARUM FAHRSCHULE POINT */}
      <AboutSection />

      {/* 6. KONTAKT, 2-KLICK-MAPS & VORANMELDUNG */}
      <section
        id="kontakt"
        className="border-t border-border-subtle bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-point-red">
              Kontakt & Anmeldung
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Starte entspannt – wir sind für dich da
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-body sm:text-lg">
              Melde dich unverbindlich über das Formular vor, ruf uns direkt an oder komm
              montags bzw. mittwochs einfach in der Zähringer Str. 101 vorbei.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Registration Form */}
            <div id="voranmeldung" className="lg:col-span-7">
              <RegistrationForm
                selectedClassId={selectedClassId}
                onSelectedClassChange={(id) => {
                  setSelectedClassId(id)
                  setClassSelectionHint(null)
                }}
                classSelectionHint={classSelectionHint}
              />
            </div>

            {/* Direct Contact Details & 2-Click Maps */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-border-subtle bg-canvas p-6">
                <h3 className="text-lg font-bold text-ink">Direkter Kontakt</h3>
                <p className="mt-1 text-xs text-slate-muted">
                  {COMPANY.name} · Inhaber {COMPANY.owner}
                </p>

                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-point-red border border-border-subtle">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-muted">Adresse</p>
                      <p className="font-semibold text-ink">{COMPANY.address.street}</p>
                      <p className="text-slate-body">
                        {COMPANY.address.zip} {COMPANY.address.city}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-point-red border border-border-subtle">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-muted">Festnetz</p>
                      <a
                        href={COMPANY.contact.phoneHref}
                        className="font-semibold text-ink transition-colors hover:text-point-red tabular-nums"
                      >
                        {COMPANY.contact.phoneDisplay}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-point-red border border-border-subtle">
                      <Smartphone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-muted">Mobil</p>
                      <a
                        href={COMPANY.contact.mobileHref}
                        className="font-semibold text-ink transition-colors hover:text-point-red tabular-nums"
                      >
                        {COMPANY.contact.mobileDisplay}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-point-red border border-border-subtle">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-muted">E-Mail</p>
                      <a
                        href={COMPANY.contact.emailHref}
                        className="font-semibold text-ink transition-colors hover:text-point-red break-all"
                      >
                        {COMPANY.contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 border-t border-border-subtle pt-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-point-red border border-border-subtle">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-muted">
                        Büro- & Theoriezeiten
                      </p>
                      <p className="font-semibold text-ink">
                        {COMPANY.officeHoursSummary}
                      </p>
                      <p className="text-xs text-slate-muted">
                        {COMPANY.officeHoursClosedNote}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* DSGVO 2-Klick Google Maps */}
              <GoogleMapsEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
