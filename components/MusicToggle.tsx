'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [hasAudio, setHasAudio] = useState(false)

  useEffect(() => {
    // Check if audio file exists
    fetch('/audio/wedding-bg.mp3', { method: 'HEAD' })
      .then(r => { if (r.ok) setHasAudio(true) })
      .catch(() => {})
  }, [])

  const toggle = async () => {
    if (!audioRef.current) return
    try {
      if (playing) {
        audioRef.current.pause()
        setPlaying(false)
      } else {
        await audioRef.current.play()
        setPlaying(true)
      }
    } catch {
      // autoplay blocked
    }
  }

  if (!hasAudio) return null

  return (
    <>
      <audio ref={audioRef} src="/audio/wedding-bg.mp3" loop />
      <motion.button
        onClick={toggle}
        className="fixed bottom-20 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
          border: '2px solid #D4AF37',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.5 }}
        title={playing ? 'Pause music' : 'Play music'}
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
        {playing && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>
    </>
  )
}
