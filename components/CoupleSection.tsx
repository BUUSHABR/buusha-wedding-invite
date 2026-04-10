'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const REAL_PHOTOS = [
  { src: '/assets/couple/photo1.jpg', alt: 'Buusha & Renuka in metro', caption: 'Our first journey together 🚇' },
  { src: '/assets/couple/photo2.jpg', alt: 'Together at the airport', caption: 'Every destination is better with you ✈️' },
  { src: '/assets/couple/photo3.jpg', alt: 'Outdoor together', caption: 'Made for each other 💕' },
]

const DOODLE_POSES = [
  '/assets/doodle/couple-poses.png',
  '/assets/doodle/couple-garland.png',
]

export default function CoupleSection() {
  const [activePhoto, setActivePhoto] = useState(0)

  return (
    <section
      className="relative min-h-screen py-16 px-4 overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(160deg, #2D0A14 0%, #5C0A15 50%, #8B1A2B 100%)',
      }}
    >
      {/* Stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 10 + 6}px`,
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
        >
          ✦
        </motion.div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">✦ Our Story ✦</p>
          <h2
            className="text-2xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Couple
          </h2>
          <div className="h-0.5 w-24 mx-auto mt-3" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Doodle couple (floating) */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          <div
            className="relative p-3 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '2px solid rgba(212,175,55,0.4)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <img
              src="/assets/doodle/couple-poses.png"
              alt="Couple cartoon poses"
              className="w-64 sm:w-80 object-contain rounded-xl"
              style={{ animation: 'bounceGentle 4s ease-in-out infinite' }}
              onError={e => {
                const el = e.target as HTMLImageElement
                el.style.display = 'none'
                // Show fallback emoji art
                const fallback = el.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            {/* Emoji fallback */}
            <div
              className="hidden w-64 sm:w-80 h-48 items-center justify-center text-center"
              style={{ animation: 'bounceGentle 4s ease-in-out infinite' }}
            >
              <div>
                <p className="text-6xl">💑</p>
                <p className="text-[#D4AF37] mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Buusha & Renuka
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real photos slider */}
        <div className="mt-4">
          <motion.p
            className="text-center text-[#D4AF37] text-sm mb-4 opacity-70 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ✦ Our Moments ✦
          </motion.p>

          {/* Photo display */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden mx-auto"
              style={{
                maxWidth: '320px',
                aspectRatio: '3/4',
                boxShadow: '0 16px 48px rgba(0,0,0,0.4), 0 0 0 3px rgba(212,175,55,0.4)',
              }}
            >
              <img
                key={activePhoto}
                src={REAL_PHOTOS[activePhoto].src}
                alt={REAL_PHOTOS[activePhoto].alt}
                className="w-full h-full object-cover"
                onError={e => {
                  ;(e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='400' viewBox='0 0 320 400'%3E%3Crect width='320' height='400' fill='%23FFF8F0'/%3E%3Ctext x='160' y='200' text-anchor='middle' fill='%238B1A2B' font-size='48'%3E💑%3C/text%3E%3C/svg%3E"
                }}
              />
              {/* Caption overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}
              >
                <p className="text-white text-sm font-medium text-center">
                  {REAL_PHOTOS[activePhoto].caption}
                </p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-4">
              {REAL_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === activePhoto ? '24px' : '8px',
                    height: '8px',
                    background: i === activePhoto
                      ? 'linear-gradient(90deg, #8B1A2B, #D4AF37)'
                      : 'rgba(212,175,55,0.4)',
                  }}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex justify-center gap-4 mt-3">
              <motion.button
                onClick={() => setActivePhoto(p => (p - 1 + REAL_PHOTOS.length) % REAL_PHOTOS.length)}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(212,175,55,0.2)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: '#F5D76E',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Prev
              </motion.button>
              <motion.button
                onClick={() => setActivePhoto(p => (p + 1) % REAL_PHOTOS.length)}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(212,175,55,0.2)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: '#F5D76E',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Love quote */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p
            className="text-[#F5D76E] text-base sm:text-lg italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "Two souls, one destiny 🌟"
          </p>
          <p className="text-[#C8972F] text-sm mt-1" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
            இரு உள்ளங்கள், ஒரே ஊழ்வினை
          </p>
        </motion.div>
      </div>
    </section>
  )
}
