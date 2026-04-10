'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import LoadingScreen from './LoadingScreen'
import ScrollIndicator from './ScrollIndicator'
import MusicToggle from './MusicToggle'
import Greeting from './Greeting'
import FunnyMessage from './FunnyMessage'
import TempleParallax from './TempleParallax'
import WeddingStage from './WeddingStage'
import InviteMessage from './InviteMessage'
import CoupleSection from './CoupleSection'
import SaveDate from './SaveDate'
import LocationQR from './LocationQR'
import FinalScene from './FinalScene'

export default function MainContent() {
  const params = useSearchParams()
  const guestName = params.get('name') || params.get('guest') || ''
  const guestMessage = params.get('message') || params.get('msg') || ''
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* Main app — fades in after loading */}
      {loaded && (
        <>
          <ScrollIndicator />
          <MusicToggle />

          <main>
            {/* 1. Greeting */}
            <Greeting guestName={guestName} guestMessage={guestMessage} />

            {/* 2. Funny Tanglish Message */}
            <FunnyMessage />

            {/* 3. Temple Parallax */}
            <TempleParallax />

            {/* 4. Wedding Stage — Names & Family */}
            <WeddingStage />

            {/* 5. Emotional Invite Message */}
            <InviteMessage />

            {/* 6. Couple Photos & Doodle */}
            <CoupleSection />

            {/* 7. Save The Date */}
            <SaveDate />

            {/* 8. Location + QR Code */}
            <LocationQR />

            {/* 9. Final Grand Scene */}
            <FinalScene />
          </main>
        </>
      )}
    </>
  )
}
