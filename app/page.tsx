import { Suspense } from 'react'
import MainContent from '@/components/MainContent'

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
          <div className="text-center">
            <div className="text-4xl mb-4 animate-bounce">🔔</div>
            <p className="text-[#8B1A2B] font-semibold" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
              வணக்கம்...
            </p>
          </div>
        </div>
      }
    >
      <MainContent />
    </Suspense>
  )
}
