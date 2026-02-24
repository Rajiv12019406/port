import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'High-Profile Financial Fraud Case Management',
    description: 'Successfully managed prominent cases including major bank fraud cases, demonstrating exceptional expertise in investigating financial irregularities and mitigating risks.',
    tag: 'Financial Crimes & AML',
    image: '/assets/images/supremecourt.jpeg',
  },
  {
    title: 'Cryptocurrency-Based Money Laundering Investigations',
    description: 'Developed deep expertise in cryptocurrency-based money laundering cases, creating innovative investigation methodologies for digital asset compliance.',
    tag: 'Blockchain & Cryptocurrency',
    image: '/assets/images/adv1.jpeg',
  },
  
  {
    title: 'Academic Excellence at IIT-Kanpur',
    description: 'Achieved 96 percentile in Master\'s in Financial Technology and Management from Indian Institute of Technology, Kanpur.',
    tag: 'Academic Achievement',
    image: '/assets/images/iit_lab1.jpeg',
    
    imageStyle: { objectPosition: '50% 50%' },
   
  },
  {
    title: 'International Engineering Excellence',
    description: 'Achieved 2nd position in Singapore AUV Challenge organized by IEEE in 2018, securing 18th rank out of 54 AUVs from 13 nations.',
    tag: 'Technical Excellence',
    image: '/assets/images/Singapore best photo with Robot and Team.jpeg',
    imageStyle: { objectPosition: 'left center' },
  },
]

export default function AchievementsSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-4">
            Key Achievements & Case Highlights
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-gray-100 shadow-soft hover:shadow-card transition-shadow overflow-hidden"
            >
              <div className="w-full overflow-hidden bg-gray-100 aspect-[4/4]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                  style={item.imageStyle}
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">{item.tag}</span>
                <h3 className="text-xl font-bold text-brand-dark mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
