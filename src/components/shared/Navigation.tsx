'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaHome, FaCamera, FaStore, FaUserAlt, FaBlog, FaHandshake } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const navigation = [
  { 
    name: 'Home', 
    href: '/', 
    icon: FaHome,
    group: 'primary'
  },
  { 
    name: 'My Clicks', 
    href: '/clicks', 
    icon: FaCamera,
    group: 'creative'
  },
  { 
    name: 'Blog', 
    href: '/blog', 
    icon: FaBlog,
    group: 'content'
  },
  { 
    name: 'About My Skills', 
    href: '/about', 
    icon: FaUserAlt,
    group: 'primary'
  },
  { 
    name: 'Store', 
    href: '/store', 
    icon: FaStore,
    group: 'creative'
  },
  { 
    name: 'Referrals', 
    href: '/referrals', 
    icon: FaHandshake,
    group: 'content'
  },
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

  // Group navigation items
  const primaryNav = navigation.filter(item => item.group === 'primary')
  const creativeNav = navigation.filter(item => item.group === 'creative')
  const contentNav = navigation.filter(item => item.group === 'content')

  const NavLink = ({ item }: { item: typeof navigation[0] }) => {
    const isActive = pathname === item.href
    return (
      <Link
        key={item.name}
        href={item.href}
        className="relative inline-flex items-center px-2 pt-1 group"
      >
        <motion.div 
          className="flex items-center space-x-1.5 px-1"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <item.icon className={`h-4 w-4 ${
            isActive ? 'text-indigo-400' : 'text-gray-400 group-hover:text-indigo-400'
          }`} />
          <motion.span 
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive 
                ? 'text-white' 
                : 'text-gray-300 group-hover:text-white'
            }`}
          >
            {item.name}
          </motion.span>
        </motion.div>
        {isActive && (
          <motion.div
            className="absolute -bottom-px inset-x-2 h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            layoutId="navigation-underline"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <motion.div
          className="absolute -bottom-px inset-x-2 h-0.5 bg-gradient-to-r from-indigo-400/0 via-purple-400/40 to-pink-400/0"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    )
  }

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
                    className={`text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 ${
                      scrolled ? 'scale-90' : 'scale-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Anand Shah
                  </motion.span>
                </Link>
              </motion.div>

              <div className="hidden sm:flex sm:items-center sm:space-x-1">
                <div className="flex items-center">
                  {primaryNav.map((item) => (
                    <NavLink key={item.name} item={item} />
                  ))}
                </div>
                <div className="h-6 w-px bg-gray-800 mx-1" />
                <div className="flex items-center">
                  {creativeNav.map((item) => (
                    <NavLink key={item.name} item={item} />
                  ))}
                </div>
                <div className="h-6 w-px bg-gray-800 mx-1" />
                <div className="flex items-center">
                  {contentNav.map((item) => (
                    <NavLink key={item.name} item={item} />
                  ))}
                </div>
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
                        className={`flex items-center space-x-2 w-full py-2 pl-3 pr-4 text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? 'text-white bg-gradient-to-r from-indigo-900 to-purple-900'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
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