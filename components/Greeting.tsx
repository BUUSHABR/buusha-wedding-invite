'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface GreetingProps {
  guestName: string
}

const STARS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  delay: Math.random() * 3,
}))

export default function Greeting({ guestName }: GreetingProps) {
  const [stars] = useState(STARS)

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF8F0 0%, #FFE4C4 40%, #FFD4A8 70%, #FFB866 100%)',
      }}
    >
      {/* Decorative background mandala */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/assets/backgrounds/wedding-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'sepia(1)',
        }}
      />

      {/* Animated stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + star.delay,
            repeat: Infinity,
            delay: star.delay,
          }}
        >
          <span style={{ fontSize: `${star.size}px`, color: '#D4AF37' }}>✦</span>
        </motion.div>
      ))}

      {/* Top decoration */}
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

        {/* Guest name */}
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
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#3D1A0A',
              }}
            >
              {guestName || 'Dear Guest'}
            </span>
          </div>
        </motion.div>

        {/* Special message */}
        <motion.p
          className="text-lg sm:text-xl text-[#8B1A2B] font-medium mt-4 leading-relaxed"
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

        {/* Decorative hearts */}
        <motion.div
          className="flex justify-center gap-3 mt-8 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {['🌸', '❤️', '🌼', '❤️', '🌸'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              style={{ display: 'inline-block' }}
            >
              {emoji}
            </motion.span>
          ))}
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

      {/* Corner decorations */}
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
