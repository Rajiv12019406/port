import { motion } from 'framer-motion'

export default function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Copyright - bottom of footer */}
      <div className="py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Amit Kumar Gupta. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
         Strategic Advisory — Finance · AML · Blockchain Governance
        </p>
      </div>
    </footer>
  )
}
