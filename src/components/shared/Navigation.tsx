'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'My Clicks', href: '/clicks' },
  { name: 'Blog', href: '/blog' },
  { name: 'Referrals', href: '/referrals' },
  { name: 'Store', href: '/store' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950/80 dark:bg-black/80 backdrop-blur-lg shadow-xl' : 'bg-transparent'
    }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between items-center">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="flex flex-shrink-0 items-center group">
                  <motion.span 
                    className={`text-2xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent transition-all duration-300 ${
                      scrolled ? 'scale-90' : 'scale-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Anand Shah
                  </motion.span>
                </Link>
              </motion.div>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative inline-flex items-center px-1 pt-1 group"
                    >
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 to-white"
                          layoutId="navigation-underline"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  )
                })}
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <Disclosure.Panel static as={motion.div} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="sm:hidden"
              >
                <div className="space-y-1 pb-3 pt-2 backdrop-blur-lg bg-gray-950/90 dark:bg-black/90">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className={`block py-2 pl-3 pr-4 text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? 'text-white bg-indigo-900'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Disclosure.Button>
                    )
                  })}
                </div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
} 