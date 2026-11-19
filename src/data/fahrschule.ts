/**
 * Zentrale Daten- und Konfigurationsdatei für Fahrschule Point (point-fahrschule.de)
 *
 * Hier können sämtliche Kontaktdaten, Öffnungszeiten, Führerscheinklassen, Texte
 * und spätere echte Fotos an einer einzigen Stelle gepflegt und ausgetauscht werden.
 */

export type LicenseCategoryId = 'pkw' | 'anhaenger' | 'zweirad'

export interface LicenseClass {
  id: string
  code: string
  name: string
  category: LicenseCategoryId
  minAge: string
  shortDescription: string
  highlights: string[]
  note?: string
}

export interface PhotoSlot {
  id: string
  label: string
  caption: string
  aspectHint: string
  /**
   * Sobald ein echtes Foto vorliegt, Datei unter `public/images/...` ablegen
   * und hier den Pfad eintragen (z. B. '/images/fuhrpark.jpg').
   * Solange `src` leer/undefined ist, wird automatisch der stilvolle Platzhalter gerendert.
   */
  src?: string
  alt: string
}

export interface OpeningHourRow {
  day: string
  hours: string
  isOpen: boolean
  note?: string
}

export interface JourneyStep {
  number: string
  title: string
  description: string
  detail: string
}

export interface DocumentItem {
  id: string
  title: string
  detail: string
  requiredFor?: string
}

export const COMPANY = {
  name: 'Fahrschule Point',
  owner: 'Peter Schmitt',
  foundedYear: 1981,
  experienceBadge: 'Seit 1981 · über 45 Jahre Erfahrung',
  domain: 'point-fahrschule.de',
  tagline: 'Dein Weg zum Führerschein in Mannheim-Seckenheim.',
  coreQuote:
    'Wir gehen individuell auf die Vorstellungen und Fähigkeiten unserer Schüler ein.',
  address: {
    street: 'Zähringer Str. 101',
    zip: '68239',
    city: 'Mannheim-Seckenheim',
    full: 'Zähringer Str. 101, 68239 Mannheim-Seckenheim',
    district: 'Mannheim-Seckenheim',
  },
  contact: {
    phoneDisplay: '0621 39158603',
    phoneHref: 'tel:+4962139158603',
    mobileDisplay: '0177 3109012',
    mobileHref: 'tel:+491773109012',
    email: 'info@point-fahrschule.de',
    emailHref: 'mailto:info@point-fahrschule.de',
  },
  reputation: {
    rating: '5,0',
    platform: 'Google',
    label: '5,0 ★ Google-Bewertung',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Fahrschule+Point+Z%C3%A4hringer+Str.+101+68239+Mannheim',
    googleMapsEmbedUrl:
      'https://www.google.com/maps?q=Z%C3%A4hringer+Str.+101,+68239+Mannheim&output=embed',
  },
  officeHoursSummary: 'Montag & Mittwoch, jeweils 17:30 – 19:00 Uhr',
  officeHoursClosedNote: 'Dienstag, Donnerstag – Sonntag geschlossen',
} as const

export const OPENING_HOURS: OpeningHourRow[] = [
  {
    day: 'Montag',
    hours: '17:30 – 19:00 Uhr',
    isOpen: true,
    note: 'Büro, Beratung, Anmeldung & Theorieunterricht',
  },
  {
    day: 'Dienstag',
    hours: 'Geschlossen',
    isOpen: false,
    note: 'Fahrstunden nach Vereinbarung',
  },
  {
    day: 'Mittwoch',
    hours: '17:30 – 19:00 Uhr',
    isOpen: true,
    note: 'Büro, Beratung, Anmeldung & Theorieunterricht',
  },
  {
    day: 'Donnerstag – Sonntag',
    hours: 'Geschlossen',
    isOpen: false,
    note: 'Fahrstunden nach Vereinbarung',
  },
]

export const LICENSE_CATEGORIES: {
  id: LicenseCategoryId
  label: string
  subtitle: string
}[] = [
  {
    id: 'pkw',
    label: 'Pkw',
    subtitle: 'Sicher im Stadtverkehr und auf der Autobahn',
  },
  {
    id: 'anhaenger',
    label: 'Anhänger',
    subtitle: 'Mehr Spielraum für Gespanne, Wohnwagen & Beruf',
  },
  {
    id: 'zweirad',
    label: 'Zweirad',
    subtitle: 'Vom Mofa bis zur offenen Motorradklasse',
  },
]

/**
 * Angebotene Führerscheinklassen der Fahrschule Point.
 *
 * HINWEIS FÜR DEN INHABER / PFLEGE:
 * Die Schlüsselzahlen B197 (Automatik-Prüfung ohne Automatik-Beschränkung) und
 * B196 (125er-Erweiterung für B-Inhaber) sind noch mit Peter Schmitt abzuklären.
 * Nach Freigabe können die vorbereiteten Einträge unten einfach einkommentiert werden.
 */
