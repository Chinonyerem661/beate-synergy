import React from 'react'
import { motion } from 'framer-motion'
import { Button, Container, Eyebrow, Reveal, Section, SectionHeading } from '../components/ui'
import { HatchCorner, NumberBadge, Polaroid, Rings, Sheet } from '../components/motifs'
import {
  IconChip,
  IconClipboard,
  IconFactory,
  IconGear,
  IconHandshake,
  IconPeople,
  IconPin,
  IconRocket,
} from '../components/icons'
import { about, capabilities, clients, company, industries, industriesNote, partners, services, whyChoose } from '../content'

/* ── cover spread ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink text-white">
      <img
        src="/images/hero-refinery.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/45" />
      <Rings tone="warm" className="-top-24 right-[-6rem] -z-10 w-[30rem] opacity-45 sm:w-[38rem]" />

      <Container className="relative pb-20 pt-36 sm:pb-28">
        <Reveal>
          <p className="eyebrow text-lime-400">{company.legalName}</p>
          <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.02] sm:text-[4rem] lg:text-[4.9rem]">
            Excellence for
            <br />
            <span className="text-lime-400">Energy Solutions</span>
          </h1>
          <p className="mt-7 max-w-xl text-[1.02rem] leading-[1.75] text-white/70">
            {company.strapline} We deliver niche, high-value engineering and technical services to the
            oil and gas industry.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact">Get in Touch</Button>
            <Button to="/about" variant="light">
              About Us
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/12 pt-7">
            {company.keyServices.split(', ').map((s) => (
              <span key={s} className="eyebrow flex items-center gap-2.5 text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-flare-500" />
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ── welcome page: white, hatch corner, taped sketch ──────────────────────── */
function Welcome() {
  return (
    <Section className="overflow-hidden bg-white">
      <HatchCorner />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <Reveal direction="right">
            <Eyebrow>Welcome</Eyebrow>
            <h2 className="text-[2rem] text-forest-600 sm:text-[2.6rem] lg:text-[3.1rem]">
              Innovating engineering solutions
            </h2>
            <p className="mt-6 text-[0.97rem] leading-[1.8] text-ink/70">{about.intro}</p>
            <p className="mt-5 text-[0.97rem] leading-[1.8] text-ink/70">{about.expertise}</p>
            <div className="mt-9 flex items-center gap-4">
              <IconRocket className="h-11 w-11 text-ink" />
              <p className="max-w-xs font-display text-sm font-bold leading-[1.6] text-forest-600">
                {about.aim}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} direction="left" className="relative mx-auto w-full max-w-md">
            <Polaroid src="/images/engineers-ppe.jpg" alt="Engineers in PPE reviewing plans on site" rotate={-3} />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

/* ── the six numbered capabilities on a black sheet ───────────────────────── */
function Capabilities() {
  return (
    <Section className="bg-bone-200">
      <Container>
        <Sheet className="relative overflow-hidden px-6 py-14 sm:px-12 sm:py-16">
          <Rings tone="green" className="-bottom-40 -right-24 w-[26rem] opacity-25" />
          <div className="relative">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Core <span className="text-lime-400">capabilities</span>
                </>
              }
              lead="Six specialist disciplines, delivered end to end and held to API, ASME and international standards."
              tone="light"
            />

            <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <Reveal key={c} delay={i * 70} direction="up">
                  <li className="flex items-start gap-4 border-t border-white/12 pt-5">
                    <NumberBadge n={i + 1} />
                    <span className="font-display text-[1.02rem] font-bold leading-[1.45] text-white">
                      {c}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Sheet>
      </Container>
    </Section>
  )
}
/* ── services: alternating photo / copy spreads, as in the profile ────────── */
const serviceIcons = [IconGear, IconFactory, IconClipboard, IconPeople, IconChip, IconHandshake]

