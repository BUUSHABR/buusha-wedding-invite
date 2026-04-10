'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface GreetingProps {
  guestName: string
}

// Add special personal messages here — key is the URL ?name= value (case-insensitive)
const SPECIAL_MESSAGES: Record<string, string> = {
  'Suganya':    'My dear Periya Akka ❤️',
  'Amma':       'Ungal aasiyil nangal vazhvom 🙏',
  'Appa':       'Ungal aasiyil nangal vazhvom 🙏',
  'Renuka':     'My dearest bride-to-be 💍',
  // Add more guests below:
  // 'GuestName': 'Your special message',
}

const STARS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i * 17 + 5) % 100,
  y: (i * 13 + 8) % 100,
  size: (i % 4) + 3,
  delay: (i % 6) * 0.5,
}))

export default function Greeting({ guestName }: GreetingProps) {
  const [stars] = useState(STARS)

  // Case-insensitive lookup for special message
  const specialMessage = Object.entries(SPECIAL_MESSAGES).find(
    ([key]) => key.toLowerCase() === guestName.toLowerCase().trim()
  )?.[1] ?? null

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF8F0 0%, #FFE4C4 40%, #FFD4A8 70%, #FFB866 100%)',
      }}
    >
      {/* Kolam wall background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url('/assets/kolam/kolam-wall.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + star.delay, repeat: Infinity, delay: star.delay }}
        >
          <span style={{ fontSize: `${star.size}px`, color: '#D4AF37' }}>✦</span>
        </motion.div>
      ))}

      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2"
        style={{ background: 'linear-gradient(90deg, #8B1A2B, #D4AF37, #8B1A2B)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">

        {/* Om symbol */}
        <motion.div
          className="text-5xl sm:text-6xl mb-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        >
          🕉️
        </motion.div>

        {/* Tamil greeting */}
        <motion.h1
          className="text-3xl sm:text-5xl font-bold mb-2 leading-tight"
          style={{
            fontFamily: 'Noto Serif Tamil, serif',
            background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          வணக்கம் 🙏
        </motion.h1>

        {/* Guest name pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
          className="my-4"
        >
          <div
            className="inline-block px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #F5D76E)',
              boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
            }}
          >
            <span
              className="text-2xl sm:text-4xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#3D1A0A' }}
            >
              {guestName || 'Dear Guest'}
            </span>
          </div>
        </motion.div>

        {/* Special personal message — only shown if guest has an entry */}
        {specialMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.85, type: 'spring' }}
            className="mb-2"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-base sm:text-lg font-semibold"
              style={{
                fontFamily: 'Playfair Display, serif',
                background: 'linear-gradient(135deg, rgba(139,26,43,0.1), rgba(212,175,55,0.15))',
                border: '1.5px solid rgba(139,26,43,0.25)',
                color: '#8B1A2B',
              }}
            >
              {specialMessage}
            </span>
          </motion.div>
        )}

        {/* Invite message */}
        <motion.p
          className="text-lg sm:text-xl text-[#8B1A2B] font-medium mt-3 leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Ungalukaga oru special invite ❤️
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-[#C8972F] mt-2"
          style={{ fontFamily: 'Noto Serif Tamil, serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          உங்களுக்காக ஒரு சிறப்பு அழைப்பு
        </motion.p>

        {/* Couple waving — hero welcome image */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8, type: 'spring', bounce: 0.3 }}
        >
          <img
            src="/assets/doodle/couple-poses.png"
            alt="Buusha & Renuka welcoming you"
            className="w-52 sm:w-64 object-contain"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(139,26,43,0.2))',
              animation: 'bounceGentle 4s ease-in-out infinite',
            }}
            onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
          />
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          className="mt-10 text-xs text-[#C8972F] opacity-60 tracking-wider uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✦ Scroll down for the invite ✦
        </motion.p>
      </div>

      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{ background: 'linear-gradient(90deg, #D4AF37, #8B1A2B, #D4AF37)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Corner flower decorations */}
      {['top-4 left-4', 'top-4 right-4', 'bottom-8 left-4', 'bottom-8 right-4'].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} text-3xl`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.2 }}
        >
          🌸
        </motion.div>
      ))}
    </section>
  )
}
