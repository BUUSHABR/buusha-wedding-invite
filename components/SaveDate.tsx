'use client'

import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRef, useEffect, useState } from 'react'

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false })

interface DateCardProps {
  emoji: string
  event: string
  eventTamil: string
  day: string
  date: string
  detail: string
  color: string
}

function DateCard({ emoji, event, eventTamil, day, date, detail, color }: DateCardProps) {
  return (
    <motion.div
      className="relative flex-1 min-w-[260px] max-w-sm rounded-3xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.9)',
        boxShadow: `0 20px 60px rgba(139,26,43,0.15), 0 0 0 2px rgba(212,175,55,0.3)`,
      }}
      whileHover={{ y: -4, boxShadow: `0 24px 70px rgba(139,26,43,0.2)` }}
    >
      {/* Top colored header */}
      <div
        className="py-4 px-5 text-center"
        style={{ background: color }}
      >
        <span className="text-3xl">{emoji}</span>
        <p
          className="text-white font-bold text-lg mt-1"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {event}
        </p>
        <p className="text-white/80 text-xs" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
          {eventTamil}
        </p>
      </div>

      {/* Calendar body */}
      <div className="p-5 text-center">
        {/* Day */}
        <p className="text-[#C8972F] text-xs uppercase tracking-widest font-semibold mb-1">
          {day}
        </p>

        {/* Date number */}
        <motion.div
          className="text-6xl sm:text-7xl font-black leading-none my-3"
          style={{
            fontFamily: 'Playfair Display, serif',
            background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {date}
        </motion.div>

        {/* Month/Year */}
        <p
          className="font-semibold text-sm sm:text-base"
          style={{
            fontFamily: 'Poppins, sans-serif',
            color: '#8B1A2B',
          }}
        >
          June 2026
        </p>

        {/* Detail */}
        <div
          className="mt-3 py-2 px-4 rounded-xl text-sm"
          style={{
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
            color: '#C8972F',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {detail}
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: i === 2
                  ? 'linear-gradient(135deg, #8B1A2B, #D4AF37)'
                  : 'rgba(212,175,55,0.3)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
        }}
      />
    </motion.div>
  )
}

export default function SaveDate() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const update = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (isInView) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF8F0 0%, #FFE4C4 50%, #FFD4A8 100%)',
      }}
    >
      {/* Confetti */}
      {showConfetti && windowSize.width > 0 && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          colors={['#8B1A2B', '#D4AF37', '#FF6B2B', '#FFB3C6', '#F5D76E', '#C81C1C']}
          gravity={0.2}
        />
      )}

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url('/assets/kolam/kolam-green.jpg')`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <motion.div
            className="text-5xl mb-3"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            📅
          </motion.div>
          <h2
            className="text-2xl sm:text-4xl font-bold"
            style={{
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Save The Date
          </h2>
          <p className="text-[#C8972F] mt-1 text-sm" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
            தேதியை குறித்துக்கொள்ளுங்கள்
          </p>
          <div className="h-0.5 w-32 mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Date cards */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.25 }}
          >
            <DateCard
              emoji="💍"
              event="Engagement"
              eventTamil="நிச்சயதார்த்தம்"
              day="Wednesday"
              date="24"
              detail="🌆 Evening 6PM – 8PM"
              color="linear-gradient(135deg, #8B1A2B, #C81C1C)"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.25, type: 'spring', bounce: 0.25 }}
          >
            <DateCard
              emoji="💒"
              event="Wedding"
              eventTamil="திருமணம்"
              day="Thursday"
              date="25"
              detail="🌅 Morning 7:30AM – 9:30AM"
              color="linear-gradient(135deg, #A0850C, #D4AF37)"
            />
          </motion.div>
        </div>

        {/* Location pill */}
        <motion.div
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full"
          style={{
            background: 'rgba(139,26,43,0.08)',
            border: '1.5px solid rgba(139,26,43,0.2)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-xl">📍</span>
          <span
            className="text-[#8B1A2B] font-semibold text-sm sm:text-base"
            style={{ fontFamily: 'Poppins' }}
          >
            Sri Lakshmi Mall, Sattur
          </span>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-3 mt-6 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          {['🎊', '🎉', '💍', '🌸', '💒', '🎉', '🎊'].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
              style={{ display: 'inline-block' }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
