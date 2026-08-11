type Props = {
  className?: string
  /** `light` uses the white wordmark for dark backgrounds. */
  tone?: 'light' | 'dark'
}

/** The official Beate Synergy wordmark, taken from the brand assets. */
export function Logo({ className = 'h-9', tone = 'dark' }: Props) {
  return (
    <img
      src={tone === 'light' ? '/images/beate-logo.png' : '/images/beate-logo-black.png'}
      alt="Beate Synergy"
      className={`w-auto shrink-0 ${className}`}
    />
  )
}
