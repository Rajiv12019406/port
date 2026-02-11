import { motion } from 'framer-motion'

const certs = [
  { title: "Master's in Financial Technology and Management", org: 'Indian Institute of Technology, Kanpur', period: '2023 - 2024 (96 Percentile)' },
  { title: 'Legum Baccalaureus (LL.B.)', org: 'Harlal School of Law (CCS Affiliated)', period: '2020 - 2023' },
  { title: '2nd Position - Singapore AUV Challenge', org: 'IEEE, 2018 (18th rank out of 54 teams from 13 nations)', period: '2018' },
  { title: 'Bachelor of Technology in Mechanical Engineering', org: 'Delhi Technological University (Formerly DCE)', period: '2016 - 2020' },
]

const additional = [
  'Organized 1st International Conference on NFEST, New Delhi',
  'Proficient Rubik\'s Cube Solver (2x2, 3x3, Mirror Cube, 4x4)',
  'Published 6 research papers in international conferences',
  '7 professional experiences across leading organizations',
  'Featured interviews and coverage on major news portals',
  'Regular participation in legal technology and fintech conferences',
]

export default function CertificationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-12"
        >
          Certifications & Professional Development
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-brand-cream border border-gray-100"
            >
              <h3 className="font-bold text-brand-dark mb-1">{c.title}</h3>
              <p className="text-brand-accent text-sm font-medium mb-1">{c.org}</p>
              <p className="text-gray-500 text-sm">{c.period}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-brand-dark mb-4">Additional Achievements & Recognition</h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-gray-600 text-sm">
            {additional.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
