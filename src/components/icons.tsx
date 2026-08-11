/**
 * Flat red-and-dark icon set matching the illustration style used across the
 * company profile. `accent` carries the red; the rest inherits currentColor.
 */
type IconProps = { className?: string }

const RED = '#ee2b2b'

export function IconRocket({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 4c7 5.5 10.5 12.8 10.5 21.2 0 3-.5 5.8-1.4 8.3H14.9c-.9-2.5-1.4-5.3-1.4-8.3C13.5 16.8 17 9.5 24 4Z"
        fill={RED}
      />
      <circle cx="24" cy="19" r="4.6" fill="#fff" />
      <path
        d="M14.9 33.5 8 39.2c-.9.7-2.2 0-2-1.1l1.9-9.4a1 1 0 0 1 .7-.8l5.1-1.4M33.1 33.5 40 39.2c.9.7 2.2 0 2-1.1l-1.9-9.4a1 1 0 0 0-.7-.8l-5.1-1.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20.4 38.5c.9 2.6 2.1 4.5 3.6 5.5 1.5-1 2.7-2.9 3.6-5.5" stroke={RED} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function IconVision({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M4 24s7.5-11.5 20-11.5S44 24 44 24s-7.5 11.5-20 11.5S4 24 4 24Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="7" fill={RED} />
      <circle cx="24" cy="24" r="2.6" fill="#fff" />
      <path d="M24 6.5V2M38 11l2.6-3M10 11 7.4 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function IconTarget({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="24" cy="24" r="11.5" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="24" cy="24" r="4.5" fill={RED} />
      <path d="M24 24 41 7" stroke={RED} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M36.5 5.5 41 7l1.5 4.5" stroke={RED} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconBulb({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 5c-7.5 0-13 5.6-13 12.6 0 4.6 2.3 7.7 4.4 10.2 1.4 1.7 2.2 3 2.4 4.7h12.4c.2-1.7 1-3 2.4-4.7C34.7 25.3 37 22.2 37 17.6 37 10.6 31.5 5 24 5Z"
        fill={RED}
      />
      <path d="M17.8 32.5h12.4M19 38h10M21 43h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M24 15v10" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function IconShield({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 4 8 9.5v13.7C8 33 14.6 40.7 24 44c9.4-3.3 16-11 16-20.8V9.5L24 4Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M16.5 24.5 22 30l10-11" stroke={RED} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMedal({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="30" r="12.5" fill={RED} />
      <path
        d="m24 23.5 2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7 2.1-4.3Z"
        fill="#fff"
      />
      <path d="M15 15 10 4h28l-5 11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconGrowth({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path d="M5 40h38" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <rect x="9" y="27" width="8" height="13" rx="1.5" fill="currentColor" />
      <rect x="20" y="19" width="8" height="21" rx="1.5" fill={RED} />
      <rect x="31" y="10" width="8" height="30" rx="1.5" fill="currentColor" />
      <path d="M34 5h7v7" stroke={RED} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconHandshake({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M4 20.5 12 14l7.5 5.5 4.5-2.5 4.5 2.5L36 14l8 6.5-8 11-6-4-6 5-6-5-6 4-8-11Z"
        fill={RED}
      />
      <path d="M19.5 19.5 24 24l4.5-4.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 36h6M33 36h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconClipboard({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="9" y="8" width="30" height="36" rx="3.5" fill={RED} />
      <rect x="17" y="4" width="14" height="8" rx="2.5" fill="currentColor" />
      <path d="m17 26 5 5 10-11" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconFactory({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path d="M6 42V20l10 6V20l10 6V20l10 6v16H6Z" fill={RED} />
      <path d="M6 42h36" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <rect x="34" y="6" width="6" height="14" rx="1.5" fill="currentColor" />
      <path d="M14 33h4M23 33h4M32 33h4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function IconPin({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path d="M24 44V26" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path
        d="M14 22.5c0-1 .5-2 1.4-2.5l3.1-1.8V9.5A2.5 2.5 0 0 1 21 7h6a2.5 2.5 0 0 1 2.5 2.5v8.7l3.1 1.8c.9.5 1.4 1.5 1.4 2.5v.5a1.5 1.5 0 0 1-1.5 1.5H15.5A1.5 1.5 0 0 1 14 23v-.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconGear({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 4l3.2 4.6 5.5-1.2 1 5.5 5.1 2.3-2.4 5.1 3.4 4.5-4.3 3.6.7 5.6-5.6.5-2.6 5-5-2.6-4.9 2.6-2.6-5-5.6-.5.7-5.6L6.3 24.8l3.4-4.5-2.4-5.1 5.1-2.3 1-5.5 5.5 1.2L24 4Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="7" fill={RED} />
    </svg>
  )
}

export function IconChip({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="13" y="13" width="22" height="22" rx="3" fill={RED} />
      <rect x="20" y="20" width="8" height="8" rx="1.5" fill="#fff" />
      <path
        d="M19 13V6M29 13V6M19 42v-7M29 42v-7M13 19H6M13 29H6M42 19h-7M42 29h-7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconPeople({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="18" cy="15" r="7" fill={RED} />
      <path d="M5 42c0-7.2 5.8-13 13-13s13 5.8 13 13" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="34" cy="18" r="5.5" stroke="currentColor" strokeWidth="2.6" />
      <path d="M34 29c5.5 0 9.5 4.4 9.5 10" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

