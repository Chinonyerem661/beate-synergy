import { useId, type ReactNode } from 'react'

/* ───────────────────────── diagonal hatch corner ─────────────────────────
   The grey striped block that sits in the top-right of the profile's
   white pages. */
export function HatchCorner({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`hatch pointer-events-none absolute right-0 top-0 h-16 w-64 text-bone-300 sm:h-20 sm:w-96 ${className}`}
    />
  )
}

/* ───────────────────────── overlapping ring circles ──────────────────────
   The large translucent circle motif from the cover and Core Values pages. */
export function Rings({
  className = '',
  tone = 'warm',
}: {
  className?: string
  tone?: 'warm' | 'green' | 'light'
}) {
  const stops =
    tone === 'green'
      ? ['#b2e04e', '#3f6b1f']
      : tone === 'light'
        ? ['#e8f7c4', '#c6e96b']
        : ['#f6d9c4', '#cfe6a2']

  // unique per instance so two Rings of the same tone never share a gradient
  const gid = `ring${useId().replace(/:/g, '')}`

  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={`pointer-events-none absolute ${className}`}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={stops[0]} />
          <stop offset="100%" stopColor={stops[1]} />
        </linearGradient>
      </defs>
      <circle cx="150" cy="150" r="118" fill="none" stroke={`url(#${gid})`} strokeWidth="46" opacity="0.55" />
      <circle cx="250" cy="250" r="118" fill="none" stroke={`url(#${gid})`} strokeWidth="46" opacity="0.4" />
    </svg>
  )
}

/* ───────────────────────── polaroid photo ────────────────────────────────
   White-framed, taped and slightly rotated, exactly as the service pages
   present their photography. */
export function Polaroid({
  src,
  alt = '',
  rotate = -3,
  className = '',
  ratio = 'aspect-[4/3]',
}: {
  src: string
  alt?: string
  rotate?: number
  className?: string
  ratio?: string
}) {
  return (
    <figure
      className={`polaroid relative ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span aria-hidden className="polaroid-tape" />
      <img src={src} alt={alt} className={`w-full object-cover ${ratio}`} loading="lazy" />
    </figure>
  )
}

/* ───────────────────────── red numbered badge ────────────────────────── */
export function NumberBadge({
  n,
  className = '',
}: {
  n: number | string
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-flare-500 font-display text-sm font-extrabold text-white ${className}`}
    >
      {n}
    </span>
  )
}

/* ───────────────────────── black rounded sheet ───────────────────────────
   The soft-cornered black panel the profile uses to hold service cards. */
export function Sheet({
  children,
  className = '',
  tone = 'ink',
}: {
  children: ReactNode
  className?: string
  tone?: 'ink' | 'lime' | 'white'
}) {
  const tones = {
    ink: 'bg-ink text-white',
    lime: 'bg-lime-400 text-ink',
    white: 'bg-white text-ink',
  }[tone]

  return (
    <div className={`rounded-[2rem] sm:rounded-sheet ${tones} ${className}`}>{children}</div>
  )
}

/* ───────────────────────── decorative dots ──────────────────────────────
   The scattered red and forest-green circles on the Core Values page. */
export function Dot({
  tone = 'red',
  size = 40,
  className = '',
}: {
  tone?: 'red' | 'green'
  size?: number
  className?: string
}) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={`pointer-events-none absolute rounded-full ${
        tone === 'red' ? 'bg-flare-500' : 'bg-forest-600'
      } ${className}`}
    />
  )
}

/* ───────────────────────── running page footer ───────────────────────────
   "BEATE SYNERGY | COMPANY PROFILE" with the circled page number. */
export function PageLabel({
  n,
  tone = 'dark',
  className = '',
}: {
  n: number | string
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className={`page-label ${tone === 'light' ? 'text-white/45' : 'text-ink/35'}`}>
        Beate Synergy <span className="mx-1.5">|</span> Company Profile
      </span>
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full font-display text-xs font-extrabold ${
          tone === 'light' ? 'bg-white text-ink' : 'bg-ink text-white'
        }`}
      >
        {n}
      </span>
    </div>
  )
}
