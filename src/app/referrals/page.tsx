'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/shared/Navigation'

const referrals = [
  {
    category: 'Photography',
    items: [
      {
        name: 'Camera Equipment',
        description: 'Essential gear for capturing amazing moments',
        link: '#',
        coming: true,
      },
    ],
  },
  {
    category: 'Tech Gadgets',
    items: [
      {
        name: 'Development Tools',
        description: 'Software and hardware I use for coding',
        link: '#',
        coming: true,
      },
    ],
  },
  {
    category: 'Books',
    items: [
      {
        name: 'Data Science Reads',
        description: 'My recommended books for learning data science',
        link: '#',
        coming: true,
      },
    ],
  },
]

export default function ReferralsPage() {
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
              My Recommendations
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Here are some products and resources I personally use and recommend. 
              Some links may be affiliate links, and I may earn a commission if you 
              make a purchase.
            </p>

            <div className="grid gap-8">
              {referrals.map((category) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {category.category}
                  </h2>
                  <div className="grid gap-6">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="relative rounded-lg border border-gray-200 dark:border-gray-800 p-6"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {item.description}
                        </p>
                        {item.coming ? (
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                            Coming Soon
                          </span>
                        ) : (
                          <a
                            href={item.link}
                            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Check it out →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 