import { motion } from 'framer-motion'

const supremeCourtDescription =
  'Active practice in the Supreme Court of India and High Courts, specializing in complex litigation.'

const highProfileCases = [
  'IDBI & ILFS ₹95,000 Cr scam',
  'NH Scam of Uttarakhand',
  'Bombay bond blast money laundering scam',
  'Former Chief Minister of Maharashtra Deshmukh case & many more…',
]

const professionalRoles = [
  {
    title: 'Marketing Consultant',
    company: 'Azitech ApS, Copenhagen, Denmark',
    period: 'June 2025 – Present',
    bullets: [
      'Leading marketing strategy formulation and campaign planning for a technology-focused organization',
      'Responsible for CRM workflows, content creation, and technical community engagement',
    ],
  },
  {
    title: 'Legal Practitioner',
    company: 'Supreme Court of India, Delhi',
    period: 'September 2023 – Present',
    bullets: [
      "Active practice before the Hon'ble Supreme Court of India and various High Courts",
      'Specializing in complex legal matters involving taxation, cryptocurrency, money laundering, FEMA, and cybersecurity law',
    ],
  },
  {
    title: 'Legal Researcher',
    company: 'Jus Amicus LLP, Delhi, India',
    period: 'January 2023 – September 2024',
    bullets: [
      'Managed prominent cases involving high-profile financial fraud',
      'Conducted comprehensive research on AML regulations and cryptocurrency-based money laundering investigations',
    ],
  },
  {
    title: 'Legal Researcher',
    company: 'Corporate & Judis LLP, Delhi, India',
    period: 'April 2022 – December 2022',
    bullets: [
      'Provided comprehensive legal research support to Senior Advocates (AOR, Supreme Court)',
      'Exposure to Patent Law, Technology Transaction Law, Environmental Law, and Data Privacy Laws',
    ],
  },
  {
    title: 'Business Intelligence Analyst',
    company: 'Polestar Solutions & Services Ltd.',
    period: 'August 2020 – October 2020',
    bullets: [
      'Applied data analysis and business intelligence tools to deliver insights for global clients',
      'Utilized Power BI, Python, and Genetic Algorithms for data representation and optimization',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two columns: Legal Strategist | Professional Experience */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-16 lg:mb-20">
          {/* Left: The Legal Strategist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-brand-dark border-b-2 border-brand-accent pb-2 inline-block">
              The Legal Strategist
            </h2>

            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-soft">
              <h3 className="text-lg font-bold text-brand-dark mb-2">Supreme Court Practitioner</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{supremeCourtDescription}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-soft">
              <h3 className="text-lg font-bold text-brand-dark mb-3 border-b border-brand-accent/30 pb-1 inline-block">
                High Profile Defenses
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Successfully managed critical financial fraud cases, including:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {highProfileCases.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-soft">
              <h3 className="text-lg font-bold text-brand-dark mb-3 border-b border-brand-accent/30 pb-1 inline-block">
                Fintech & Crypto Expert
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-brand-accent mb-1.5 underline decoration-brand-accent/50 underline-offset-2">
                    Crypto Forensics
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Developed innovative methodologies for investigating cryptocurrency scams & money
                    laundering and tracing digital assets.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-accent mb-1.5 underline decoration-brand-accent/50 underline-offset-2">
                    Policy & Compliance
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Deep expertise in FEMA laws, international compliance frameworks & De-Fi legal
                    structure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-brand-dark border-b-2 border-brand-accent pb-2 inline-block">
              Professional Experience
            </h2>

            {professionalRoles.map((role, i) => (
              <motion.div
                key={`${role.title}-${role.company}-${role.period}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-soft"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-brand-dark">{role.title}</h3>
                  <span className="text-gray-500 text-xs">{role.period}</span>
                </div>
                <p className="text-brand-accent font-medium text-sm mb-3">{role.company}</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education: three boxes (from sketch - below Legal Strategist & Professional Experience) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 lg:pt-10 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-soft">
              <h3 className="text-lg font-bold text-brand-dark mb-2">IIT Kanpur Gold Medalist</h3>
              <p className="text-brand-accent font-medium text-sm mb-1">
                Master&apos;s in Financial Technology (MBA)
              </p>
              <p className="text-gray-600 text-sm">96 percentile distinction.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-soft">
              <h3 className="text-lg font-bold text-brand-dark mb-2">Engineering Foundation</h3>
              <p className="text-brand-accent font-medium text-sm mb-1">
                B.Tech in Mechanical Engineering,
              </p>
              <p className="text-gray-600 text-sm">
                with first-principle thinking applied to legal problems.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-soft">
              <h3 className="text-lg font-bold text-brand-dark mb-2">Technical Excellence</h3>
              <p className="text-brand-accent font-medium text-sm mb-1">Award-winning Engineer</p>
              <p className="text-gray-600 text-sm">(2nd place, Singapore AUV Challenge, IEEE)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
