/** All copy is taken from the Beate Synergy company profile. */

export const company = {
  name: 'Beate Synergy',
  legalName: 'Beate Synergy Limited',
  tagline: 'Excellence for Energy Solutions',
  strapline: 'Innovating Engineering Solutions.',
  website: 'www.beatesynergy.com',
  email: 'info@beatesynergy.com',
  phones: ['09135009192', '08120996165'],
  address: {
    line1: 'Mulliner Towers, 6th Floor',
    line2: 'Ikoyi, Lagos, Nigeria',
  },
  keyServices: 'Surface Engineering, Well Testing, HPHT Solutions',
} as const

export const about = {
  intro:
    'Beate Synergy Limited is a proudly Nigerian owned engineering and technical services company, specializing in the provision of niche, high value solutions to the oil and gas industry.',
  expertise:
    'Our expertise is founded on a deep understanding of the challenges faced in upstream operations, particularly in areas requiring precision engineering, advanced technical knowledge, and robust operational execution.',
  approach:
    'We combine local expertise with international best practices to deliver lasting solutions for well performance enhancement, surface facility optimization, equipment integrity, and workforce development. Our team consists of seasoned industry professionals committed to setting new standards in service delivery and client satisfaction.',
  aim: 'At Beate Synergy we aim to empower clients by enhancing operational efficiency, assuring asset integrity, and increasing production. This is achieved through innovative, safe, and cost-effective engineering solutions.',
}

export const mission =
  'To deliver innovative, reliable, and safe engineering solutions that optimize our clients’ operations, enhance asset performance, and contribute to sustainable energy development, while fostering local capacity.'

export const vision =
  'To be the leading and preferred partner for specialized surface engineering, well intervention, HPHT solutions, and technical capacity development in the Nigerian/West African Oil & Gas industry, recognized for our technical prowess, integrity, and unwavering commitment to excellence.'

export type Value = { title: string; body: string; tone: 'lime' | 'ink' }

export const values: Value[] = [
  {
    title: 'Client Focus',
    body: 'Understanding and exceeding our clients’ expectations.',
    tone: 'lime',
  },
  {
    title: 'Innovation',
    body: 'Leveraging emerging technologies and creative solutions to stay ahead of the curve and solve complex challenges.',
    tone: 'ink',
  },
  {
    title: 'Safety',
    body: 'Prioritizing the health and safety of our people, clients, and the environment.',
    tone: 'ink',
  },
  {
    title: 'Excellence',
    body: 'Striving for superior quality and performance in every task.',
    tone: 'ink',
  },
  {
    title: 'Capacity Building',
    body: 'Committed to building and empowering local talents.',
    tone: 'lime',
  },
]

/** The six headline capabilities, numbered as in the profile. */
export const capabilities = [
  'Advanced Surface Engineering',
  'Surface Well Testing and Operations',
  'HPHT (High Pressure High Temperature) Solutions',
  'Well Stimulations',
  'Equipment Fabrications',
  'Specialized Training & Capacity Development',
] as const

export type Service = {
  slug: string
  title: string
  summary: string
  image: string
  items: { title: string; body: string }[]
}

