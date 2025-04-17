'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/shared/Navigation'
import { 
  FaPython, FaDatabase, FaChartLine, FaRobot, 
  FaCamera, FaCode, FaCloud, FaBrain,
  FaLanguage, FaGlobe, FaTools, FaServer,
  FaChartBar, FaNetworkWired, FaChartPie
} from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiScikitlearn, SiApachespark, SiTableau, SiPowerbi } from 'react-icons/si'

const skills = [
  { 
    name: 'Machine Learning', 
    category: 'Data Science',
    icon: FaBrain,
    description: 'Deep Learning, Neural Networks, Model Optimization, Transfer Learning, Transformers'
  },
  { 
    name: 'Python', 
    category: 'Programming',
    icon: FaPython,
    description: 'Advanced Python, Data Structures, OOP, Functional Programming'
  },
  { 
    name: 'Data Engineering', 
    category: 'Data',
    icon: FaDatabase,
    description: 'ETL, Data Pipelines, Data Warehousing, Snowflake, PostgreSQL'
  },
  { 
    name: 'Big Data', 
    category: 'Data Science',
    icon: SiApachespark,
    description: 'Spark, Hadoop, Distributed Computing, Data Processing'
  },
  { 
    name: 'Cloud Computing', 
    category: 'Infrastructure',
    icon: FaCloud,
    description: 'AWS, Azure, GCP, Serverless, Kubernetes'
  },
  { 
    name: 'Data Visualization', 
    category: 'Data Science',
    icon: FaChartLine,
    description: 'Tableau, Power BI, Seaborn, Matplotlib, Plotly'
  },
  { 
    name: 'AI & ML Frameworks', 
    category: 'Development',
    icon: FaRobot,
    description: 'TensorFlow, PyTorch, Scikit-learn, Hugging Face'
  },
  { 
    name: 'Graph Analytics', 
    category: 'Data Science',
    icon: FaNetworkWired,
    description: 'Network Science, Community Detection, Centrality Algorithms'
  },
  { 
    name: 'Statistical Analysis', 
    category: 'Data Science',
    icon: FaChartBar,
    description: 'Time Series Forecasting, A/B Testing, Bayesian Optimization'
  },
  { 
    name: 'Business Intelligence', 
    category: 'Analytics',
    icon: FaChartPie,
    description: 'KPI Development, Dashboarding, Performance Analytics'
  },
  { 
    name: 'Photography', 
    category: 'Creative',
    icon: FaCamera,
    description: 'Portrait, Landscape, Street Photography'
  },
  { 
    name: 'System Design', 
    category: 'Architecture',
    icon: FaServer,
    description: 'Scalable Systems, Microservices, Production ML Deployment'
  }
]

const languages = [
  { 
    name: 'English', 
    level: 'Native or Bilingual',
    proficiency: 100,
    icon: FaGlobe
  },
  { 
    name: 'Urdu/Hindi', 
    level: 'Native or Bilingual',
    proficiency: 100,
    icon: FaGlobe
  },
  { 
    name: 'Nepali', 
    level: 'Native or Bilingual',
    proficiency: 100,
    icon: FaGlobe
  },
  { 
    name: 'Espanol', 
    level: 'Limited Working',
    proficiency: 40,
    icon: FaGlobe
  }
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
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
              About Me
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                I'm a Data Scientist with a passion for leveraging advanced analytics 
                and machine learning to drive strategic business decisions. When I'm not 
                working with data, you can find me behind the camera, capturing moments 
                and exploring new places.
              </motion.p>

              <motion.h2 
                className="text-2xl font-bold mt-12 mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Skills & Expertise
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <skill.icon className="h-6 w-6 text-indigo-500" />
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {skill.category}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.h2 
                className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Languages
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <language.icon className="h-6 w-6 text-indigo-500" />
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {language.name}
                      </h3>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-indigo-400 to-purple-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${language.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {language.level}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.h2 
                className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
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
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 