export const LICENSE_CLASSES: LicenseClass[] = [
  // --- PKW ---
  {
    id: 'klasse-b',
    code: 'B',
    name: 'Klasse B (Pkw)',
    category: 'pkw',
    minAge: 'Ab 18 Jahren',
    shortDescription:
      'Der klassische Autoführerschein für Pkw bis 3,5 t zulässige Gesamtmasse – kompakt, ruhig und sicher ausgebildet.',
    highlights: [
      'Pkw bis 3.500 kg zGG (max. 8 Sitzplätze + Fahrer)',
      'Anhänger bis 750 kg zGG (oder Gespann bis 3.500 kg)',
      'Einschluss der Klassen AM und L',
    ],
  },
  {
    id: 'klasse-bf17',
    code: 'BF17',
    name: 'BF17 – Begleitetes Fahren ab 17',
    category: 'pkw',
    minAge: 'Ab 17 Jahren (Ausbildung ab 16 ½)',
    shortDescription:
      'Früher sicher Routine sammeln: Fahre ab 17 gemeinsam mit eingetragenen Begleitpersonen und starte entspannt in die Volljährigkeit.',
    highlights: [
      'Ausbildungsbeginn bereits ab 16 ½ Jahren möglich',
      'Nachweislich geringeres Unfallrisiko für Fahranfänger',
      'Kombinierbar mit den Anhängerklassen B96 und BE',
    ],
    note: 'Tipp für Eltern: Wir beraten Euch gerne gemeinsam im Büro zu allen Voraussetzungen für Begleitpersonen.',
  },
  /*
  // TODO (mit Inhaber Peter Schmitt abklären): Klasse B197 bei Freigabe einkommentieren
  {
    id: 'klasse-b197',
    code: 'B197',
    name: 'Klasse B197 (Schaltkompetenz & Automatik)',
    category: 'pkw',
    minAge: 'Ab 18 Jahren (bzw. 17 mit BF17)',
    shortDescription:
      'Prüfung entspannt auf dem Automatikfahrzeug ablegen und nach kurzer Schalt-Ausbildung trotzdem weltweit Schaltwagen fahren.',
    highlights: [
      'Mind. 10 Fahrstunden auf Schaltwagen + 15-minütige Testfahrt',
      'Praktische Prüfung auf Automatikfahrzeug',
      'Keine Automatik-Beschränkung im Führerschein',
    ],
  },
  */

  // --- ANHÄNGER ---
  {
    id: 'klasse-b96',
    code: 'B96',
    name: 'Klasse B96 (Anhänger-Erweiterung)',
    category: 'anhaenger',
    minAge: 'Ab 18 Jahren (oder 17 mit BF17)',
    shortDescription:
      'Die unkomplizierte Erweiterung für größere Wohnwagen oder Pferdeanhänger – ganz ohne extra Theorie- oder Praxisprüfung.',
    highlights: [
      'Kombination aus Pkw (B) + Anhänger über 750 kg bis 4.250 kg zGG',
      'Kompakte Fahrerschulung ohne zusätzliche Prüfung',
      'Auch direkt in Kombination mit BF17 möglich',
    ],
  },
  {
    id: 'klasse-be',
    code: 'BE',
    name: 'Klasse BE (Pkw mit großem Anhänger)',
    category: 'anhaenger',
    minAge: 'Ab 18 Jahren (oder 17 mit BF17)',
    shortDescription:
      'Maximale Flexibilität für schwere Anhänger, Boots- oder Arbeitstrailer – mit fundierter Praxis im Rangieren und Fahren.',
    highlights: [
      'Pkw (Klasse B) mit Anhängern bis 3.500 kg zGG',
      'Keine Theorieprüfung erforderlich (nur praktische Prüfung)',
      'Auch in Kombination mit BF17 möglich',
    ],
  },

  // --- ZWEIRAD ---
  {
    id: 'klasse-a',
    code: 'A',
    name: 'Klasse A (Motorrad offen)',
    category: 'zweirad',
    minAge: 'Ab 24 Jahren (Direkteinstieg) / ab 20 (Aufstieg)',
    shortDescription:
      'Volle Leistung ohne Leistungsbegrenzung – für Direkteinsteiger ab 24 oder als Aufstieg nach zwei Jahren Klasse A2.',
    highlights: [
      'Alle Krafträder ohne Hubraum- oder Leistungsbegrenzung',
      'Aufstieg von A2 nach 2 Jahren mit praktischer Prüfung möglich',
      'Fokus auf sichere Blickführung, Kurventechnik & Bremsmanöver',
    ],
  },
  {
    id: 'klasse-a2',
    code: 'A2',
    name: 'Klasse A2 (Motorrad bis 35 kW)',
    category: 'zweirad',
    minAge: 'Ab 18 Jahren',
    shortDescription:
      'Der sportliche Einstieg in die Mittelklasse-Motorräder bis 35 kW (48 PS) – auch als kompakter Aufstieg von A1.',
    highlights: [
      'Krafträder bis 35 kW Leistung (max. 0,2 kW/kg)',
      'Aufstieg von A1 nach 2 Jahren ohne neue Theorieprüfung',
      'Einschluss der Klassen A1 und AM',
    ],
  },
  {
    id: 'klasse-a1',
    code: 'A1',
    name: 'Klasse A1 (Leichtkraftrad 125 ccm)',
    category: 'zweirad',
    minAge: 'Ab 16 Jahren',
    shortDescription:
      'Mobil auf zwei Rädern ab 16 – ideal für den täglichen Weg zu Schule, Ausbildung oder Freizeit in und um Mannheim.',
    highlights: [
      'Leichtkrafträder bis 125 ccm und max. 11 kW (15 PS)',
      'Verkürzt später den Aufstieg zu Klasse A2',
      'Probezeit beginnt bereits mit 16 Jahren',
    ],
  },
  {
    id: 'klasse-am',
    code: 'AM',
    name: 'Klasse AM (Roller & Moped)',
    category: 'zweirad',
    minAge: 'Ab 15 Jahren',
    shortDescription:
      'Unabhängig unterwegs mit Motorroller, Moped oder leichtem Vierradfahrzeug bis 45 km/h.',
    highlights: [
      'Kleinkrafträder bis 50 ccm und max. 45 km/h',
      'Ideal als erster Schritt in den motorisierten Straßenverkehr',
      'Theorie- und Praxisausbildung kompakt aufgebaut',
    ],
  },
  {
    id: 'klasse-mofa',
    code: 'Mofa',
    name: 'Mofa-Prüfbescheinigung',
    category: 'zweirad',
    minAge: 'Ab 15 Jahren',
    shortDescription:
      'Der schnelle und einfache Einstieg auf zwei Rädern bis 25 km/h – überschaubare Ausbildung, große Freiheit.',
    highlights: [
      'Einspurige Fahrräder mit Hilfsmotor bis 25 km/h',
      'Kompakte Theorie- und Praxiseinheiten',
      'Nur theoretische Prüfung (keine praktische Prüfung)',
    ],
  },
  /*
  // TODO (mit Inhaber Peter Schmitt abklären): Schlüsselzahl B196 bei Freigabe einkommentieren
  {
    id: 'klasse-b196',
    code: 'B196',
    name: 'B196 (125er-Erweiterung für Pkw-Inhaber)',
    category: 'zweirad',
    minAge: 'Ab 25 Jahren (mind. 5 Jahre Klasse B)',
    shortDescription:
      'Mit dem Autoführerschein ohne Prüfung auf 125er-Leichtkrafträder steigen – ideal für Pendler und Sommerausflüge.',
    highlights: [
      'Voraussetzung: mind. 25 Jahre alt und 5 Jahre Vorbesitz Klasse B',
      '4 Doppelstunden Theorie + 5 Doppelstunden Praxis – ohne Prüfung',
      'Gültig innerhalb Deutschlands',
    ],
  },
  */
]

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: '01',
    title: 'Anmelden & Antrag',
    description:
      'Melde dich unverbindlich online vor oder komm montags bzw. mittwochs zwischen 17:30 und 19:00 Uhr bei uns in Seckenheim vorbei.',
    detail:
      'Wir klären alle Fragen in Ruhe mit dir (und gerne auch deinen Eltern) und helfen dir beim Führerscheinantrag für die Stadt Mannheim.',
  },
  {
    number: '02',
    title: 'Theorie im Unterricht & online',
    description:
      'Zweimal pro Woche im persönlichen Unterricht vor Ort – ergänzt durch unser modernes Online-Lernsystem für Smartphone, Tablet und PC.',
    detail:
      'Verständlich erklärt statt trocken abgelesen. So sitzt der Stoff sicher, bevor es in die Prüfung geht.',
  },
  {
    number: '03',
    title: 'Praxis auf modernen Fahrzeugen',
    description:
      'Schritt für Schritt in deinem Tempo: von den ersten Metern auf ruhigen Straßen bis zu Autobahn, Überland- und Nachtfahrten.',
    detail:
      'Ohne Druck und ohne Hektik – wir passen jede Fahrstunde an deinen persönlichen Lernstand an.',
  },
  {
    number: '04',
    title: 'Prüfung & Freiheit',
    description:
      'Wir melden dich erst an, wenn du dich wirklich sicher fühlst. Am Prüfungstag begleiten wir dich gewohnt ruhig und zuverlässig.',
    detail:
      'Geschafft – dein Führerschein in der Hand und ein gutes, sicheres Gefühl auf jeder Fahrt.',
  },
]

