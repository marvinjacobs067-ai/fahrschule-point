import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// DSGVO-konform: Schriften werden lokal über @fontsource ins dist/-Bundle gepackt (kein Google Fonts CDN)
import '@fontsource-variable/inter'
import '@fontsource-variable/plus-jakarta-sans'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
