'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/anand121shah',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anand-shah-data/',
    icon: FaLinkedin,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/smoked_spirit',
    icon: FaInstagram,
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-950/80 backdrop-blur-lg border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-8 md:order-2">
          {socialLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
              <motion.span
                className="absolute -bottom-1 left-1/2 w-12 h-12 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 rounded-full -translate-x-1/2 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <motion.p 
            className="text-center text-sm leading-5 text-gray-400"
            whileHover={{ color: '#fff' }}
          >
            &copy; {new Date().getFullYear()} Anand Shah. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
} 