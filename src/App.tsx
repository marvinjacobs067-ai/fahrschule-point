import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MobileActionBar } from './components/MobileActionBar'
import { ScrollManager } from './components/ScrollManager'
import { HomePage } from './pages/HomePage'
import { ImpressumPage } from './pages/ImpressumPage'
import { DatenschutzPage } from './pages/DatenschutzPage'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 py-2 text-sm font-semibold text-white"
      >
        Zum Hauptinhalt springen
      </a>

      <ScrollManager />
      <Header />

      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  )
}
