import { useState, type FormEvent } from 'react'
import { Button, Container, Eyebrow, Reveal, Section } from '../components/ui'
import { HatchCorner, NumberBadge, Rings, Sheet } from '../components/motifs'
import { IconGear, IconPeople, IconPin } from '../components/icons'
import { capabilities, company } from '../content'

const inputCls =
  'w-full rounded-xl border border-ink/12 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 transition focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-lime-300/50'

/* ── the profile's "Get in Touch" spread: photo top, green diagonal below ─── */
function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <img
        src="/images/aerial-plant.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
      <Rings tone="light" className="-right-24 top-8 -z-10 w-[26rem] opacity-25" />

      <Container className="pb-24 pt-40 sm:pb-32 sm:pt-48">
        <Reveal>
          <p className="eyebrow text-lime-400">Contact</p>
          <h1 className="mt-5 max-w-3xl text-[2.5rem] leading-[1.03] sm:text-[3.6rem] lg:text-[4.2rem]">
            Get in <span className="text-lime-400">Touch</span>
          </h1>
          <p className="mt-6 max-w-lg text-[1rem] leading-[1.75] text-white/70">
            {company.keyServices}. Tell us what you are working on and we will route it to the right
            engineer.
          </p>
        </Reveal>
      </Container>

      {/* the forest-green diagonal that runs under the contact block */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-forest-600"
        style={{ clipPath: 'polygon(0 55%, 100% 0, 100% 100%, 0 100%)' }}
      />
    </section>
  )
}

/* ── contact details on the green band ────────────────────────────────────── */
function Details() {
  const rows = [
    {
      icon: IconPin,
      label: 'Office',
      lines: [company.address.line1, company.address.line2],
    },
    {
      icon: IconGear,
      label: 'Email',
      lines: [company.email],
      href: `mailto:${company.email}`,
    },
    {
      icon: IconPeople,
      label: 'Phone',
      lines: company.phones,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-forest-600 py-16 text-white sm:py-20">
      <div aria-hidden className="hatch absolute right-0 top-0 h-20 w-72 text-white/10 sm:w-96" />

      <Container>
        <div className="grid gap-10 sm:grid-cols-3">
          {rows.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal key={r.label} delay={i * 80}>
                <div className="border-t border-white/25 pt-5">
                  <Icon className="h-10 w-10 text-white" />
                  <p className="eyebrow mt-4 text-lime-200">{r.label}</p>
                  <div className="mt-2 space-y-1 text-[0.97rem] leading-[1.7] text-white/90">
                    {r.lines.map((l) =>
                      r.href ? (
                        <a key={l} href={r.href} className="block transition hover:text-lime-200">
                          {l}
                        </a>
                      ) : r.label === 'Phone' ? (
                        <a
                          key={l}
                          href={`tel:+234${l.slice(1)}`}
                          className="block transition hover:text-lime-200"
                        >
                          {l}
                        </a>
                      ) : (
                        <p key={l}>{l}</p>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>


      </Container>
    </section>
  )
}
/* ── enquiry form ─────────────────────────────────────────────────────────── */
function Enquiry() {
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Project Enquiry from ${formData.get('name')}`,
          _captcha: 'false',
          Name: formData.get('name'),
          Company: formData.get('company'),
          Email: formData.get('email'),
          Phone: formData.get('phone'),
          Service: formData.get('service'),
          Message: formData.get('message'),
        }),
      })

      if (res.ok) {
        setSent(true)
      } else {
        throw new Error('Network response was not ok')
      }
    } catch {
      // Mailto fallback if network or ad-blocker interferes
      const mailtoUrl = `mailto:${company.email}?subject=${encodeURIComponent(
        `Project Enquiry from ${formData.get('name') || ''}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.get('name')}\nCompany: ${formData.get('company')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nService: ${formData.get('service')}\n\nMessage:\n${formData.get('message')}`
      )}`
      window.location.href = mailtoUrl
      setSent(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section className="overflow-hidden bg-white">
      <HatchCorner />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal direction="right">
            <Eyebrow>Send an enquiry</Eyebrow>
            <h2 className="text-[1.9rem] text-forest-600 sm:text-[2.5rem]">
              Tell us about your project
            </h2>
            <p className="mt-5 text-[0.95rem] leading-[1.8] text-ink/65">
              Share the scope, location and timeline. We will come back with a practical route
              forward, including the equipment and personnel required.
            </p>

            <ul className="mt-9 space-y-3">
              {capabilities.map((c, i) => (
                <li key={c} className="flex items-center gap-3.5">
                  <NumberBadge n={i + 1} className="h-6 w-6 text-[0.7rem]" />
                  <span className="font-display text-[0.92rem] font-semibold text-ink/75">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={110} direction="left">
            <Sheet tone="white" className="border border-ink/8 px-6 py-8 shadow-[0_24px_60px_-30px_rgba(10,10,18,0.35)] sm:px-9 sm:py-10">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime-400 font-display text-2xl font-extrabold text-ink">
                    ✓
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold text-forest-600">
                    Thank you — enquiry sent!
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-ink/60">
                    Your enquiry has been delivered to{' '}
                    <span className="font-semibold text-ink">{company.email}</span>. A member of our
                    engineering team will respond shortly. For anything urgent, call{' '}
                    <a href={`tel:+234${company.phones[0].slice(1)}`} className="font-bold text-forest-600">
                      {company.phones[0]}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="eyebrow mb-2 block text-ink/45">
                        Full name
                      </label>
                      <input id="name" name="name" required className={inputCls} placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label htmlFor="company" className="eyebrow mb-2 block text-ink/45">
                        Company
                      </label>
                      <input id="company" name="company" className={inputCls} placeholder="Company name" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="eyebrow mb-2 block text-ink/45">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={inputCls}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="eyebrow mb-2 block text-ink/45">
                        Phone
                      </label>
                      <input id="phone" name="phone" type="tel" className={inputCls} placeholder="080 0000 0000" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="eyebrow mb-2 block text-ink/45">
                      Service of interest
                    </label>
                    <select id="service" name="service" className={inputCls} defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {capabilities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="eyebrow mb-2 block text-ink/45">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={`${inputCls} resize-y`}
                      placeholder="Scope, location and timeline…"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? 'Sending enquiry…' : 'Send enquiry'}
                  </Button>

                  <p className="text-center text-xs leading-[1.6] text-ink/45">
                    Enquiries are sent directly to{' '}
                    <a href={`mailto:${company.email}`} className="font-semibold text-forest-600 hover:underline">
                      {company.email}
                    </a>
                  </p>
                </form>
              )}
            </Sheet>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <Details />
      <Enquiry />
    </>
  )
}
