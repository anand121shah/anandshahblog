'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { FaHeart, FaShare, FaExpandAlt } from 'react-icons/fa'
import 'photoswipe/style.css'
import type { PhotoMetadata } from '@/lib/imageUtils'

interface PhotoGridProps {
  photos: PhotoMetadata[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null)
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set())
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null)

  useEffect(() => {
    // Initialize PhotoSwipe with custom options
    lightboxRef.current = new PhotoSwipeLightbox({
      gallery: '#photo-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      padding: { top: 30, bottom: 30, left: 30, right: 30 },
      showHideAnimationType: 'fade',
      zoom: false,
      showAnimationDuration: 300,
      hideAnimationDuration: 300,
    })
    lightboxRef.current.init()

    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy()
        lightboxRef.current = null
      }
    }
  }, [])

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement>,
    photo: PhotoMetadata
  ) => {
    const img = event.target as HTMLImageElement
    photo.width = img.naturalWidth
    photo.height = img.naturalHeight
    photo.aspectRatio = img.naturalWidth / img.naturalHeight
  }

  const toggleLike = (photoSrc: string, event: React.MouseEvent) => {
    event.preventDefault()
    setLikedPhotos(prev => {
      const newLiked = new Set(prev)
      if (newLiked.has(photoSrc)) {
        newLiked.delete(photoSrc)
      } else {
        newLiked.add(photoSrc)
      }
      return newLiked
    })
  }

  const sharePhoto = (photo: PhotoMetadata, event: React.MouseEvent) => {
    event.preventDefault()
    if (navigator.share) {
      navigator.share({
        title: photo.alt || 'Check out this photo',
        text: photo.caption || 'A beautiful photo from my collection',
        url: photo.src
      })
    }
  }

  return (
    <div
      id="photo-gallery"
      className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
    >
      {photos.map((photo, index) => (
        <motion.div
          key={photo.src}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative break-inside-avoid group"
          onMouseEnter={() => setHoveredPhoto(photo.src)}
          onMouseLeave={() => setHoveredPhoto(null)}
        >
          <a
            href={photo.src}
            data-pswp-width={photo.width}
            data-pswp-height={photo.height}
            data-cropped="false"
            className="block relative overflow-hidden rounded-xl transform transition-all duration-500 hover:shadow-2xl"
          >
            <div 
              className="relative" 
              style={{ paddingBottom: `${(photo.height / photo.width) * 100}%` }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover transition-all duration-700 ${
                  isLoading ? 'blur-lg scale-105' : 'blur-0 scale-100'
                } group-hover:scale-105`}
                onLoad={(e) => {
                  handleImageLoad(e, photo)
                  setIsLoading(false)
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
              />
              
              {/* Overlay with photo details */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption && (
                    <p className="text-white text-sm mb-3 font-medium">{photo.caption}</p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => toggleLike(photo.src, e)}
                        className={`p-2 rounded-full ${
                          likedPhotos.has(photo.src) 
                            ? 'bg-pink-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        } transition-colors duration-200`}
                        aria-label="Like photo"
                      >
                        <FaHeart className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => sharePhoto(photo, e)}
                        className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-200"
                        aria-label="Share photo"
                      >
                        <FaShare className="w-4 h-4" />
                      </motion.button>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-white/90 text-xs bg-white/20 px-3 py-1.5 rounded-full"
                    >
                      <FaExpandAlt className="w-3 h-3" />
                      <span>View full size</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Like animation */}
              <AnimatePresence>
                {likedPhotos.has(photo.src) && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <FaHeart className="w-20 h-20 text-pink-500 drop-shadow-lg" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  )
} 