import { motion } from 'framer-motion'

const logos = [
  { src: '/assets/images/binance_logo.png', alt: 'Binance' },
  { src: '/assets/images/binanace_logo1.png', alt: 'Binance' },
  { src: '/assets/images/cnn_logo.png', alt: 'CNN' },
  { src: '/assets/images/coingekoimage.png', alt: 'CoinGecko' },
  { src: '/assets/images/france_logo.png', alt: 'France' },
  { src: '/assets/images/chinese_news_logo.png', alt: 'Chinese News' },
]

export default function LogosSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl font-serif text-white mb-12"
        >
          You Might Have Seen Me On
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
        >
          {logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="h-8 lg:h-10 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
