import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Insider signup - top of footer */}
      <div className="py-16 lg:py-20 border-b border-gray-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold font-serif text-white mb-4"
          >
            Become an Insider
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base mb-8"
          >
            Sign up for exclusive content, insights on legal tech & blockchain regulations, and updates I don&apos;t share anywhere else.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 font-semibold text-brand-dark bg-brand-accent rounded-full hover:bg-brand-accent-light transition-all whitespace-nowrap"
            >
              Sign Up
            </button>
          </motion.form>
          <p className="text-gray-500 text-sm mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Contact info - from amitgupta.work
      <div className="py-12 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Location</p>
              <p className="text-white font-medium">Dubai, UAE</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Phone</p>
              <a href="tel:+918285937841" className="text-white font-medium hover:text-brand-accent transition-colors">+91 8285937841</a>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Email</p>
              <a href="mailto:amitkgupta159@gmail.com" className="text-white font-medium hover:text-brand-accent transition-colors break-all">amitkgupta159@gmail.com</a>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">LinkedIn</p>
              <a href="https://www.linkedin.com/in/amitkgupta159/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-brand-accent transition-colors">Connect on LinkedIn</a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Copyright - bottom of footer */}
      <div className="py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Amit Kumar Gupta. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Professional Portfolio — Legal Tech Professional & Supreme Court Practitioner
        </p>
      </div>
    </footer>
  )
}
