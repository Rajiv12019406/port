import { motion } from 'framer-motion'
import StickyVideo from './StickyVideo'

const events = [
  {
    title: 'Dubai Conference Engagement',
    venue: 'Dubai',
    description: 'Speaking at international fintech and cryptocurrency conferences.',
    video: '/assets/videos/dubaiwith_people.mp4',
    poster: '/assets/images/In Dubai Conference.jpeg',
    objectPosition: '100% 10%',
  },
]

export default function SpeakingSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-dark mb-4">
            Speaking Engagements
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Conference presentations and seminars on cryptocurrency, blockchain, and legal technology.
          </p>
        </motion.div>
        <div className="space-y-16">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-100 shadow-soft p-6 lg:p-8"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                <div className="w-full lg:flex-shrink-0 lg:w-[560px] mx-auto lg:mx-0">
                  <StickyVideo
                    src={event.video}
                    poster={event.poster}
                    maxWidth="max-w-2xl lg:max-w-[560px]"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                    {event.venue}
                  </span>
                  <h3 className="text-xl font-bold text-brand-dark mt-2 mb-3">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
