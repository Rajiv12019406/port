import { motion } from 'framer-motion'

const publications = [
  {
    title: 'Cryptocurrency and Taxation in India',
    venue: '10th International P2P Financial System 2024, Dubai',
    description: 'Market Dynamics and the Impact of Taxation - Comprehensive analysis of cryptocurrency taxation framework in India.',
    tag: 'Cryptocurrency & Taxation',
    image: '/assets/images/research1.jpeg',
  },
  {
    title: 'Revolutionizing Rural Finance',
    venue: '10th International P2P Financial System 2024, Dubai',
    description: 'Evaluating the Role of Blockchain and Cryptocurrency in Advancing Financial Inclusion in India.',
    tag: 'Blockchain & Financial Inclusion',
    image: '/assets/images/research2.jpeg',
  },
  {
    title: 'UAV Development using Additive Manufacturing',
    venue: 'FLAMES Scopus Indexed Conference, India, 2020',
    description: 'Heat Design and Development of an Unmanned Aerial Vehicle - Technical research on UAV development.',
    tag: 'Engineering Innovation',
    image: '/assets/images/research3.jpeg',
  },
  {
    title: 'Heat Transfer Analysis in IC Engines',
    venue: 'FLAMES Scopus Indexed Conference, India, 2020',
    description: 'Design and Optimization and Computational Analysis - Thermal analysis and optimization of internal combustion engines.',
    tag: 'Thermal Analysis',
    image: '/assets/images/research4.jpeg',
  },
  {
    title: 'FSW Optimization using AI',
    venue: 'ISFT-2018, Bangkok, Thailand',
    description: 'Prediction of optimum welding parameters using Genetic Algorithm and ANN.',
    tag: 'AI & Optimization',
    image: '/assets/images/research5.jpeg',
  },
  {
    title: 'Turbine Blade Analysis',
    venue: 'Research Publication',
    description: 'Analysis of Turbine Blade Heat - Thermal analysis and optimization of turbine blades.',
    tag: 'Thermal Analysis',
    image: '/assets/images/research6.jpeg',
  },
]

export default function ResearchSection() {
  return (
    <section id="publications" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-4">Research Publications</h2>
          <p className="text-gray-600 max-w-2xl">
            Published research papers in international conferences covering cryptocurrency taxation, blockchain technology, financial inclusion, and engineering innovations.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl bg-brand-cream border border-gray-100 shadow-soft hover:shadow-card hover:border-brand-accent/20 transition-all overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-200">
                <img src={pub.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">{pub.tag}</span>
                <h3 className="text-lg font-bold text-brand-dark mt-2 mb-2">{pub.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{pub.venue}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{pub.description}</p>
                <a href="#" className="text-brand-accent font-medium text-sm hover:underline">
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
