'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const AUDIO_SRC = '/audio/alaipayuthey-20_DOsPItm0.mp3'
const START_SECONDS = 10

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [hasAudio, setHasAudio] = useState(false)
  const playingRef = useRef(false)

  useEffect(() => {
    fetch(AUDIO_SRC, { method: 'HEAD' })
      .then(r => { if (r.ok) setHasAudio(true) })
      .catch(() => {})
  }, [])

  // Auto-start on first user interaction — persists until music actually plays
  useEffect(() => {
    if (!hasAudio) return

    const tryPlay = async () => {
      if (playingRef.current || !audioRef.current) return
      try {
        audioRef.current.currentTime = START_SECONDS
        await audioRef.current.play()
        playingRef.current = true
        setPlaying(true)
        removeListeners()
      } catch {
        // Still blocked — keep listeners, retry on next interaction
      }
    }

    const removeListeners = () => {
      document.removeEventListener('scroll', tryPlay)
      document.removeEventListener('touchstart', tryPlay)
      document.removeEventListener('click', tryPlay)
      document.removeEventListener('keydown', tryPlay)
    }

    // Immediate attempt (works when browser allows autoplay)
    tryPlay()

    // Keep listening until it starts — fires on scroll, tap, or any click
    document.addEventListener('scroll', tryPlay, { passive: true })
    document.addEventListener('touchstart', tryPlay, { passive: true })
    document.addEventListener('click', tryPlay)
    document.addEventListener('keydown', tryPlay)

    return removeListeners
  }, [hasAudio])

  const toggle = async () => {
    if (!audioRef.current) return
    try {
      if (playing) {
        audioRef.current.pause()
        playingRef.current = false
        setPlaying(false)
      } else {
        if (audioRef.current.currentTime < START_SECONDS) {
          audioRef.current.currentTime = START_SECONDS
        }
        await audioRef.current.play()
        playingRef.current = true
        setPlaying(true)
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
            <motion.span key="playing" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-xl">
              🎵
            </motion.span>
          ) : (
            <motion.span key="paused" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-xl">
              🔇
            </motion.span>
          )}
        </AnimatePresence>

        {playing && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>

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
