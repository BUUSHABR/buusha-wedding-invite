'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FloatingPetals from './FloatingPetals'

export default function TempleParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const templeY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const flowerY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['20px', '-20px'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #FFD9A0 0%, #FFBB66 50%, #FF8C22 100%)' }}
    >
      {/* Sky / Background layer */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: skyY }}
      >
        {/* Gradient sky */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FFF4E0 0%, #FFD080 40%, #FF9040 80%, #FF6820 100%)',
          }}
        />
        {/* Sun rays */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <motion.div
            className="relative w-32 h-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${i * 30}deg, transparent 40%, rgba(255,200,0,0.3) 50%, transparent 60%)`,
                }}
              />
            ))}
          </motion.div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
            style={{ background: 'radial-gradient(circle, #FFE066 0%, #FFB800 70%)' }}
          />
        </div>

        {/* Clouds */}
        {[
          { x: '10%', y: '8%', scale: 1 },
          { x: '65%', y: '12%', scale: 0.7 },
          { x: '35%', y: '5%', scale: 0.85 },
        ].map((cloud, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl opacity-40"
            style={{ left: cloud.x, top: cloud.y, scale: cloud.scale }}
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity }}
          >
            ☁️
          </motion.div>
        ))}
      </motion.div>

      {/* Temple image layer */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 flex justify-center"
        style={{ y: templeY }}
      >
        {/* Try to load temple image, fallback to CSS temple */}
        <div className="relative w-full max-w-2xl mx-auto">
          <img
            src="/assets/temple/temple-real.jpg"
            alt="Temple"
            className="w-full object-cover object-bottom rounded-t-3xl"
            style={{ maxHeight: '70vh', objectPosition: 'top' }}
            onError={e => {
              ;(e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          {/* CSS Temple fallback */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none">
            <SVGTemple />
          </div>
        </div>
      </motion.div>

      {/* Foreground flowers */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{ y: flowerY }}
      >
        <div className="flex justify-between px-4 pb-2">
          {/* Left banana tree */}
          <div className="text-6xl sm:text-8xl opacity-80 select-none">🌿</div>
          {/* Right banana tree */}
          <div className="text-6xl sm:text-8xl opacity-80 select-none">🌿</div>
        </div>
        {/* Flower bottom strip */}
        <div
          className="h-12 sm:h-16"
          style={{
            background: 'linear-gradient(90deg, #FF6B8A, #FFB3C6, #FF8FAB, #FFB3C6, #FF6B8A)',
            opacity: 0.3,
          }}
        />
      </motion.div>

      {/* Floating petals */}
      <FloatingPetals count={20} />

      {/* Center text overlay */}
      <motion.div
        className="relative z-30 text-center px-6"
        style={{ y: textY, opacity }}
      >
        <motion.div
          className="inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="px-8 py-6 rounded-2xl"
            style={{
              background: 'rgba(255,248,240,0.85)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(212,175,55,0.5)',
              boxShadow: '0 8px 32px rgba(139,26,43,0.2)',
            }}
          >
            <p className="text-[#8B1A2B] text-sm uppercase tracking-widest mb-2 font-semibold">
              ✦ Together Forever ✦
            </p>
            <h2
              className="text-2xl sm:text-4xl font-bold"
              style={{
                fontFamily: 'Playfair Display, serif',
                background: 'linear-gradient(135deg, #8B1A2B, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              A Sacred Union
            </h2>
            <p className="text-[#C8972F] mt-2 text-sm sm:text-base" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
              இறைவன் ஆசியுடன் திருமணம்
            </p>
            <div className="flex justify-center gap-2 mt-3 text-xl">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌸</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🪔</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function SVGTemple() {
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md opacity-20" fill="none">
      {/* Gopuram silhouette */}
      <polygon points="200,20 230,80 260,100 270,200 130,200 140,100 170,80" fill="#8B1A2B" />
      <polygon points="200,40 220,90 240,110 245,200 155,200 160,110 180,90" fill="#C81C1C" />
      <rect x="145" y="200" width="110" height="80" fill="#8B1A2B" />
      <rect x="165" y="220" width="30" height="60" fill="#5C0A15" />
      <rect x="205" y="220" width="30" height="60" fill="#5C0A15" />
      {/* Steps */}
      <rect x="100" y="270" width="200" height="8" fill="#D4AF37" opacity="0.5" />
      <rect x="120" y="262" width="160" height="8" fill="#D4AF37" opacity="0.4" />
      {/* Kalash */}
      <ellipse cx="200" cy="24" rx="8" ry="12" fill="#D4AF37" />
      <line x1="200" y1="12" x2="200" y2="5" stroke="#D4AF37" strokeWidth="2" />
    </svg>
  )
}
