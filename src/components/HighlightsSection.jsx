import { motion } from 'framer-motion'

const highlights = [
  { src: encodeURI('/assets/images/With CZ (Gretest Inventor in Crypto Space, World 6th Rickhest Man).jpeg'), alt: 'With CZ, Greatest Inventor in Crypto Space' },
  { src: encodeURI('/assets/images/In Dubai Conference.jpeg'), alt: 'In Dubai Conference' },
  { src: encodeURI('/assets/images/With Shah Hamza, Singapore, Head at Genius Group, New york.jpeg'), alt: 'With Shah Hamza, Head at Genius Group' },
  { src: encodeURI('/assets/images/With Saifedean Ammous, Author of The Bitcoin Standard.jpeg'), alt: 'With Saifedean Ammous, Author of The Bitcoin Standard' },
  { src: '/assets/images/supremecourt.jpeg', alt: 'Supreme Court Practice' },
  { src: '/assets/images/singaporeevent1.png', alt: 'Singapore AUV Challenge' },
  { src: '/assets/images/iit_book_reading.jpeg', alt: 'IIT-Kanpur' },
  { src: encodeURI('/assets/images/With Anchor of Web3TV.jpeg'), alt: 'With Anchor of Web3TV' },
  { src: encodeURI('/assets/images/With Crypto Cyber Security Expert in Abu Dabhi.jpeg'), alt: 'With Crypto Cyber Security Expert in Abu Dhabi' },
  { src: encodeURI('/assets/images/With Founder of Blue Sun in Dubai.jpeg'), alt: 'With Founder of Blue Sun in Dubai' },
  { src: '/assets/images/professionaldine.jpeg', alt: 'Professional engagement' },
  { src: '/assets/images/pic_drone2.jpeg', alt: 'Engineering & innovation', objectPosition: 'center 100%' },
]

export default function HighlightsSection() {
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
