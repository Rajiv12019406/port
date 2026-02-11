import { motion } from 'framer-motion'

const logos = [
  { src: '/assets/images/binance_logo.png', alt: 'Binance' },
  { src: '/assets/images/binanace_logo1.png', alt: 'Binance' },
]

export default function LogosSection() {
  return (
    <section className="py-8 bg-brand-cream border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6"
        >
          Industry & partners
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-10"
        >
          {logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
