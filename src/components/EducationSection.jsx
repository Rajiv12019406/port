import { motion } from 'framer-motion'

const education = [
  {
    degree: "Master's in Financial Technology and Management",
    institution: 'Indian Institute of Technology, Kanpur (IIT-K)',
    period: 'Cohort 2023–2026 (Completed in 12 months; top percentile)',
    description: 'Achieved top percentile with comprehensive focus on blockchain technology, cryptocurrency regulations, and financial technology innovations. Specialized in the intersection of technology and regulatory compliance.',
    bullets: [
      'Specialized knowledge in DeFi and emerging financial technologies',
      'Advanced understanding of financial technology applications in legal and regulatory frameworks',
      'Comprehensive curriculum covering blockchain, cryptocurrency regulations, and fintech innovations',
    ],
  },
  {
    degree: 'Legum Baccalaureus (LL.B.)',
    institution: 'Harlal School of Law (CCS Affiliated)',
    period: '2020 – 2023',
    description: 'Developed expertise in various legal domains including Patent Law, Technology Transaction Law, Environmental Law, and Data Privacy Laws.',
    bullets: [
      'Expertise in Data Privacy Laws, GDPR compliance, and data protection frameworks',
      'Comprehensive understanding of Technology Transaction Law and technology licensing',
      'Specialized training in Patent Law, including patent applications and intellectual property strategy',
    ],
  },
  {
    degree: 'Bachelor of Technology in Mechanical Engineering',
    institution: 'Delhi Technological University (Formerly DCE)',
    period: '2016 – 2020',
    description: 'Strong technical foundation with focus on design engineering and research. Led AUV team and published multiple research papers in international conferences.',
    bullets: [
      'Expertise in additive manufacturing, heat transfer analysis, and computational optimization',
      'Published multiple research papers in international conferences on engineering innovations',
      'Led AUV team to 2nd position in Singapore AUV Challenge (IEEE 2018)',
    ],
  },
]

export default function EducationSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark shrink-0"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block w-56 shrink-0 rounded-2xl overflow-hidden shadow-card"
          >
            {/* <img
              src="/assets/images/iit_book_reading.jpeg"
              alt="IIT-Kanpur"
              className="w-full h-full object-cover aspect-[3/4]"
            /> */}
          </motion.div>
        </div>
        <div className="max-w-4xl space-y-12">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-2 border-brand-accent pl-6 sm:pl-8"
            >
              <h3 className="text-xl font-bold text-brand-dark mb-1">{item.degree}</h3>
              <p className="text-brand-accent font-medium text-sm mb-2">{item.institution}</p>
              <p className="text-gray-500 text-sm mb-4">{item.period}</p>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-brand-accent mt-1">•</span>
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
