import { motion } from 'framer-motion'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const logos = [
  { src: `${base}/assets/images/logos/1.png`, alt: 'Binance' },
  { src: `${base}/assets/images/logos/2.webp`, alt: 'Bitget' },
  { src: `${base}/assets/images/logos/3.png`, alt: 'Todayq News' },
  { src: `${base}/assets/images/logos/4.png`, alt: 'Partner' },
  { src: `${base}/assets/images/logos/5.png`, alt: 'Microsoft Start' },
  { src: `${base}/assets/images/logos/6.png`, alt: 'Crypto India Magazine' },
  { src: `${base}/assets/images/logos/7.jpg`, alt: 'Coinlive' },
  { src: `${base}/assets/images/logos/8.png`, alt: 'CoinMarketCap' },
  { src: `${base}/assets/images/logos/9.jpg`, alt: 'Binance' },
  { src: `${base}/assets/images/logos/10.jpg`, alt: 'Cointelegraph' },
]

export default function LogosSection() {
  return (
    <section className="py-14 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl sm:text-2xl font-serif text-white mb-6"
        >
          You Might Have Seen Me On
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-7"
        >
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center h-12 lg:h-12 px-5 py-3 rounded-lg bg-white/95 shadow-sm hover:bg-white transition-colors"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 lg:h-6 w-auto max-w-[90px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