export const services: Service[] = [
  {
    slug: 'surface-engineering',
    title: 'Advanced Surface Engineering & Well Services',
    summary:
      'We specialize in surface production systems and upstream operations, combining technical precision with operational agility to optimize asset performance.',
    image: '/images/offshore.jpg',
    items: [
      {
        title: 'Surface Engineering',
        body: 'Comprehensive design, analysis, and optimization of surface production facilities, flowlines, processing systems, and associated infrastructure. Focus areas include flow assurance, debottlenecking, and process control optimization to enhance productivity and reduce downtime.',
      },
      {
        title: 'Upstream Surface Engineering',
        body: 'Specialized solutions for early production facilities, flow assurance, debottlenecking, and process control optimization.',
      },
      {
        title: 'HPHT (High Pressure High Temperature) Solutions',
        body: 'Specialized engineering, equipment, and operational procedures for safely and efficiently managing HPHT well testing, completions, and production environments.',
      },
      {
        title: 'Surface Well Testing & Operations',
        body: 'End-to-end well testing services, including design, equipment mobilization, execution (production tests, extended well tests), data acquisition, and reservoir characterization. Our solutions ensure accurate evaluation of well performance and reservoir potential.',
      },
      {
        title: 'Well Stimulations',
        body: 'Design, planning, and supervision of well stimulation operations to enhance reservoir productivity and wellbore inflow performance.',
      },
    ],
  },
  {
    slug: 'equipment-fabrication',
    title: 'Equipment Fabrication',
    summary:
      'We deliver custom engineered equipment and lifecycle support to ensure operational reliability and compliance with global standards.',
    image: '/images/fabrication.jpg',
    items: [
      {
        title: 'Custom Equipment Fabrication',
        body: 'Design and fabrication of bespoke oilfield equipment including but not limited to well test separators, surge tanks, choke manifolds, process skids, pipe spools, and structural components, built to API, ASME, and other relevant international standards.',
      },
      {
        title: 'Refurbishment & Modification',
        body: 'Overhaul, repair, and modification of existing client-owned oilfield equipment to extend service life and meet new operational requirements.',
      },
      {
        title: 'Integrity Assessments',
        body: 'Non-destructive testing (NDT), fitness-for-service evaluations, and corrosion management to maintain asset integrity in harsh environments.',
      },
    ],
  },
  {
    slug: 'procurement-consulting',
    title: 'Procurement & Consulting',
    summary:
      'We offer supply chain expertise and technical advisory services to mitigate risks and enhance project outcomes.',
    image: '/images/procurement.jpg',
    items: [
      {
        title: 'Specialized Procurement',
        body: 'Strategic sourcing and supply of high-quality, certified oilfield equipment, tools, spare parts, and materials for upstream operations.',
      },
      {
        title: 'Expert Consulting',
        body: 'Providing technical advisory, feasibility studies, operational audits, and strategic support across our core service areas to help clients optimize performance and mitigate risks.',
      },
      {
        title: 'EPCI Services',
        body: 'From design to commissioning, we deliver Engineering, Procurement, Construction, and Installation (EPCI) services tailored to oil and gas projects. Our integrated approach ensures cost-effective execution, timely delivery, and adherence to the highest safety and quality standards.',
      },
    ],
  },
  {
    slug: 'training',
    title: 'Training & Capacity Development',
    summary:
      'We build competence on the ground, transferring the technical knowledge that keeps operations safe and self-sufficient.',
    image: '/images/training.jpg',
    items: [
      {
        title: 'Specialized Technical Training',
        body: 'Delivery of industry-recognized and bespoke training programs covering Surface Well Testing, HPHT Operations Awareness, Surface Facility Operations, Well Stimulation Principles, and specific equipment handling.',
      },
      {
        title: 'Competency Development',
        body: 'Tailored courses designed to enhance the skills and knowledge of client personnel, fostering a competent and safe workforce.',
      },
      {
        title: 'On the Job Training (OJT)',
        body: 'Practical, hands-on training modules integrated with operational projects.',
      },
    ],
  },
  {
    slug: 'technology',
    title: 'Technology Solutions Deployment',
    summary:
      'We build and deploy customized technology solutions tailored to address specific business challenges, bridging operational gaps and enhancing productivity.',
    image: '/images/technology.jpg',
    items: [
      {
        title: 'Custom Technology Solution Development',
        body: 'Designing and developing software, integrated technology solutions tailored to specific client operational challenges and business needs. This includes process automation, data analytics platforms, remote monitoring systems, and specialized engineering tools.',
      },
      {
        title: 'Solution Deployment & Integration',
        body: 'Managing the end to end deployment of these customized technology solutions, ensuring seamless integration with existing client infrastructure and workflows. Includes installation, configuration, testing, and user training.',
      },
      {
        title: 'Legacy System Modernization & Upgrade',
        body: 'Assisting clients in upgrading or modernizing existing technological systems to improve efficiency, reliability, and data utilization.',
      },
      {
        title: 'Technical Support & Maintenance for Deployed Solutions',
        body: 'Providing ongoing support, maintenance, and updates for custom deployed technology solutions to ensure sustained performance and value.',
      },
    ],
  },
  {
    slug: 'workforce',
    title: 'Technical Staffing & Workforce Solutions',
    summary:
      'We provide reliable technical staffing and workforce support solutions for the oil and gas industry, supplying readily trained and competent personnel for operational, engineering, and field-based roles.',
    image: '/images/workforce.jpg',
    items: [
      {
        title: 'Rapid, Qualified Deployment',
        body: 'We support clients with project-based, short-term, and long-term manpower solutions, ensuring rapid deployment of qualified professionals who can integrate seamlessly into ongoing operations while maintaining high standards of safety, efficiency, and performance.',
      },
      {
        title: 'Bridging Critical Gaps',
        body: 'Through our workforce solutions, we help partners bridge critical manpower gaps, maintain operational continuity, and improve project execution efficiency across upstream and midstream operations.',
      },
    ],
  },
]