export const REQUIRED_DOCUMENTS: DocumentItem[] = [
  {
    id: 'sehtest',
    title: 'Aktuelle Sehtestbescheinigung',
    detail:
      'Vom Optiker oder Augenarzt (darf bei Antragstellung nicht älter als 2 Jahre sein).',
  },
  {
    id: 'erste-hilfe',
    title: 'Nachweis über einen Erste-Hilfe-Kurs',
    detail:
      'Standard-Erste-Hilfe-Ausbildung (9 Unterrichtseinheiten) bei einer anerkannten Stelle.',
  },
  {
    id: 'passbild',
    title: 'Biometrisches Passbild',
    detail:
      'Aktuelles biometrisches Lichtbild im Format 35 × 45 mm für deinen neuen Führerschein.',
  },
  {
    id: 'ausweis',
    title: 'Personalausweis oder Reisepass',
    detail:
      'Gültiges Ausweisdokument (bei Reisepass ggf. aktuelle Meldebestätigung mitbringen).',
  },
  {
    id: 'bf17-begleitung',
    title: 'Bei BF17: Unterlagen der Begleitpersonen',
    detail:
      'Kopien von Personalausweis und Führerschein jeder eingetragenen Begleitperson sowie Einverständniserklärung der Erziehungsberechtigten.',
    requiredFor: 'Nur für BF17',
  },
  {
    id: 'vorbesitz',
    title: 'Bisheriger Führerschein (bei Erweiterung)',
    detail:
      'Falls du bereits eine Fahrerlaubnis besitzt (z. B. für BE, B96 oder Motorrad-Aufstieg).',
    requiredFor: 'Bei Erweiterung',
  },
]

