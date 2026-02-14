import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    title: 'Create Innovative Legal Solutions at the Intersection of Law and Technology',
  },
  {
    title: 'Expert in AML, FEMA & Financial Technology',
  },
  {
    title: 'Legal Tech. Blockchain. Compliance.',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef(null)

  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  // Reset carousel to first slide when hero scrolls back into view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setCurrent(0)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center bg-brand-dark text-white overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: 'url(/assets/images/research9.jpeg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-brand-dark/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg font-medium text-white/90 uppercase tracking-widest mb-6"
        >
          Amit Kumar Gupta
          Supreme Court Advocate • MBA Gold-Medalist • Legal Technologist

        </motion.p>

        <div className="relative min-h-[180px] sm:min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif leading-tight tracking-tight text-white"
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 text-lg mt-6 max-w-2xl mx-auto"
        >
          Working at the intersection of law, technology, and financial systems to design regulation that actually works in practice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-white/90"
        >
          Dubai, UAE |India ·  Business Strategist. MBA Gold Medalist· Digital Assets · AML · Financial Regulation · Compliance
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full hover:bg-brand-accent-light transition-all shadow-soft"
          >
            Learn More
          </a>
        </motion.div> */}

        {/* Carousel controls */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-16"
        >
          <button
            type="button"
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/80 hover:border-white/60 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-brand-accent' : 'bg-white/40'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/80 hover:border-white/60 hover:text-white transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div> */}
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  )
}