export const staffingCapabilities = [
  'Technical and engineering manpower supply',
  'Field operations and maintenance support',
  'HSE and specialized technical personnel',
  'Workforce outsourcing and project staffing',
  'Competency-based screening and onboarding',
  'Training and continuous capacity development',
] as const

export const whyChoose = {
  intro:
    'Beate Synergy is committed to delivering world-class engineering and manufacturing solutions for the oil and gas industry. Our dedication to quality, precision, and innovation sets us apart. Here’s why you should choose us:',
  reasons: [
    {
      title: 'Niche Upstream Expertise',
      body: 'Deep, specialist knowledge of surface engineering, well testing and HPHT environments — not a generalist contractor stretched thin.',
    },
    {
      title: 'Local Capacity, Global Standards',
      body: 'Proudly Nigerian owned, combining local operational insight with international best practice and API/ASME-compliant delivery.',
    },
    {
      title: 'Safety Without Compromise',
      body: 'A zero-harm goal underpinned by continuous HSE audits, awareness programmes and a workforce trained to stop unsafe work.',
    },
    {
      title: 'End-to-End Ownership',
      body: 'From design and procurement through fabrication, installation and commissioning, accountability stays in one place.',
    },
    {
      title: 'Seasoned Professionals',
      body: 'A team of experienced industry practitioners committed to setting new standards in service delivery and client satisfaction.',
    },
    {
      title: 'Knowledge That Stays',
      body: 'Every engagement is an opportunity to build client competence through structured training and on-the-job development.',
    },
  ],
}

export const qhse = {
  heading: 'Commitment to QHSE',
  subheading: '(Quality, Health, Safety & Environment)',
  lead: 'At Beate Synergy, Quality, Health, Safety, and Environmental (QHSE) stewardship are fundamental to our business ethos and integral to every aspect of our operations. We believe that all incidents are preventable and strive for a goal of zero harm to people, assets, and the environment.',
  statement: [
    'Beate Synergy Limited recognizes that the requirement for sound HSE standard is inseparable from the goal of efficient and effective operations, required to achieve high quality performance. Therefore, HSE issues are considered as an integral part of daily activities and will be managed with the same zeal and dedication as production and cost control. Beate Synergy Limited will maintain existing HSE audits, awareness and other programs as continuous machinery for identifying and eliminating hazards, unsafe acts and conditions /practices at work places as part of our corporate goal of improving HSE standards.',
    'The company will identify training requirements for different categories of staff in HSE matters so as to enhance their awareness, and increase their effective participation and contributions as individuals. The company believes that all accidents (injuries and damages) are preventable and that safety is a business. Since human factors are one of the main causes of accidents, Beate Synergy has always been focusing significant resources on information and training activities for all its employees. These activities help to maintain and increase awareness and professional skills about safety, thus limiting the probability for any accident.',
    'All safety officers and supervisors shall adhere to the procedure for reporting unsafe acts, conditions and working practices. It is the responsibility of all employees to report all unsafe conditions and working practices to the safety department without delay. Valuable suggestions and initiatives from workers/clients aimed at improving HSE standards would be highly appreciated and rewarded accordingly; consequently, breach of HSE standards and procedure will not be accepted. All Beate Synergy employees are urged to cooperate to the fullest extent with the HSE department and to carry out their work in line with the company HSE policy.',
  ],
}

