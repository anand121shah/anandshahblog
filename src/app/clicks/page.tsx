'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/shared/Navigation'
import PhotoGrid from '@/components/gallery/PhotoGrid'
import { motion } from 'framer-motion'
import { getPhotos, type PhotoMetadata } from '@/lib/photos.client'

export default function ClicksPage() {
  const [photos, setPhotos] = useState<PhotoMetadata[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const fetchedPhotos = await getPhotos()
        setPhotos(fetchedPhotos)
      } catch (error) {
        console.error('Error loading photos:', error)
      } finally {
        setIsLoading(false)
      }
    }
    loadPhotos()
  }, [])

  return (
    <>
      <Navigation />
      <div className="relative px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-[2000px] py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-8">
              My Favorite Clicks
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
              Capturing moments and memories through my lens. Here are some of my favorite shots from my adventures around the world.
            </p>
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[3/2] rounded-lg bg-white/50 dark:bg-gray-800/50 animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <PhotoGrid photos={photos} />
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
} 