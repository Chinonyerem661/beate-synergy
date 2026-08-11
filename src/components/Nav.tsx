import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { Container } from './ui'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink/92 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" aria-label="Beate Synergy — home">
            <Logo tone="light" className="h-8 sm:h-9" />
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative font-display text-sm font-semibold transition ${
                    isActive ? 'text-lime-400' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-lime-400 px-5 py-2.5 font-display text-sm font-bold text-ink transition hover:bg-lime-300"
            >
              Get in Touch
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-white transition duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-6 bg-white transition duration-300 ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-6 bg-white transition duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden bg-ink transition-[max-height] duration-500 md:hidden ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <Container className="pb-8">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 font-display text-lg font-bold ${
                    isActive ? 'text-lime-400' : 'text-white/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  )
}
