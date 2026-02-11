import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-blue-900 via-blue-800 to-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headings on same line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif">
            Connect & Collaborate
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif">
            Schedule a Consultation
          </h3>
        </motion.div>

        {/* Content below */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="text-white/80 text-lg mb-8">
              Interested in legal consultations, collaborations, or discussions on legal technology, blockchain regulations, cryptocurrency compliance, AML, FEMA, and financial technology innovations?
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">Location</p>
                <p className="font-medium">Dubai, UAE</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">Phone</p>
                <a href="tel:+918285937841" className="font-medium hover:text-brand-accent transition-colors">
                  +91 8285937841
                </a>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:amitkgupta159@gmail.com" className="font-medium hover:text-brand-accent transition-colors break-all">
                  amitkgupta159@gmail.com
                </a>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">LinkedIn</p>
                <a href="https://www.linkedin.com/in/amitkgupta159/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand-accent transition-colors">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Schedule a Consultation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="text-white/80 text-lg mb-6">
              Book a meeting to discuss legal consultations, collaborations, or discussions on legal technology and blockchain regulations.
            </p>
            <div className="w-full mt-auto" style={{ height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                src="https://calendly.com/amitkgupta159?embed=true&embed_domain=localhost&embed_type=Inline"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a consultation"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
