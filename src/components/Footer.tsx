import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Container } from './ui'

import { company } from '../content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="hatch absolute right-0 top-0 h-16 w-72 text-white/8 sm:w-96" />

      <Container>
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-[1.4fr_1fr_1.1fr]">
          <div>
            <Logo tone="light" className="h-10" />
            <p className="mt-6 max-w-sm text-sm leading-[1.8] text-white/55">
              A proudly Nigerian owned engineering and technical services company delivering niche,
              high-value solutions to the oil and gas industry.
            </p>
            <p className="eyebrow mt-6 text-lime-400">{company.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-bold text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/55">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-lime-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold text-white">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/55">
              <li>
                {company.address.line1}
                <br />
                {company.address.line2}
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition hover:text-lime-400">
                  {company.email}
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-x-2">
                {company.phones.map((p, i) => (
                  <span key={p} className="flex items-center gap-2">
                    <a href={`tel:+234${p.slice(1)}`} className="transition hover:text-lime-400">
                      {p}
                    </a>
                    {i === 0 ? <span className="text-white/25">|</span> : null}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Â© {year} {company.legalName}. All rights reserved.
          </p>
          <p className="eyebrow text-white/30">{company.website}</p>
        </div>


      </Container>
    </footer>
  )
}
