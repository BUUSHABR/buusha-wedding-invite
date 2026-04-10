'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const MESSAGES = [
  { text: 'Idhu oru normal invite illa 😎', delay: 0, side: 'left' },
  { text: 'Idhu unga attendance compulsory invite 😍', delay: 0.4, side: 'right' },
  { text: 'Saapadu miss panna koodadhu! 🍛🔥', delay: 0.8, side: 'left' },
  { text: 'Neenga varala na enga heart break aagum 💔', delay: 1.2, side: 'right' },
  { text: 'So... Attendance mandatory! ✅', delay: 1.6, side: 'left' },
  { text: 'Saapadu free, fun free, love unlimited! 🥰', delay: 2.0, side: 'right' },
]

export default function FunnyMessage() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #2D0A14 0%, #5C0A15 40%, #8B1A2B 100%)',
      }}
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/assets/backgrounds/wedding-bg.jpg')`,
          backgroundSize: 'cover',
          filter: 'grayscale(1)',
        }}
      />

      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-16 opacity-30">
        <div className="flex gap-2 justify-center pt-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">✦</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-lg w-full mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl">😂</span>
          <h2
            className="text-xl sm:text-2xl font-bold text-[#F5D76E] mt-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Oru Important Announcement
          </h2>
          <div className="h-0.5 w-32 mx-auto mt-3" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Chat bubbles */}
        <div className="flex flex-col gap-4">
          {MESSAGES.map((msg, i) => (
            <motion.div
              key={i}
              className={`flex ${msg.side === 'right' ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, x: msg.side === 'right' ? 40 : -40, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: msg.delay * 0.5 }}
            >
              <div
                className={`max-w-[80%] sm:max-w-[75%] px-4 py-3 rounded-2xl shadow-lg relative ${
                  msg.side === 'right'
                    ? 'rounded-tr-sm'
                    : 'rounded-tl-sm'
                }`}
                style={{
                  background: msg.side === 'right'
                    ? 'linear-gradient(135deg, #D4AF37, #F5D76E)'
                    : 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(10px)',
                  border: msg.side === 'right'
                    ? 'none'
                    : '1px solid rgba(212,175,55,0.3)',
                }}
              >
                <p
                  className={`text-sm sm:text-base font-medium leading-relaxed ${
                    msg.side === 'right' ? 'text-[#3D1A0A]' : 'text-white'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {msg.text}
                </p>
                {/* Timestamp dot */}
                <div className={`text-xs mt-1 opacity-60 ${msg.side === 'right' ? 'text-[#5C0A15] text-right' : 'text-[#D4AF37]'}`}>
                  {['9:41', '9:42', '9:43', '9:44', '9:44', '9:45'][i]} ✓✓
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom fun fact */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className="inline-block px-6 py-4 rounded-2xl"
            style={{
              background: 'rgba(212,175,55,0.15)',
              border: '1px solid rgba(212,175,55,0.4)',
            }}
          >
            <p className="text-[#F5D76E] text-sm sm:text-base" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
              "கல்யாண சாப்பாடு miss panna
            </p>
            <p className="text-[#F5D76E] text-sm sm:text-base" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
              life la oru biiig mistake!" 🍛
            </p>
          </div>
        </motion.div>

        {/* Emoji rain */}
        <motion.div
          className="flex justify-center gap-4 mt-8 text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {['🎊', '🎉', '💒', '🎊', '🎉'].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              style={{ display: 'inline-block' }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-12 opacity-30">
        <div className="flex gap-2 justify-center pb-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">✦</span>
          ))}
        </div>
      </div>
    </section>
  )
}