export const VALUES = [
  {
    title: 'Individuell statt Standard-Schema',
    description:
      'Jeder lernt anders. Wir richten unsere Ausbildung an deinen Stärken, Fragen und Zielen aus – ohne Massenabfertigung.',
  },
  {
    title: 'Ruhige & geduldige Begleitung',
    description:
      'Ein entspanntes Lernklima im Auto und im Unterricht sorgt dafür, dass du schneller Sicherheit gewinnst und Fehler konstruktiv verstehst.',
  },
  {
    title: 'Über 45 Jahre Erfahrung in Mannheim',
    description:
      'Seit 1981 begleitet Peter Schmitt Fahrschüler in Mannheim-Seckenheim – oft schon in der zweiten Generation derselben Familie.',
  },
  {
    title: 'Klar & transparent für Schüler und Eltern',
    description:
      'Offene Beratung zu Ablauf, Terminen und Kosten von Anfang an. Fragen sind jederzeit willkommen – telefonisch oder persönlich im Büro.',
  },
]

/**
 * Zentrale Bild-Platzhalter für spätere echte Fotos.
 * Zum Austauschen einfach das jeweilige Foto in `public/images/` speichern und
 * das `src`-Feld setzen.
 */
export const PHOTO_SLOTS: Record<
  'heroFleet' | 'classroom' | 'fleet' | 'ownerTeam',
  PhotoSlot
> = {
  heroFleet: {
    id: 'hero-fleet',
    label: '[Platzhalter: Echter Fuhrpark]',
    caption: 'Moderne Ausbildungsfahrzeuge der Fahrschule Point vor Ort in Mannheim-Seckenheim',
    aspectHint: 'Querformat 4:3 · Empfohlen 1600 × 1200 px',
    alt: 'Fuhrpark der Fahrschule Point in Mannheim-Seckenheim',
  },
  classroom: {
    id: 'classroom',
    label: '[Platzhalter: Schulungsraum & Theorieunterricht]',
    caption: 'Unser moderner Unterrichtsraum in der Zähringer Str. 101',
    aspectHint: 'Querformat 16:10 · Empfohlen 1440 × 900 px',
    alt: 'Schulungsraum der Fahrschule Point in Mannheim-Seckenheim',
  },
  fleet: {
    id: 'fleet',
    label: '[Platzhalter: Echter Fuhrpark]',
    caption: 'Pkw, Anhänger-Gespann und Zweiräder für deine Praxisausbildung',
    aspectHint: 'Querformat 16:10 · Empfohlen 1440 × 900 px',
    alt: 'Ausbildungsfahrzeuge der Fahrschule Point',
  },
  ownerTeam: {
    id: 'owner-team',
    label: '[Platzhalter: Team / Inhaber Peter Schmitt]',
    caption: 'Persönlich für dich da: Inhaber Peter Schmitt & Team in Seckenheim',
    aspectHint: 'Hoch- oder Querformat 4:5 · Empfohlen 1200 × 1500 px',
    alt: 'Peter Schmitt, Inhaber der Fahrschule Point',
  },
}
