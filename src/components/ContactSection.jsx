import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-blue-900 via-blue-800 to-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">
            Connect & Collaborate
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Interested in legal consultations, collaborations, or discussions on legal technology, blockchain regulations, cryptocurrency compliance, AML, FEMA, and financial technology innovations?
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">Location</p>
            <p className="font-medium">Dubai, UAE</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">Phone</p>
            <a href="tel:+918285937841" className="font-medium hover:text-brand-accent transition-colors">
              +91 8285937841
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">Email</p>
            <a href="mailto:amitkgupta159@gmail.com" className="font-medium hover:text-brand-accent transition-colors break-all">
              amitkgupta159@gmail.com
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">LinkedIn</p>
            <a href="https://www.linkedin.com/in/amitkgupta159/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand-accent transition-colors">
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="mailto:amitkgupta159@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-full hover:bg-brand-accent-light transition-all shadow-soft"
          >
            Schedule a Strategic Conversation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
