import { motion } from 'framer-motion'

const competencies = [
  {
    title: 'Anti-Money Laundering & FEMA Compliance',
    description: 'Deep expertise in AML regulations, FEMA laws, cryptocurrency-based money laundering investigations, and international compliance frameworks. Successfully managed high-profile financial fraud cases.',
  },
  {
    title: 'Blockchain & Cryptocurrency Regulations',
    description: 'Specialization in blockchain technology regulations, cryptocurrency taxation, DeFi legal frameworks, and emerging fintech compliance. Advocate for decentralized finance and financial inclusion.',
  },
  {
    title: 'Supreme Court & High Court Practice',
    description: 'Active practice before the Hon\'ble Supreme Court of India and various High Courts. Expertise in complex litigation involving taxation, cryptocurrency, money laundering, and cybersecurity law.',
  },
  {
    title: 'Legal Research & Analysis',
    description: 'Comprehensive legal research capabilities with focus on Patent Law, Technology Transaction Law, Environmental Law, and Data Privacy Laws. Published multiple research papers in international conferences.',
  },
  {
    title: 'Data Privacy & Cybersecurity Law',
    description: 'Expertise in data privacy regulations, cyber law, and emerging technology compliance. Advanced understanding of AI model behavior, natural language processing, and technology risk mitigation.',
  },
  {
    title: 'Financial Technology & Management',
    description: 'Master\'s level expertise in Financial Technology. Technical skills in Power BI, Python, Genetic Algorithms, and data analysis for legal technology applications.',
  },
]

export default function CoreCompetencies() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-brand-accent font-semibold uppercase tracking-wider text-sm">E-Master's — IIT-Kanpur · 96.5 Percentile</p>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-12"
        >
          Core Competencies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-soft hover:shadow-card hover:border-brand-accent/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
