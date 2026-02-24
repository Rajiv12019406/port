import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const slides = [
  {
    event: 'P2P financial systems',
    subtitle: 'In Association with VARA in Dubai',
    name: 'Amit Kumar Gupta',
    affiliation: 'IIT KANPUR , INDIA',
    image: '/assets/images/research10.jpeg',
    objectPosition: 'center 25%',
  },
  {
    event: 'P2P financial systems',
    subtitle: 'In Association with VARA in Dubai',
    name: 'Amit Kumar Gupta',
    affiliation: 'IIT KANPUR , INDIA',
    image: '/assets/images/research8.jpeg',
    objectPosition: 'center 25%',
  },
  {
    event: 'P2P financial systems',
    subtitle: 'In Association with VARA in Dubai',
    name: 'Amit Kumar Gupta',
    affiliation: 'IIT KANPUR , INDIA',
    image: '/assets/images/research3.jpeg',
    objectPosition: 'center 25%',
  },
  {
    event: 'P2P financial systems',
    subtitle: 'In Association with VARA in Dubai',
    name: 'Amit Kumar Gupta',
    affiliation: 'IIT KANPUR , INDIA',
    image: '/assets/images/research9.jpeg',
    objectPosition: 'center 25%',
  },
  {
    event: '10th P2P Financial Systems',
    subtitle: 'In Association with VARA in Dubai',
    name: 'Amit Kumar Gupta',
    affiliation: 'IIT KANPUR , INDIA',
    image: '/assets/images/research4.jpeg',
    objectPosition: 'center 25%',
  },
  {
    event: 'P2P financial systems',
    subtitle: 'In Association with VARA in Dubai',
    name: 'Amit Kumar Gupta',
    affiliation: 'IIT KANPUR , INDIA',
    image: '/assets/images/research6.jpeg',
    objectPosition: 'center 25%',
  },
  {
    event: 'P2P financial systems',
    subtitle: 'In Association with VARA in Dubai',
    name: 'Amit Kumar Gupta',
    affiliation: 'IIT KANPUR , INDIA',
    image: '/assets/images/R1.jpeg',
    objectPosition: 'center 25%',
  },
]

const CARD_WIDTH_DESKTOP = 800
const CARD_GAP = 32
const CARD_HEIGHT_DESKTOP = 350

