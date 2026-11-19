import { Camera } from 'lucide-react'
import type { PhotoSlot } from '../data/fahrschule'

interface PhotoPlaceholderProps {
  slot: PhotoSlot
  aspectClassName?: string
  className?: string
  tone?: 'dark' | 'warm'
}

/**
 * Moderner, klar gekennzeichneter Bildcontainer für echte Fotos der Fahrschule Point.
 * Sobald in `src/data/fahrschule.ts` ein `src`-Pfad eingetragen wird,
 * rendert diese Komponente automatisch das echte Foto ohne Layout-Änderung.
 */
export function PhotoPlaceholder({
  slot,
  aspectClassName = 'aspect-[4/3]',
  className = '',
  tone = 'dark',
}: PhotoPlaceholderProps) {
  if (slot.src) {
    return (
      <figure className={`overflow-hidden rounded-2xl border border-border-subtle bg-surface ${className}`}>
        <div className={`relative w-full overflow-hidden ${aspectClassName}`}>
          <img
            src={slot.src}
            alt={slot.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="border-t border-border-subtle bg-white px-4 py-3 text-xs text-slate-muted">
          {slot.caption}
        </figcaption>
      </figure>
    )
  }

  const isDark = tone === 'dark'

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border ${
        isDark
          ? 'border-ink/15 bg-ink text-white'
          : 'border-border-subtle bg-surface-subtle text-ink'
      } ${className}`}
    >
      <div
        className={`relative flex w-full flex-col justify-between p-5 sm:p-6 ${aspectClassName}`}
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle at 85% 15%, rgba(214, 40, 40, 0.16), transparent 48%), linear-gradient(145deg, #1A1F24 0%, #111417 100%)'
            : 'radial-gradient(circle at 85% 15%, rgba(214, 40, 40, 0.08), transparent 48%), linear-gradient(145deg, #F3F1EC 0%, #E7E4DC 100%)',
        }}
      >
        {/* Subtle viewfinder corner marks for authentic editorial photography framing */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 ${
            isDark ? 'border-white/25' : 'border-ink/20'
          }`}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 ${
            isDark ? 'border-white/25' : 'border-ink/20'
          }`}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 ${
            isDark ? 'border-white/25' : 'border-ink/20'
          }`}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 ${
            isDark ? 'border-white/25' : 'border-ink/20'
          }`}
        />

        {/* Top metadata row */}
        <div className="flex items-center justify-between gap-2 pl-2 pr-2 pt-1">
          <span
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide ${
              isDark
                ? 'bg-white/10 text-white/90'
                : 'bg-white/90 text-ink border border-border-subtle'
            }`}
          >
            <Camera className="h-3.5 w-3.5 text-point-red" aria-hidden="true" />
            <span>Originalfoto vorgesehen</span>
          </span>
          <span
            className={`text-[11px] font-medium tabular-nums ${
              isDark ? 'text-white/45' : 'text-slate-muted'
            }`}
          >
            Mannheim-Seckenheim
          </span>
        </div>

        {/* Center clear placeholder label */}
        <div className="my-auto py-6 text-center">
          <p
            className={`text-base font-bold tracking-tight sm:text-lg ${
              isDark ? 'text-white' : 'text-ink'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {slot.label}
          </p>
          <p
            className={`mx-auto mt-2 max-w-sm text-xs leading-relaxed sm:text-sm ${
              isDark ? 'text-white/65' : 'text-slate-body'
            }`}
          >
            {slot.caption}
          </p>
        </div>

        {/* Bottom swap hint */}
        <div className="flex items-center justify-between gap-2 pl-2 pr-2 pb-1 text-[11px]">
          <span className={isDark ? 'text-white/45' : 'text-slate-muted'}>
            {slot.aspectHint}
          </span>
          <span className={`h-1.5 w-1.5 rounded-full bg-point-red`} aria-hidden="true" />
        </div>
      </div>
    </figure>
  )
}
