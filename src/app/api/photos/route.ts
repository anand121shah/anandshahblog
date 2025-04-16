import { NextResponse } from 'next/server'
import { getServerPhotos } from '@/lib/photos.server'

export async function GET() {
  try {
    const photos = await getServerPhotos()
    return NextResponse.json({ photos })
  } catch (error) {
    console.error('Error in photos API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    )
  }
} 