export default function MidCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, isHovered])

  const cardWidth = CARD_WIDTH_DESKTOP
  const translateX = (() => {
    const trackWidth = slides.length * (cardWidth + CARD_GAP) - CARD_GAP
    const trackCenter = trackWidth / 2
    const currentCardCenter = current * (cardWidth + CARD_GAP) + cardWidth / 2
    return trackCenter - currentCardCenter
  })()

  return (
    <section className="py-20 lg:py-28 bg-gray-200">
<div className="text-center">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark"
  >
    Professional Highlights
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="mt-4 text-sm font-normal text-gray-600"
  >
    A visual journey across legal practice, research, and professional milestones.
  </motion.p>
</div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left arrow */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-brand-dark hover:text-brand-accent transition-colors"
          aria-label="Previous"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={next}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-brand-dark hover:text-brand-accent transition-colors"
          aria-label="Next"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel track */}
        <div className="flex justify-center overflow-hidden" style={{ minHeight: CARD_HEIGHT_DESKTOP + 48 }}>
          <motion.div
            className="flex items-center gap-8"
            style={{ perspective: 1200 }}
            animate={{ x: translateX }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {slides.map((slide, i) => {
              const distance = i - current
              const absDistance = Math.abs(distance)
              const scale = absDistance === 0 ? 1 : Math.max(0.65, 1 - absDistance * 0.25)
              const opacity = absDistance === 0 ? 1 : Math.max(0.4, 1 - absDistance * 0.4)
              const blur = absDistance === 0 ? 0 : absDistance * 2
              const zIndex = 10 - absDistance

              return (
                <motion.div
                  key={i}
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-card bg-white"
                  style={{
                    width: CARD_WIDTH_DESKTOP,
                    height: CARD_HEIGHT_DESKTOP,
                    scale,
                    opacity,
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                    zIndex,
                    transformOrigin: 'center center',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => absDistance !== 0 && setCurrent(i)}
                >
                  <div className="flex h-full w-full">
                    {/* Left: blue panel */}
                    <div className="w-2/5 min-w-[280px] bg-brand-navy flex flex-col justify-between p-6">
                      <div>
                        <p className="text-white text-2xl font-bold tracking-tight">
                           <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"></span>
                        </p>
                        <p className="text-white text-lg font-semibold mt-1">{slide.event}</p>
                        <p className="text-white/80 text-xs mt-1 uppercase tracking-wider">{slide.subtitle}</p>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{slide.name}</p>
                        <p className="text-white/80 text-sm">{slide.affiliation}</p>
                      </div>
                    </div>
                    {/* Right: video thumbnail */}
                    <div className="flex-1 relative overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: slide.objectPosition || 'center' }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const slides = [
//   { image: encodeURI('/assets/images/research10.jpeg'), objectPosition: 'center 25%' },
//   { image: '/assets/images/research8.jpeg', objectPosition: 'center 25%' },
//   { image: '/assets/images/research3.jpeg', objectPosition: 'center 25%' },
//   { image: encodeURI('/assets/images/research9.jpeg'), objectPosition: 'center 25%' },
//   { image: encodeURI('/assets/images/research4.jpeg'), objectPosition: 'center 25%' },
//   { image: '/assets/images/research5.jpeg', objectPosition: 'center 25%' },
//   { image: '/assets/images/research6.jpeg', objectPosition: 'center 25%' },
//   { image: '/assets/images/R1.jpeg', objectPosition: 'center 25%' },
// ]

// export default function MidCarousel() {
//   const [current, setCurrent] = useState(0)

//   const next = () => setCurrent((c) => (c + 1) % slides.length)
//   const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

//   useEffect(() => {
//     const interval = setInterval(next, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="py-20 lg:py-28 bg-brand-cream">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-4">
//             Professional Highlights
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             A visual journey across legal practice, research, and professional milestones.
//           </p>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="relative w-full"
//       >
//         <div className="w-full aspect-[25/9] overflow-hidden bg-brand-dark">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative w-full h-full"
//               >
//                 <img
//                   src={slides[current].image}
//                   alt={slides[current].title}
//                   className="w-full h-full object-cover"
//                   style={{ objectPosition: slides[current].objectPosition || 'center' }}
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
//                   <p className="text-white font-bold text-lg sm:text-xl">{slides[current].title}</p>
//                   <p className="text-white/80 text-sm">{slides[current].year}</p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//         </div>

//         {/* Carousel controls */}
//         <div className="flex items-center justify-center gap-4 mt-6 px-4">
//             <button
//               type="button"
//               onClick={prev}
//               className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-brand-accent hover:text-brand-accent transition-colors"
//               aria-label="Previous"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <div className="flex gap-2">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   type="button"
//                   onClick={() => setCurrent(i)}
//                   className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-brand-accent' : 'bg-gray-300'}`}
//                   aria-label={`Slide ${i + 1}`}
//                 />
//               ))}
//             </div>
//             <button
//               type="button"
//               onClick={next}
//               className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-brand-accent hover:text-brand-accent transition-colors"
//               aria-label="Next"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const slides = [
//   { image: encodeURI('/assets/images/research10.jpeg'), objectPosition: 'center 25%' },
//   { image: '/assets/images/research8.jpeg', objectPosition: 'center 25%' },
//   { image: '/assets/images/research3.jpeg', objectPosition: 'center 25%' },
//   { image: encodeURI('/assets/images/research9.jpeg'), objectPosition: 'center 25%' },
//   { image: encodeURI('/assets/images/research4.jpeg'), objectPosition: 'center 25%' },
//   { image: '/assets/images/research5.jpeg', objectPosition: 'center 25%' },
//   { image: '/assets/images/research6.jpeg', objectPosition: 'center 25%' },
//   { image: '/assets/images/R1.jpeg', objectPosition: 'center 25%' },
// ]

// export default function MidCarousel() {
//   const [current, setCurrent] = useState(0)

//   const next = () => setCurrent((c) => (c + 1) % slides.length)
//   const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

//   useEffect(() => {
//     const interval = setInterval(next, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="py-20 lg:py-28 bg-brand-cream">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-4">
//             Professional Highlights
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             A visual journey across legal practice, research, and professional milestones.
//           </p>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="relative w-full"
//       >
//         <div className="w-full aspect-[25/9] overflow-hidden bg-brand-dark">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative w-full h-full"
//               >
//                 <img
//                   src={slides[current].image}
//                   alt={slides[current].title}
//                   className="w-full h-full object-cover"
//                   style={{ objectPosition: slides[current].objectPosition || 'center' }}
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
//                   <p className="text-white font-bold text-lg sm:text-xl">{slides[current].title}</p>
//                   <p className="text-white/80 text-sm">{slides[current].year}</p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//         </div>

//         {/* Carousel controls */}
//         <div className="flex items-center justify-center gap-4 mt-6 px-4">
//             <button
//               type="button"
//               onClick={prev}
//               className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-brand-accent hover:text-brand-accent transition-colors"
//               aria-label="Previous"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <div className="flex gap-2">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   type="button"
//                   onClick={() => setCurrent(i)}
//                   className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-brand-accent' : 'bg-gray-300'}`}
//                   aria-label={`Slide ${i + 1}`}
//                 />
//               ))}
//             </div>
//             <button
//               type="button"
//               onClick={next}
//               className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-brand-accent hover:text-brand-accent transition-colors"
//               aria-label="Next"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//         </div>
//       </motion.div>
//     </section>
//   )
// }




