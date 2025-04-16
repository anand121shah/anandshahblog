'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/shared/Navigation'

const skills = [
  { name: 'Machine Learning', category: 'Data Science' },
  { name: 'Analytics', category: 'Data Science' },
  { name: 'Python', category: 'Programming' },
  { name: 'Data Science', category: 'Data Science' },
  { name: 'SQL', category: 'Data' },
  { name: 'Big Data', category: 'Data Science' },
  { name: 'Photography', category: 'Creative' },
  { name: 'Data Visualization', category: 'Data Science' },
]

const languages = [
  { name: 'English', level: 'Native or Bilingual' },
  { name: 'Espanol', level: 'Limited Working' },
  { name: 'Urdu/Hindi', level: 'Native or Bilingual' },
  { name: 'Nepali', level: 'Native or Bilingual' },
]

export default function AboutPage() {
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
              About Me
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a Data Scientist with a passion for leveraging advanced analytics 
                and machine learning to drive strategic business decisions. When I'm not 
                working with data, you can find me behind the camera, capturing moments 
                and exploring new places.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Languages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {language.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {language.level}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                You can reach me by email at{' '}
                <a 
                  href="mailto:anand@time-ai.net" 
                  className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  anand@time-ai.net
                </a>{' '}
                or connect with me on{' '}
                <a 
                  href="https://www.linkedin.com/in/anand-shah-data/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  LinkedIn
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 