export const industries = [
  { name: 'Upstream & Midstream Sectors (Oil and Gas)', accent: true,  image: '/images/ind-upstream.jpg' },
  { name: 'Oilfield Service Companies',                  accent: false, image: '/images/ind-oilfield.jpg' },
  { name: 'Drilling Contractors',                        accent: false, image: '/images/ind-drilling.jpg' },
  { name: 'Exploration & Production (E&P) Companies (IOCs, Independents, NOCs)', accent: false, image: '/images/aerial-plant.jpg' },
  { name: 'Engineering, Procurement, and Construction (EPC) Contractors', accent: true, image: '/images/helmet-dark.jpg' },
]

export const industriesNote =
  'We understand the unique challenges and operational intricacies of the sector and provide solutions that enhance safety, efficiency, and profitability.'

export type Client = { name: string; logo?: string; logoClass?: string; removeBg?: boolean }

export const clients: Client[] = [
  { name: 'ExxonMobil',       logo: '/images/ExxonMobil-Logo.wine.svg',   logoClass: 'h-16 sm:h-20 max-w-[185px]' },
  { name: 'NNPC',             logo: '/images/NNPC-Logo.png' },
  { name: 'NLNG',             logo: '/images/NLNG.png' },
  { name: 'TotalEnergies',    logo: '/images/Total-energies.png' },
  { name: 'Seplat Energy',    logo: '/images/Seplat-energy-main.png',     logoClass: 'h-16' },
  { name: 'Baker Hughes',     logo: '/images/baker-hughes.png',            logoClass: 'h-16 sm:h-20 max-w-[185px]' },
  { name: 'Chevron',          logo: '/images/chevron.jpg',                logoClass: 'h-16 sm:h-20 max-w-[185px]' },
  { name: 'Shell',            logo: '/images/shell-logo.png' },
  { name: 'N-Power',          logo: '/images/N-Power-Logo.jpg' },
  { name: 'Aiteo',            logo: '/images/logo-aiteo-big.png' },
  { name: 'Aviam Offshore',   logo: '/images/aviam-logo.jpg',             logoClass: 'h-16 sm:h-20 max-w-[185px]' },
  { name: 'Zamam Offshore',   logo: '/images/lamam-offshore.png',         logoClass: 'h-16 sm:h-20 max-w-[185px]' },
  { name: 'Sigmund',          logo: '/images/sigmund.png' },
  { name: 'Schulltech',       logo: '/images/schulltech-logo.png' },
  { name: 'Addax Petroleum',  logo: '/images/ADDAX-logo.webp' },
  { name: 'Waltersmith',      logo: '/images/waltersmith.png',            logoClass: 'h-16 sm:h-20 max-w-[185px]' },
]

export type Partner = { name: string; logo?: string; logoClass?: string; removeBg?: boolean }

export const partners: Partner[] = [
  { name: 'Crafwell', logo: '/images/crafwell-logo.png', logoClass: 'h-24 sm:h-28 max-w-[300px]' },
  { name: 'Allianz',  logo: '/images/Allianz-logo.png',  logoClass: 'h-12 sm:h-14 max-w-[170px]' },
]
