'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FloatingPetals from './FloatingPetals'

export default function TempleParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const skyY     = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const templeY  = useTransform(scrollYProgress, [0, 1], ['5%', '-8%'])
  const coupleY  = useTransform(scrollYProgress, [0, 1], ['8%', '-4%'])
  const textY    = useTransform(scrollYProgress, [0, 1], ['15px', '-15px'])
  const opacity  = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #FFE0A0 0%, #FFBB66 40%, #FF8C22 80%, #C85000 100%)' }}
    >
      {/* ── Layer 1: Sky with sun rays ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: skyY }}>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FFF4E0 0%, #FFD080 35%, #FF9040 70%, #C85000 100%)',
          }}
        />

        {/* Sun */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2">
          <motion.div
            className="relative w-28 h-28"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${i * 30}deg, transparent 38%, rgba(255,210,0,0.35) 50%, transparent 62%)`,
                }}
              />
            ))}
          </motion.div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full"
            style={{ background: 'radial-gradient(circle, #FFE566 0%, #FFB800 70%)' }}
          />
        </div>

        {/* Golden haze bands */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(200,80,0,0.3) 100%)',
          }}
        />

        {/* Clouds */}
        {[
          { x: '8%',  y: '9%',  scale: 1,    dur: 9 },
          { x: '62%', y: '13%', scale: 0.65, dur: 12 },
          { x: '32%', y: '5%',  scale: 0.8,  dur: 10 },
        ].map((c, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl opacity-30"
            style={{ left: c.x, top: c.y, scale: c.scale }}
            animate={{ x: [0, 25, 0] }}
            transition={{ duration: c.dur, repeat: Infinity }}
          >
            ☁️
          </motion.div>
        ))}
      </motion.div>

      {/* ── Layer 2: Temple — real photo fills the lower scene ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ y: templeY }}
      >
        {/* Real temple photo */}
        <img
          src="/assets/temple/temple-real.jpg"
          alt="Temple"
          className="w-full object-cover object-top"
          style={{
            maxHeight: '65vh',
            maskImage: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 20%, black 60%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 20%, black 60%)',
          }}
          onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
        />

        {/* Illustrated temple overlay — blended for depth */}
        <div
          className="absolute inset-0 flex justify-center items-end opacity-20"
          style={{ mixBlendMode: 'luminosity' }}
        >
          <img
            src="/assets/temple/temple-illustration.png"
            alt=""
            className="h-full max-h-[65vh] w-auto object-contain"
            onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        {/* Ground glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(200,80,0,0.5))',
          }}
        />
      </motion.div>

      {/* ── Layer 3: Couple standing before the temple ── */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex justify-center"
        style={{ y: coupleY }}
      >
        <img
          src="/assets/couple/couple-holding.png"
          alt="Buusha & Renuka"
          className="w-44 sm:w-60 object-contain"
          style={{
            filter: 'drop-shadow(0 -4px 30px rgba(255,160,40,0.6)) drop-shadow(0 8px 20px rgba(0,0,0,0.4))',
            maskImage: 'linear-gradient(180deg, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, black 60%, transparent 100%)',
          }}
          onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
        />
      </motion.div>

      {/* ── Floating petals ── */}
      <FloatingPetals count={18} />

      {/* ── Layer 4: Centered text — the emotional message ── */}
      <motion.div
        className="relative z-30 text-center px-6 pb-32 sm:pb-40"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Small label */}
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4"
            style={{ color: '#FFF4C2', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            ✦ After This Long Beautiful Journey ✦
          </motion.p>

          {/* Main heading */}
          <motion.h2
            className="text-3xl sm:text-5xl font-black leading-tight mb-3"
            style={{
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #FFF4C2, #FFD700, #FFF4C2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.5))',
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            With Your Blessings,
          </motion.h2>

          <motion.h2
            className="text-3xl sm:text-5xl font-black leading-tight mb-5"
            style={{
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #FFD700, #FF8C22, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.5))',
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            We Join Hands Forever
          </motion.h2>

          {/* Tamil line */}
          <motion.p
            className="text-sm sm:text-base font-semibold mb-5"
            style={{
              fontFamily: 'Noto Serif Tamil, serif',
              color: '#FFE8A0',
              textShadow: '0 2px 10px rgba(0,0,0,0.6)',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
          >
            உங்கள் ஆசியுடன் நாங்கள் ஒன்றாகிறோம் 🙏
          </motion.p>

          {/* Animated icons */}
          <motion.div
            className="flex justify-center gap-4 text-2xl sm:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
          >
            {['🌸', '🪔', '💍', '🪔', '🌸'].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
                style={{
                  display: 'inline-block',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
                }}
              >
                {e}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
