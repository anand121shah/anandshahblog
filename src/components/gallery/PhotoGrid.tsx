'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import type { PhotoMetadata } from '@/lib/imageUtils'

interface PhotoGridProps {
  photos: PhotoMetadata[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [isLoading, setIsLoading] = useState(true)
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null)

  useEffect(() => {
    // Initialize PhotoSwipe
    lightboxRef.current = new PhotoSwipeLightbox({
      gallery: '#photo-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightboxRef.current.init()

    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy()
        lightboxRef.current = null
      }
    }
  }, [])

  // Update image dimensions after loading
  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement>,
    photo: PhotoMetadata
  ) => {
    const img = event.target as HTMLImageElement
    photo.width = img.naturalWidth
    photo.height = img.naturalHeight
    photo.aspectRatio = img.naturalWidth / img.naturalHeight
  }

  return (
    <div
      id="photo-gallery"
      className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
    >
      {photos.map((photo, index) => (
        <motion.div
          key={photo.src}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative break-inside-avoid"
        >
          <a
            href={photo.src}
            data-pswp-width={photo.width}
            data-pswp-height={photo.height}
            target="_blank"
            rel="noreferrer"
            className="block relative overflow-hidden rounded-lg transform transition-transform hover:scale-[1.02]"
          >
            <div className="relative" style={{ paddingBottom: `${(photo.height / photo.width) * 100}%` }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover transition-all duration-300 ${
                  isLoading ? 'blur-lg' : 'blur-0'
                }`}
                onLoad={(e) => {
                  handleImageLoad(e, photo)
                  setIsLoading(false)
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
              />
            </div>
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <p className="text-white text-sm">{photo.caption}</p>
              </div>
            )}
          </a>
        </motion.div>
      ))}
    </div>
  )
} 