interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <span
        aria-hidden="true"
        className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-bold tracking-tight transition-transform duration-200 group-hover:scale-[1.03] ${
          isLight
            ? 'bg-white text-ink'
            : 'bg-ink text-white'
        }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <span className="text-lg leading-none -translate-x-[1px]">P</span>
        <span className="absolute right-1.5 bottom-1.5 h-2 w-2 rounded-full bg-point-red" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
            isLight ? 'text-white/65' : 'text-slate-muted'
          }`}
        >
          Fahrschule
        </span>
        <span
          className={`text-xl font-extrabold tracking-tight ${
            isLight ? 'text-white' : 'text-ink'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Point<span className="text-point-red">.</span>
        </span>
      </span>
    </span>
  )
}
