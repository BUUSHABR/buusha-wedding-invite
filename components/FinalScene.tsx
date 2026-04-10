'use client'

import { motion } from 'framer-motion'
import FloatingPetals from './FloatingPetals'

const FINAL_MESSAGES = [
  {
    tamil: 'உங்கள் வருகையில் எங்கள் சந்தோஷம் முழுமை பெறும்',
    english: 'Ungal varugaiyil engal santhosham muzhumai perum ❤️',
  },
  {
    tamil: 'அன்போடு வருக, நன்றியோடு வாழ்த்துக',
    english: 'Come with love, leave us with your blessings 🙏',
  },
]

export default function FinalScene() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 px-4"
      style={{
        background: 'linear-gradient(160deg, #FFF8F0 0%, #FFE4C4 30%, #FFD4A8 60%, #FFBB66 100%)',
      }}
    >
      {/* Radha Krishna soft background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/assets/backgrounds/radha-krishna.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
        }}
      />

      {/* Kolam overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url('/assets/kolam/kolam-green.jpg')`,
          backgroundSize: '280px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Floating petals */}
      <FloatingPetals count={25} />

      {/* Left banana tree */}
      <motion.div
        className="absolute bottom-0 left-0 pointer-events-none"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src="/assets/banana/banana-tree.png"
          alt=""
          className="h-64 sm:h-80 w-auto object-contain"
          style={{ opacity: 0.7 }}
          onError={e => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      </motion.div>

      {/* Right banana tree */}
      <motion.div
        className="absolute bottom-0 right-0 pointer-events-none"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ transform: 'scaleX(-1)' }}
      >
        <img
          src="/assets/banana/banana-tree.png"
          alt=""
          className="h-64 sm:h-80 w-auto object-contain"
          style={{ opacity: 0.7, transform: 'scaleX(-1)' }}
          onError={e => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      </motion.div>

      {/* Top marigold decoration */}
      <motion.div
        className="absolute top-0 left-0 right-0 overflow-hidden"
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/assets/flowers/marigold-hanging.png"
          alt=""
          className="w-full"
          style={{ maxHeight: '130px', objectFit: 'cover', objectPosition: 'top' }}
          onError={e => {
            const el = e.target as HTMLImageElement
            el.style.display = 'none'
          }}
        />
        {/* CSS fallback marigold */}
        <div className="flex justify-around px-4 pt-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-0.5"
              style={{ animation: `ropeSwing ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
            >
              {Array.from({ length: 4 }).map((_, j) => (
                <span key={j} className="text-yellow-500 text-xs">🌼</span>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom kolam art */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <img
          src="/assets/kolam/kolam-green.jpg"
          alt=""
          className="w-full"
          style={{ maxHeight: '80px', objectFit: 'cover', objectPosition: 'bottom', opacity: 0.15 }}
          onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto w-full text-center">
        {/* Couple holding hands — romantic centerpiece */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: 'spring', bounce: 0.25 }}
        >
          <img
            src="/assets/couple/couple-holding.png"
            alt="Buusha & Renuka"
            className="w-52 sm:w-64 object-contain rounded-3xl"
            style={{
              filter: 'drop-shadow(0 16px 40px rgba(139,26,43,0.35))',
              animation: 'bounceGentle 5s ease-in-out infinite',
            }}
            onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
          />
        </motion.div>

        {/* Om */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-5xl">🕉️</span>
        </motion.div>

        {/* Final Tamil message */}
        {FINAL_MESSAGES.map((msg, i) => (
          <motion.div
            key={i}
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
          >
            <p
              className="text-lg sm:text-xl font-bold text-[#8B1A2B] leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {msg.english}
            </p>
            <p
              className="text-sm sm:text-base text-[#C8972F] mt-1"
              style={{ fontFamily: 'Noto Serif Tamil, serif' }}
            >
              {msg.tamil}
            </p>
          </motion.div>
        ))}

        {/* Grand title — open flowing style */}
        <motion.div
          className="my-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-[#C8972F] text-xs uppercase tracking-widest mb-4">
            ✦ Sri Murugan Blessings ✦
          </p>

          <motion.h2
            className="text-4xl sm:text-6xl font-black"
            style={{
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #8B1A2B, #D4AF37, #8B1A2B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'glow 2s ease-in-out infinite alternate',
            }}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Buusha
          </motion.h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>

          <motion.h2
            className="text-4xl sm:text-6xl font-black"
            style={{
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #8B1A2B, #D4AF37, #8B1A2B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Renuka
          </motion.h2>

          <div
            className="h-px w-48 mx-auto my-5"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />

          <motion.p
            className="text-[#8B1A2B] font-semibold text-sm sm:text-base"
            style={{ fontFamily: 'Poppins' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            📅 June 24–25, 2026
          </motion.p>
          <motion.p
            className="text-[#C8972F] text-sm mt-1"
            style={{ fontFamily: 'Poppins' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            📍 Sri Lakshmi Mall, Sattur
          </motion.p>
        </motion.div>

        {/* Final emojis */}
        <motion.div
          className="flex justify-center gap-3 text-2xl sm:text-3xl mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {['🌸', '🪔', '🕉️', '💍', '🕉️', '🪔', '🌸'].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              style={{ display: 'inline-block' }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          className="mt-10 text-xs text-[#C8972F] opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          style={{ fontFamily: 'Poppins' }}
        >
          Made with ❤️ for Buusha & Renuka's Special Day
        </motion.p>
      </div>
    </section>
  )
}
