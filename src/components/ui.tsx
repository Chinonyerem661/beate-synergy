import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  )
}

export function Eyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <p className={`eyebrow mb-4 flex items-center gap-3 ${tone === 'light' ? 'text-lime-400' : 'text-forest-600'}`}>
      <span className={`h-px w-8 ${tone === 'light' ? 'bg-lime-400/60' : 'bg-forest-600/40'}`} />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'dark',
  align = 'left',
  className = '',
}: {
  eyebrow?: string
  title: ReactNode
  lead?: string
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow ? (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2
        className={`text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] ${
          tone === 'light' ? 'text-lime-400' : 'text-forest-600'
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-[0.95rem] leading-[1.75] ${
            tone === 'light' ? 'text-white/65' : 'text-ink/65'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}

type ButtonProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'light' | 'dark'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold transition duration-300 disabled:opacity-60'
  const styles = {
    primary: 'bg-lime-400 text-ink hover:bg-lime-300 hover:shadow-[0_12px_34px_-12px_rgba(178,224,78,0.9)]',
    dark: 'bg-ink text-white hover:bg-forest-600',
    ghost: 'border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink hover:text-white',
    light: 'border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink',
  }[variant]

  const cls = `${base} ${styles} ${className}`
  const inner = (
    <>
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  )

  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href) return <a href={href} className={cls}>{inner}</a>
  return (
    <button type={type} className={cls} disabled={disabled}>
      {inner}
    </button>
  )
}

/** Fades content in on first scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
