import { Button, Container, Eyebrow, Reveal, Section, SectionHeading } from '../components/ui'
import { HatchCorner, NumberBadge, Polaroid, Rings, Sheet } from '../components/motifs'
import {
  IconBulb,
  IconGrowth,
  IconMedal,
  IconRocket,
  IconShield,
  IconTarget,
  IconVision,
} from '../components/icons'
import {
  about,
  company,
  mission,
  qhse,
  staffingCapabilities,
  values,
  vision,
} from '../content'

/** One icon per core value, in the same order as `values` in content.ts. */
const valueIcons = [IconTarget, IconBulb, IconShield, IconMedal, IconGrowth]

/* ── page hero over the crew photograph ───────────────────────────────────── */
function PageHero() {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-ink text-white">
      <img
        src="/images/helmet-dark.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover object-top"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      <Rings tone="warm" className="-right-28 top-6 -z-10 w-[26rem] opacity-35" />

      <Container className="pb-16 pt-36 sm:pb-20">
        <Reveal>
          <p className="eyebrow text-lime-400">About us</p>
          <h1 className="mt-5 max-w-3xl text-[2.4rem] leading-[1.05] sm:text-[3.4rem] lg:text-[4rem]">
            A Nigerian engineering company built on{' '}
            <span className="text-lime-400">technical prowess</span>
          </h1>
          <p className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-white/70">{about.intro}</p>
        </Reveal>
      </Container>
    </section>
  )
}
function WhoWeAre() {
  return (
    <Section className="overflow-hidden bg-white">
      <HatchCorner />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal direction="right" className="relative mx-auto w-full max-w-md">
            <Polaroid src="/images/about-team-2.jpg" alt="The Beate Synergy team at work" rotate={-3} />
          </Reveal>

          <Reveal delay={110} direction="left">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-[2rem] text-forest-600 sm:text-[2.6rem]">
              Local expertise, international best practice
            </h2>
            <p className="mt-6 text-[0.97rem] leading-[1.8] text-ink/70">{about.expertise}</p>
            <p className="mt-5 text-[0.97rem] leading-[1.8] text-ink/70">{about.approach}</p>
            <div className="mt-8 flex items-start gap-4 border-l-2 border-lime-400 pl-5">
              <IconRocket className="h-10 w-10 shrink-0 text-ink" />
              <p className="font-display text-[0.95rem] font-bold leading-[1.65] text-forest-600">
                {about.aim}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

/* ── mission & vision on the black sheet ──────────────────────────────────── */
function MissionVision() {
  return (
    <Section className="bg-bone-200">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="right">
            <Sheet className="relative h-full overflow-hidden px-8 py-12 sm:px-11">
              <Rings tone="green" className="-bottom-36 -right-20 w-[22rem] opacity-25" />
              <div className="relative">
                <IconTarget className="h-12 w-12 text-white" />
                <p className="eyebrow mt-6 text-lime-400">Our mission</p>
                <p className="mt-5 text-[1.05rem] leading-[1.7] text-white/85">{mission}</p>
              </div>
            </Sheet>
          </Reveal>

          <Reveal delay={110} direction="left">
            <Sheet tone="lime" className="relative h-full overflow-hidden px-8 py-12 sm:px-11">
              <div className="relative">
                <IconVision className="h-12 w-12 text-ink" />
                <p className="eyebrow mt-6 text-forest-700">Our vision</p>
                <p className="mt-5 text-[1.05rem] leading-[1.7] text-ink/85">{vision}</p>
              </div>
            </Sheet>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

/* ── core values: lime and black cards with scattered dots ────────────────── */
function CoreValues() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <HatchCorner />

      <Container>
        <SectionHeading
          eyebrow="What drives us"
          title="Our core values"
          lead="Five commitments that shape how we scope, staff and deliver every engagement."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = valueIcons[i % valueIcons.length]!
            const lime = v.tone === 'lime'

            return (
              <Reveal key={v.title} delay={i * 70}>
                <Sheet
                  tone={lime ? 'lime' : 'ink'}
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] px-7 py-9 sm:rounded-[1.75rem]"
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-3 -right-2 select-none font-display text-[5.2rem] font-extrabold leading-none tracking-tighter opacity-[0.12] ${
                      lime ? 'text-ink' : 'text-lime-400'
                    }`}
                  >
                    0{i + 1}
                  </span>

                  <div className="relative z-10 space-y-4">
                    <Icon className={`h-11 w-11 ${lime ? 'text-ink' : 'text-white'}`} />
                    <h3 className={`font-display text-[1.25rem] font-extrabold ${lime ? 'text-ink' : 'text-lime-400'}`}>
                      {v.title}
                    </h3>
                    <p className={`text-sm leading-[1.75] ${lime ? 'text-ink/75' : 'text-white/70'}`}>
                      {v.body}
                    </p>
                  </div>
                </Sheet>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
/* ── staffing capability list over the workforce photo ────────────────────── */
function Staffing() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white sm:py-28">
      <img
        src="/images/workforce.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/85" />
      <div aria-hidden className="wash-forest absolute inset-0 -z-10" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Workforce solutions"
            title={
              <>
                Competent people, <span className="text-white">ready to deploy</span>
              </>
            }
            lead="Screened, trained and mobilised quickly, so operational continuity never depends on a vacancy."
            tone="light"
          />

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {staffingCapabilities.map((c, i) => (
              <Reveal key={c} delay={i * 55}>
                <li className="flex items-start gap-3 border-t border-white/15 pt-4">
                  <NumberBadge n={i + 1} className="h-6 w-6 text-[0.7rem]" />
                  <span className="text-sm font-semibold leading-[1.6] text-white/85">{c}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

/* ── QHSE commitment ──────────────────────────────────────────────────────── */
function Qhse() {
  return (
    <Section className="overflow-hidden bg-white">
      <HatchCorner />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <Eyebrow>Policy</Eyebrow>
            <h2 className="text-[2rem] text-forest-600 sm:text-[2.6rem]">{qhse.heading}</h2>
            <p className="mt-2 font-display text-sm font-bold text-ink/45">{qhse.subheading}</p>
            <p className="mt-6 text-[0.97rem] leading-[1.8] text-ink/70">{qhse.lead}</p>

            <div className="relative mt-10 max-w-md">
              <Polaroid src="/images/engineers-ppe.jpg" alt="Engineers in full PPE" rotate={2} />
            </div>
          </Reveal>

          <Reveal delay={110}>
            <Sheet className="h-full px-7 py-10 sm:px-9">
              <div className="flex items-center gap-3">
                <IconShield className="h-9 w-9 text-white" />
                <p className="eyebrow text-lime-400">HSE statement</p>
              </div>
              <div className="mt-6 space-y-5">
                {qhse.statement.map((para, i) => (
                  <p key={i} className="text-[0.86rem] leading-[1.8] text-white/60">
                    {para}
                  </p>
                ))}
              </div>
            </Sheet>
          </Reveal>
        </div>


      </Container>
    </Section>
  )
}

/* ── closing band ─────────────────────────────────────────────────────────── */
function Closing() {
  return (
    <Section className="bg-bone-200">
      <Container>
        <Sheet tone="lime" className="relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-18">
          <Rings tone="green" className="-right-24 -top-32 w-[24rem] opacity-25" />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow text-forest-700">{company.tagline}</p>
            <h2 className="mt-5 text-[1.9rem] text-ink sm:text-[2.6rem]">
              Let’s build something that lasts
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="dark">
                Contact Us
              </Button>
            </div>
          </div>
        </Sheet>
      </Container>
    </Section>
  )
}

export default function About() {
  return (
    <>
      <PageHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <Staffing />
      <Qhse />
      <Closing />
    </>
  )
}
