'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setShow(false)
            setTimeout(onComplete, 800)
          }, 400)
          return 100
        }
        return prev + 1.5
      })
    }, 40)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(160deg, #FFF8F0 0%, #FFE4C4 50%, #FFD4A8 100%)' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Kolam background texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url('/assets/kolam/kolam-green.jpg')`,
              backgroundSize: '200px',
              backgroundRepeat: 'repeat',
            }}
          />
          {/* Animated Kolam SVG */}
          <div className="relative mb-6">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              {/* Outer circle */}
              <motion.circle
                cx="100" cy="100" r="90"
                stroke="#D4AF37" strokeWidth="1.5"
                strokeDasharray="565" initial={{ strokeDashoffset: 565 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              {/* Middle circle */}
              <motion.circle
                cx="100" cy="100" r="70"
                stroke="#8B1A2B" strokeWidth="1.5"
                strokeDasharray="440" initial={{ strokeDashoffset: 440 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
              />
              {/* Inner circle */}
              <motion.circle
                cx="100" cy="100" r="50"
                stroke="#D4AF37" strokeWidth="1.5"
                strokeDasharray="314" initial={{ strokeDashoffset: 314 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
              />
              {/* Star of David / kolam pattern */}
              <motion.polygon
                points="100,20 118,75 180,75 130,110 150,165 100,130 50,165 70,110 20,75 82,75"
                fill="none" stroke="#C8972F" strokeWidth="1.5"
                strokeDasharray="500" initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2.5, delay: 0.8, ease: 'easeInOut' }}
              />
              {/* Petal shapes */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.ellipse
                  key={angle}
                  cx={100 + 35 * Math.cos((angle * Math.PI) / 180)}
                  cy={100 + 35 * Math.sin((angle * Math.PI) / 180)}
                  rx="8" ry="14"
                  fill="rgba(212,175,55,0.2)"
                  stroke="#D4AF37" strokeWidth="1"
                  transform={`rotate(${angle}, ${100 + 35 * Math.cos((angle * Math.PI) / 180)}, ${100 + 35 * Math.sin((angle * Math.PI) / 180)})`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
                />
              ))}
              {/* Center dot */}
              <motion.circle
                cx="100" cy="100" r="8"
                fill="#8B1A2B"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, duration: 0.4, type: 'spring' }}
              />
            </svg>
          </div>

          {/* Names */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h1
              className="text-2xl sm:text-3xl font-bold"
              style={{
                fontFamily: 'Playfair Display, serif',
                background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Buusha & Renuka
            </h1>
            <p className="text-sm text-[#C8972F] mt-1" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
              திருமண அழைப்பிதழ்
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-48 sm:w-56 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-1.5 bg-[#FFE4C4] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #8B1A2B, #D4AF37)',
                  width: `${progress}%`,
                  transition: 'width 0.05s linear',
                }}
              />
            </div>
            <p className="text-xs text-[#C8972F] text-center mt-2">
              {progress < 100 ? 'Loading...' : 'Ready! ✨'}
            </p>
          </motion.div>

          {/* Decorative bells */}
          <motion.div
            className="absolute bottom-10 flex gap-6 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {['🔔', '🌸', '🪔', '🌸', '🔔'].map((emoji, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  animation: `bounceGentle ${1.5 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {emoji}
              </span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
