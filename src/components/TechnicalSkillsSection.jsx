import { motion } from 'framer-motion'

const legalSkills = [
  'Blockchain & Cryptocurrency Regulations',
  'AML & FEMA Compliance',
  'Legal Research & Analysis',
  'Data Privacy & Cybersecurity Law',
  'Supreme Court & High Court Practice',
  'Patent Law & IP Strategy',
  'Technology Transaction Law',
  'Environmental Law Compliance',
]

const techSkills = [
  'Natural Language Processing (NLP)',
  'AI Model Behavior & Fine Tuning',
  'Power BI & Data Analysis',
  'Python & Genetic Algorithms',
  'Machine Learning Applications',
  'Data Visualization & Analytics',
  'Computational Optimization',
  'Emerging Technology Integration',
]

export default function TechnicalSkillsSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-4"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl"
        >
          Comprehensive expertise spanning legal technology, blockchain regulations, artificial intelligence, data analysis, and emerging technologies.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-soft"
          >
            <h3 className="text-lg font-bold text-brand-dark mb-4">Legal & Regulatory Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {legalSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-brand-cream rounded-lg border border-gray-100"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-soft"
          >
            <h3 className="text-lg font-bold text-brand-dark mb-4">Technology & Data Analysis</h3>
            <div className="flex flex-wrap gap-2">
              {techSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-brand-cream rounded-lg border border-gray-100"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
