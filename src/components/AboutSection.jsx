import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 items-stretch min-h-[600px] lg:min-h-[700px]">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center py-12 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-16"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base font-medium text-gray-700 uppercase tracking-widest mb-4"
            >
              
            </motion.p>

            {/* Main Heading - Split across two lines */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif text-brand-dark leading-tight mb-8"
            >
              Hey, I'M AMIT KUMAR GUPTA<br />
              
            </motion.h2>

            {/* Description Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-xl"
            >
              <p>
                A strategic legal technocrat specializing in Anti-Money Laundering (AML), FEMA laws, and Blockchain technology. Practicing before the Hon'ble Supreme Court of India & High Courts, I bridge the gap between law and emerging technologies, delivering innovative solutions for complex regulatory challenges in DeFi, cryptocurrencies, and financial compliance. Known for quick learning and a Rubik's Cube enthusiast, I approach complex problems with analytical precision and strategic thinking.
              </p>
            </motion.div>

            {/* Learn More Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#experience"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-dark rounded-lg hover:bg-brand-navy transition-all shadow-soft w-fit"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Right: Full-Height Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-full min-h-[300px] lg:min-h-[600px] flex items-center justify-center p-4 lg:p-6"
          >
            <div className="relative w-full max-w-lg h-full max-h-[600px] rounded-2xl overflow-hidden">
              <img
                src="/assets/images/1.jpeg"
                alt="Amit Kumar Gupta - Legal Tech Professional"
                className="w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
