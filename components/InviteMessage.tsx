'use client'

import { motion } from 'framer-motion'

const LINES = [
  { text: 'Ungaloda presence dhaan', tamil: 'உங்களது வருகை தான்' },
  { text: 'enga kalyanathuku mukkiyam ❤️', tamil: 'எங்கள் திருமணத்திற்கு முக்கியம்' },
  { text: 'Neenga varanum...', tamil: 'நீங்கள் வர வேண்டும்...' },
  { text: 'kandippa varanum…', tamil: 'கண்டிப்பாக வர வேண்டும்…' },
  { text: 'Ungala kaathukittu irukkom 🙏', tamil: 'உங்களை எதிர்பார்த்திருக்கிறோம்' },
]

export default function InviteMessage() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF8F0 0%, #FFF0E0 100%)',
      }}
    >
      {/* Radha Krishna background image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/assets/backgrounds/radha-krishna.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Floating hearts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="relative z-10 max-w-xl mx-auto w-full text-center">
        {/* Decorative top */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-5xl">💌</span>
        </motion.div>

        {/* Main card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(212,175,55,0.3)',
            boxShadow: '0 20px 60px rgba(139,26,43,0.15)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top stripe */}
          <div
            className="h-2"
            style={{ background: 'linear-gradient(90deg, #8B1A2B, #D4AF37, #8B1A2B)' }}
          />

          <div className="px-6 sm:px-10 py-8">
            {/* Heading */}
            <motion.h2
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#8B1A2B',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Heartfelt Invitation
            </motion.h2>

            {/* Animated lines */}
            <div className="space-y-4">
              {LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                >
                  <p
                    className="text-base sm:text-lg font-semibold text-[#8B1A2B] leading-snug"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {line.text}
                  </p>
                  <p
                    className="text-xs sm:text-sm text-[#C8972F] mt-0.5"
                    style={{ fontFamily: 'Noto Serif Tamil, serif' }}
                  >
                    {line.tamil}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              className="mt-8 pt-6 border-t border-[#D4AF37]/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-[#C8972F] text-sm mb-3" style={{ fontFamily: 'Poppins' }}>
                With love & warmth,
              </p>
              <p
                className="text-2xl font-bold"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  background: 'linear-gradient(135deg, #8B1A2B, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Buusha & Renuka
              </p>
              <div className="flex justify-center gap-2 mt-3">
                {['🙏', '❤️', '🌸', '❤️', '🙏'].map((e, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    style={{ display: 'inline-block' }}
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom stripe */}
          <div
            className="h-2"
            style={{ background: 'linear-gradient(90deg, #D4AF37, #8B1A2B, #D4AF37)' }}
          />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="mt-8 text-[#C8972F] italic text-sm sm:text-base"
          style={{ fontFamily: 'Noto Serif Tamil, serif' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          "இரு உள்ளங்கள் ஒன்றாகும் நேரம்..."
        </motion.blockquote>
      </div>
    </section>
  )
}
