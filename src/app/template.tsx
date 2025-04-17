'use client'

import ParticleBackground from '@/components/shared/ParticleBackground'
import Footer from '@/components/shared/Footer'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-950 to-black text-gray-100">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
} 