function Services() {
  return (
    <Section id="services" className="overflow-hidden bg-white">
      <HatchCorner />
      <Container>
        <SectionHeading
          eyebrow="Our services"
          title={
            <>
              Built for <span className="text-ink">upstream reality</span>
            </>
          }
          lead="From surface engineering through fabrication, procurement, training, technology and workforce supply."
        />

        <div className="mt-16 space-y-20 sm:space-y-24">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length]
            const flip = i % 2 === 1

            return (
              <div key={s.slug} className="grid items-center gap-12 lg:grid-cols-2">
                <Reveal direction={flip ? "left" : "right"} className={`relative ${flip ? 'lg:order-2' : ''}`}>
                  <Polaroid
                    src={s.image}
                    alt={s.title}
                    rotate={flip ? 2.5 : -2.5}
                    ratio="aspect-[5/4]"
                    className="mx-auto max-w-lg"
                  />
                  <span className="pointer-events-none absolute -bottom-4 left-2 select-none font-display text-[4.5rem] font-extrabold leading-none text-bone-300/40 sm:text-[5.5rem]">
                    0{i + 1}
                  </span>
                </Reveal>

                <Reveal direction={flip ? "right" : "left"} className={flip ? 'lg:order-1' : ''}>
                  <Icon className="h-12 w-12 text-ink" />
                  <h3 className="mt-5 text-[1.5rem] text-forest-600 sm:text-[1.85rem]">{s.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.8] text-ink/65">{s.summary}</p>

                  <ul className="mt-7 space-y-4">
                    {s.items.map((it, k) => (
                      <li key={it.title} className="flex gap-3.5">
                        <NumberBadge n={k + 1} className="mt-0.5 h-6 w-6 text-[0.7rem]" />
                        <div>
                          <p className="font-display text-[0.95rem] font-bold text-ink">{it.title}</p>
                          <p className="mt-1 text-sm leading-[1.7] text-ink/60">{it.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

/* ── why choose us: full-bleed photo with the forest wash ─────────────────── */
function WhyChoose() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white sm:py-32">
      <img
        src="/images/machinist.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden className="wash-teal absolute inset-0 -z-10" />
      <Rings tone="light" className="-left-32 top-10 -z-10 w-[28rem] opacity-20" />

      <Container>
        <SectionHeading
          eyebrow="Why Beate Synergy"
          title={
            <>
              Why choose <span className="text-white">Beate Synergy</span>
            </>
          }
          lead={whyChoose.intro}
          tone="light"
        />

        <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="border-t border-white/15 pt-5">
                <div className="flex items-center gap-3">
                  <NumberBadge n={i + 1} className="h-7 w-7 text-xs" />
                  <h3 className="font-display text-[1.02rem] font-bold text-lime-400">{r.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-[1.75] text-white/65">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
/* ── industries we serve ──────────────────────────────────────────────────── */
function Industries() {
  const [hovered, setHovered] = React.useState(0)
  const active = industries[hovered]

  return (
    <Section className="overflow-hidden bg-white">
      <HatchCorner />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Sectors" title="Industries we serve" lead={industriesNote} />

            <div className="relative mt-10 max-w-md">
              {industries.map((ind, i) => (
                <div
                  key={ind.name}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === hovered ? 1 : 0, pointerEvents: 'none' }}
                >
                  <Polaroid src={ind.image} alt={ind.name} rotate={-2} />
                </div>
              ))}
              {/* Invisible spacer to keep the correct height */}
              <Polaroid src={active.image} alt="" rotate={-2} className="invisible" />
            </div>
          </Reveal>

          <Reveal delay={110}>
            <ul className="space-y-3.5">
              {industries.map((ind, i) => (
                <li
                  key={ind.name}
                  onMouseEnter={() => setHovered(i)}
                  className={`flex cursor-pointer items-center gap-4 rounded-2xl px-6 py-5 transition-transform duration-200 hover:scale-[1.02] ${
                    ind.accent ? 'bg-lime-400 text-ink' : 'bg-ink text-white'
                  } ${i === hovered ? 'ring-2 ring-offset-2 ring-forest-600' : ''}`}
                >
                  <IconPin className={`h-6 w-6 shrink-0 ${ind.accent ? 'text-ink' : 'text-white'}`} />
                  <span className="font-display text-[0.98rem] font-bold leading-[1.5]">{ind.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>


      </Container>
    </Section>
  )
}


/* ── clients & partners ───────────────────────────────────────────────────── */
function Clients() {
  return (
    <Section className="bg-white">
      <Container>
        {/* Clients */}
        <SectionHeading
          eyebrow=""
          title={<>Our <span className="text-forest-600">Clients</span></>}
          align="center"
          className="mb-12"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 25}>
              {c.logo ? (
                <motion.img
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  src={c.logo}
                  alt={c.name}
                  title={c.name}
                  className={`w-auto object-contain cursor-pointer transition-opacity duration-200 hover:opacity-90 ${c.logoClass ?? 'h-12 max-w-[140px]'} ${c.removeBg ? 'mix-blend-multiply' : ''}`}
                />
              ) : (
                <motion.span
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="inline-block cursor-pointer font-display text-base font-bold text-ink/60 transition-colors hover:text-ink"
                >
                  {c.name}
                </motion.span>
              )}
            </Reveal>
          ))}
        </div>

        {/* Partners divider */}
        <div className="mt-16 border-t border-ink/10 pt-14">
          <SectionHeading
            eyebrow=""
            title={<>Our <span className="text-forest-600">Partners</span></>}
            align="center"
            className="mb-10"
          />
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {partners.map((p) => (
              <Reveal key={p.name}>
                {p.logo ? (
                  <motion.img
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    src={p.logo}
                    alt={p.name}
                    title={p.name}
                    className={`w-auto object-contain cursor-pointer transition-opacity duration-200 hover:opacity-90 ${p.logoClass ?? 'h-16 sm:h-20 max-w-[220px]'} ${p.removeBg ? 'mix-blend-multiply' : ''}`}
                  />
                ) : (
                  <motion.span
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="inline-block cursor-pointer font-display text-xl font-extrabold tracking-tight text-ink/60 transition-colors hover:text-ink"
                  >
                    {p.name}
                  </motion.span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

/* ── closing call to action ───────────────────────────────────────────────── */
function CTA() {
  return (
    <Section className="bg-white">
      <Container>
        <Sheet tone="lime" className="relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
          <Rings tone="green" className="-bottom-32 -left-24 w-[24rem] opacity-30" />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow text-forest-700">Let’s work together</p>
            <h2 className="mt-5 text-[2rem] text-ink sm:text-[2.8rem]">
              Ready to optimise your operations?
            </h2>
            <p className="mt-5 text-[0.97rem] leading-[1.8] text-ink/70">
              Tell us about your project and our engineers will come back to you with a practical,
              costed route forward.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="dark">
                Get in Touch
              </Button>
              <Button href={`mailto:${company.email}`} variant="ghost">
                {company.email}
              </Button>
            </div>
          </div>
        </Sheet>
      </Container>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Capabilities />
      <Services />
      <WhyChoose />
      <Industries />
      <Clients />
      <CTA />
    </>
  )
}
