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
      {/* Radha Krishna background — full soft overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/assets/backgrounds/radha-krishna.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Kolam pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url('/assets/kolam/kolam-green.jpg')`,
          backgroundSize: '180px',
          backgroundRepeat: 'repeat',
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
        {/* Doodle couple */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
        >
          <img
            src="/assets/doodle/couple-poses.png"
            alt="Couple waving"
            className="w-36 sm:w-48 object-contain"
            style={{
              filter: 'drop-shadow(0 8px 24px rgba(139,26,43,0.3))',
              animation: 'bounceGentle 4s ease-in-out infinite',
            }}
            onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-xl sm:text-2xl font-bold mb-8"
          style={{
            fontFamily: 'Playfair Display, serif',
            background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our Heartfelt Invitation
        </motion.h2>

        {/* Animated lines — alternating side slides */}
        <div className="space-y-5">
          {LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
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

        {/* Divider */}
        <div
          className="h-px w-40 mx-auto my-8"
          style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
        />

        {/* Signature */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
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
