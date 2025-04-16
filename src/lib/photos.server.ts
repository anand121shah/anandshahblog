import fs from 'node:fs'
import path from 'node:path'

export interface PhotoMetadata {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
  aspectRatio: number
}

export async function getServerPhotos(): Promise<PhotoMetadata[]> {
  const publicDir = path.join(process.cwd(), 'public')
  const imagesDir = path.join(publicDir, 'images')
  
  try {
    const files = fs.readdirSync(imagesDir)
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file) && 
      !file.toLowerCase().includes('skydiving')
    )

    const photos: PhotoMetadata[] = imageFiles.map(file => {
      // For now, we'll use placeholder dimensions
      // In a production app, you'd want to use sharp or another library to get actual dimensions
      return {
        src: `/images/${file}`,
        width: 1200, // placeholder
        height: 800, // placeholder
        alt: file.split('.')[0].replace(/-/g, ' '),
        aspectRatio: 1.5, // placeholder 1200/800
      }
    })

    return photos
  } catch (error) {
    console.error('Error reading photos directory:', error)
    return []
  }
} 