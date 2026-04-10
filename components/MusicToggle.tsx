'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const AUDIO_SRC = '/audio/alaipayuthey-20_DOsPItm0.mp3'
const START_SECONDS = 10

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [hasAudio, setHasAudio] = useState(false)
  const [attempted, setAttempted] = useState(false)

  useEffect(() => {
    fetch(AUDIO_SRC, { method: 'HEAD' })
      .then(r => { if (r.ok) setHasAudio(true) })
      .catch(() => {})
  }, [])

  // Try autoplay on first scroll or touch
  useEffect(() => {
    if (!hasAudio || attempted) return

    const tryAutoplay = async () => {
      if (attempted || !audioRef.current) return
      setAttempted(true)
      try {
        audioRef.current.currentTime = START_SECONDS
        await audioRef.current.play()
        setPlaying(true)
      } catch {
        // Autoplay blocked — user must tap button
      }
    }

    const onInteraction = () => {
      tryAutoplay()
      window.removeEventListener('scroll', onInteraction)
      window.removeEventListener('touchstart', onInteraction)
      window.removeEventListener('click', onInteraction)
    }

    // Small delay then try, also listen for any interaction
    const timer = setTimeout(tryAutoplay, 2000)
    window.addEventListener('scroll', onInteraction, { once: true })
    window.addEventListener('touchstart', onInteraction, { once: true })
    window.addEventListener('click', onInteraction, { once: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onInteraction)
      window.removeEventListener('touchstart', onInteraction)
      window.removeEventListener('click', onInteraction)
    }
  }, [hasAudio, attempted])

  const toggle = async () => {
    if (!audioRef.current) return
    try {
      if (playing) {
        audioRef.current.pause()
        setPlaying(false)
      } else {
        if (!attempted || audioRef.current.currentTime < START_SECONDS) {
          audioRef.current.currentTime = START_SECONDS
        }
        await audioRef.current.play()
        setPlaying(true)
        setAttempted(true)
      }
    } catch {
      // blocked
    }
  }

  if (!hasAudio) return null

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop />
      <motion.button
        onClick={toggle}
        className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
          border: '2px solid #D4AF37',
        }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
        title={playing ? 'Pause music' : 'Play Alaipayuthey 🎵'}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.span
              key="playing"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-xl"
            >
              🎵
            </motion.span>
          ) : (
            <motion.span
              key="paused"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-xl"
            >
              🔇
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when playing */}
        {playing && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* "Now playing" label — fades in briefly */}
      <AnimatePresence>
        {playing && (
          <motion.div
            className="fixed bottom-36 right-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(139,26,43,0.9)',
              color: '#F5D76E',
              fontFamily: 'Poppins',
              border: '1px solid rgba(212,175,55,0.4)',
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4 }}
          >
            🎶 Alaipayuthey
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
