# Fahrschule Point – Website (point-fahrschule.de)

Moderne, schnelle und DSGVO-konforme Website für die **Fahrschule Point** (Inhaber Peter Schmitt) in Mannheim-Seckenheim.

## Tech-Stack
- **Vite + React + TypeScript + Tailwind CSS v4**
- **Statisches Bundle (`dist/`)** für klassisches Webhosting inkl. vorbereiteter `public/.htaccess` für Apache-Server
- **100 % DSGVO-konform:**
  - Lokal gebundelte Schriftarten (`@fontsource-variable/plus-jakarta-sans` & `@fontsource-variable/inter`) – kein Google Fonts CDN
  - **2-Klick-Lösung für Google Maps** (keinerlei Datenübertragung an Google vor explizitem Klick)
  - Keine Tracking-Cookies oder Drittanbieter-Skripte

## Entwicklung & Build

```bash
npm install
npm run dev      # Lokale Entwicklung
npm run build    # Statischer Produktions-Build in dist/
npm run preview  # Produktions-Build lokal prüfen
```

## Inhalte, Fotos & Klassen pflegen

Alle zentralen Inhalte liegen in **`src/data/fahrschule.ts`**:
- **Unternehmensdaten & Öffnungszeiten:** `COMPANY`, `OPENING_HOURS`
- **Führerscheinklassen:** `LICENSE_CLASSES` (inkl. vorbereiteter Kommentare für **B197** und **B196**, die nach Rücksprache mit Peter Schmitt einfach einkommentiert werden können)
- **Echte Fotos einbinden:** Bilder unter `public/images/` ablegen und in `PHOTO_SLOTS` das `src`-Feld setzen (z. B. `src: '/images/fuhrpark.jpg'`). Der Platzhalter wird automatisch durch das echte Foto ersetzt.

## Deployment auf klassischem Webhosting (`point-fahrschule.de`)

1. `npm run build` ausführen.
2. Den gesamten Inhalt des Ordners `dist/` (inkl. `.htaccess`) per FTP/SFTP in das Webroot-Verzeichnis des Hosters laden.
3. Vor Livegang im Impressum (`src/pages/ImpressumPage.tsx`) prüfen, ob eine USt-IdNr. ergänzt werden soll.
