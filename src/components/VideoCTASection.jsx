import { motion } from 'framer-motion'
import StickyVideo from './StickyVideo'

export default function VideoCTASection() {
  return (
    <section id="video-cta" className="py-20 lg:py-28 bg-gradient-to-b from-brand-cream to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center"
        >
          <StickyVideo
            src="/assets/videos/video1.mp4"
            maxWidth="max-w-5xl"
            aspectClass="aspect-[4/3]"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
