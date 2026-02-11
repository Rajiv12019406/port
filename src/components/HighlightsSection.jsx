import { motion } from 'framer-motion'

const highlights = [
  { src: '/assets/images/supremecourt.jpeg', alt: 'Supreme Court of India' },
  { src: '/assets/images/With CZ (Gretest Inventor in Crypto Space, World 6th Rickhest Man).jpeg', alt: 'With CZ, Greatest Inventor in Crypto Space' },
  { src: '/assets/images/In Dubai Conference.jpeg', alt: 'Dubai Conference' },
  { src: '/assets/images/With Shah Hamza, Singapore, Head at Genius Group, New york.jpeg', alt: 'With Shah Hamza, Singapore' },
  { src: '/assets/images/Amit-IIt-photo.jpeg', alt: 'IIT-Kanpur' },
  { src: '/assets/images/With Saifedean Ammous, Author of The Bitcoin Standard.jpeg', alt: 'With Saifedean Ammous, Author of The Bitcoin Standard' },
  { src: '/assets/images/With Anchor of Web3TV.jpeg', alt: 'With Anchor of Web3TV' },
  { src: '/assets/images/With Founder of Exponential Science.jpeg', alt: 'With Founder of Exponential Science' },
  
]

export default function HighlightsSection() {
  if (highlights.length === 0) {
    return null
  }

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-4">
            Professional Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A visual journey across legal practice, research, and professional milestones.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
