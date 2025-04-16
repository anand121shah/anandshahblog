'use client'

export interface PhotoMetadata {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
  aspectRatio: number
}

export async function getPhotos(): Promise<PhotoMetadata[]> {
  try {
    const response = await fetch('/api/photos')
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch photos')
    }

    const photos = data.photos as PhotoMetadata[]

    // Group photos by approximate aspect ratio for better layout
    const groups = {
      wide: photos.filter(p => p.aspectRatio >= 1.7),      // Very wide photos
      landscape: photos.filter(p => p.aspectRatio >= 1.3 && p.aspectRatio < 1.7), // Standard landscape
      square: photos.filter(p => p.aspectRatio >= 0.7 && p.aspectRatio < 1.3),   // Nearly square
      portrait: photos.filter(p => p.aspectRatio < 0.7),    // Portrait photos
    }

    // Create an aesthetically pleasing sequence
    const sortedPhotos = [
      ...groups.wide,
      ...groups.landscape,
      ...groups.square,
      ...groups.portrait,
    ]

    return sortedPhotos
  } catch (error) {
    console.error('Error fetching photos:', error)
    return []
  }
} 