import { motion } from 'framer-motion'
import StickyVideo from './StickyVideo'

export default function VideoCTASection() {
  return (
    <section id="video-cta" className="py-20 lg:py-28 bg-gradient-to-b from-brand-cream to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Text at Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-brand-dark mb-4 leading-tight">
            Take Back Your Time. Get Back Your Focus.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Watch how I help legal and tech professionals reclaim their productivity and deliver impactful results.
          </p>
          <p className="text-brand-accent font-medium mt-3 text-sm uppercase tracking-wider">
            Watch below
          </p>
        </motion.div>

        {/* Videos Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="mb-4">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                Media Coverage
              </span>
              <h3 className="text-xl font-bold text-brand-dark mt-2 mb-3">
                Research Work Coverage
              </h3>
              <p className="text-gray-600">
                My research work gets covered in Binance, CNN, Microsoft, CoinGecko, Chinese, France, etc.
              </p>
            </div>
            <div className="w-full">
              <StickyVideo
                src="/assets/videos/video1.mp4"
                maxWidth="max-w-full"
                aspectClass="aspect-[4/3]"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Right Video - P2P */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-4">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                Dubai
              </span>
              <h3 className="text-xl font-bold text-brand-dark mt-2 mb-3">
                10th International P2P Financial System 
              </h3>
              <p className="text-gray-600">
                Cryptocurrency and Taxation in India - Market Dynamics and the Impact of Taxation.
              </p>
            </div>
            <div className="w-full">
              <StickyVideo
                src="/assets/videos/10th P2PFISY Workshop 2024_ Cryptocurrency and Taxation in India by Amit Kumar Gupta.mp4"
                poster="/assets/images/p2p_thumbail_images.png"
                maxWidth="max-w-full"
                aspectClass="aspect-[4/3]"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
