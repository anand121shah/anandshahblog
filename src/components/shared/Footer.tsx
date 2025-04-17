'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </motion.a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Anand Shah. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <span> • </span>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
} 