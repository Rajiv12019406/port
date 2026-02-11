import { motion } from 'framer-motion'

const areas = [
  {
    title: 'AML & FEMA Compliance',
    bullets: [
      'Comprehensive expertise in Anti-Money Laundering regulations and compliance frameworks',
      'Deep knowledge of FEMA (Foreign Exchange Management Act) laws and international compliance',
      'Investigation of cryptocurrency-based money laundering cases and digital asset compliance',
      'Risk mitigation strategies for financial irregularities and regulatory violations',
    ],
  },
  {
    title: 'Blockchain & Cryptocurrency Regulations',
    bullets: [
      'Specialized knowledge in blockchain technology regulations and compliance requirements',
      'Expertise in cryptocurrency taxation and regulatory frameworks in India',
      'Understanding of DeFi (Decentralized Finance) legal frameworks and emerging technologies',
      'Advocacy for financial inclusion through blockchain and cryptocurrency innovation',
    ],
  },
  {
    title: 'Data Privacy & Cybersecurity Law',
    bullets: [
      'Expertise in data privacy regulations, GDPR compliance, and data protection frameworks',
      'Comprehensive understanding of cybersecurity law and technology risk mitigation',
      'Knowledge of AI model behavior, natural language processing, and emerging technology compliance',
      'Integration of technical expertise with legal and regulatory perspectives',
    ],
  },
]

export default function ComplianceSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-4"
        >
          Policy, Risk & Compliance Oversight
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl"
        >
          Expertise in AML, FEMA compliance, cryptocurrency regulations, and blockchain technology governance, ensuring regulatory adherence in emerging financial technology sectors.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-brand-cream border border-gray-100"
            >
              <h3 className="text-lg font-bold text-brand-dark mb-4">{area.title}</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {area.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-brand-accent mt-0.5 shrink-0">•</span>
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
