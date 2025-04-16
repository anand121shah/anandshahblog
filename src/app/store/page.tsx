'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/shared/Navigation'

export default function StorePage() {
  return (
    <>
      <Navigation />
      <div className="relative px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
              Store
            </h1>
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm working on creating some exciting digital products. Stay tuned!
              </p>
              <div className="mt-8">
                <a
                  href="/blog"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  Check out my blog in the meantime →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 