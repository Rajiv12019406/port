import { motion } from 'framer-motion'

const roles = [
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
      'Active practice before the Hon\'ble Supreme Court of India and various High Courts',
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-12"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-10">
          {roles.map((role, i) => (
            <motion.div
              key={role.title + role.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-soft"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-brand-dark">{role.title}</h3>
                <span className="text-gray-500 text-sm">{role.period}</span>
              </div>
              <p className="text-brand-accent font-medium text-sm mb-4">{role.company}</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-brand-accent mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
