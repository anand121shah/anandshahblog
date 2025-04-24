'use client'

import Navigation from '@/components/shared/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-center p-8 text-gray-100">
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
            Hi, I'm Anand Shah
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Data Scientist • Hobby Photographer • Perpetual Student • Knowledge Steward
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
            >
              About My Skills
            </Link>
            <Link 
              href="/blog"
              className="bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
            >
              Read My Blogs
            </Link>
            <Link 
              href="/clicks"
              className="border border-gray-700 hover:bg-gray-800 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
            >
              View My Favorite Clicks →
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  )
}
