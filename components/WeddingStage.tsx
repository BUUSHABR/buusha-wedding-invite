'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
}

export default function WeddingStage() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF8F0 0%, #FFF0DC 50%, #FFE4C4 100%)',
      }}
    >
      {/* Background kolam pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('/assets/kolam/kolam-green.jpg')`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
          filter: 'sepia(1) hue-rotate(300deg)',
        }}
      />

      {/* Top garland decoration */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex justify-center overflow-hidden"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/assets/flowers/garland-red-white.png"
          alt="Garland"
          className="w-full max-w-2xl"
          style={{ maxHeight: '120px', objectFit: 'contain' }}
          onError={e => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        {/* CSS fallback garland */}
        <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center">
          <div className="flex gap-1 text-2xl opacity-50">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} style={{ color: i % 2 === 0 ? '#FF6B8A' : '#FFFFFF', fontSize: '16px' }}>🌸</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto w-full">

        {/* Couple cartoon */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img
              src="/assets/doodle/couple-garland.png"
              alt="Couple"
              className="w-48 sm:w-64 object-contain"
              style={{
                filter: 'drop-shadow(0 8px 24px rgba(139,26,43,0.2))',
                animation: 'bounceGentle 3s ease-in-out infinite',
              }}
              onError={e => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
        </motion.div>

        {/* Invitation text */}
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-widest text-[#C8972F] mb-3 font-semibold"
          custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          ✦ With Blessings of God ✦
        </motion.p>

        {/* Bride name */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 7vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}
        >
          Buusha Gengavarajan
        </motion.h1>

        {/* Heart divider */}
        <motion.div
          custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="my-3 flex items-center justify-center gap-3"
        >
          <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
          <motion.span
            className="text-3xl sm:text-4xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ❤️
          </motion.span>
          <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Groom name */}
        <motion.h1
          custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 7vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}
        >
          Renuka
        </motion.h1>

        {/* Divider */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="my-6"
        >
          <div className="h-0.5 w-full max-w-sm mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
          <div className="flex justify-center gap-2 my-2 text-lg">
            <span>🌸</span><span>🌺</span><span>🌸</span>
          </div>
          <div className="h-0.5 w-full max-w-sm mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Family details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-2">
          {/* Groom's family */}
          <motion.div
            className="text-center py-4"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <p className="text-xs text-[#C8972F] uppercase tracking-wider mb-2 font-semibold">Son of</p>
            <p className="text-[#8B1A2B] font-semibold text-sm sm:text-base" style={{ fontFamily: 'Poppins' }}>
              Mrs. Padmavathi
            </p>
            <p className="text-[#D4AF37] text-xs my-1">&</p>
            <p className="text-[#8B1A2B] font-semibold text-sm sm:text-base" style={{ fontFamily: 'Poppins' }}>
              Mr. Kaliraj
            </p>
          </motion.div>

          {/* Bride's family */}
          <motion.div
            className="text-center py-4"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <p className="text-xs text-[#C8972F] uppercase tracking-wider mb-2 font-semibold">Daughter of</p>
            <p className="text-[#8B1A2B] font-semibold text-sm sm:text-base" style={{ fontFamily: 'Poppins' }}>
              Mrs. Ramadevi
            </p>
            <p className="text-[#D4AF37] text-xs my-1">&</p>
            <p className="text-[#8B1A2B] font-semibold text-sm sm:text-base" style={{ fontFamily: 'Poppins' }}>
              Mr. Sivakumar
            </p>
          </motion.div>
        </div>

        {/* Tamil blessing */}
        <motion.p
          custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-6 text-[#C8972F] text-sm sm:text-base"
          style={{ fontFamily: 'Noto Serif Tamil, serif' }}
        >
          இறைவன் அருளால் திருமணம் நடைபெறுகிறது 🙏
        </motion.p>
      </div>

      {/* Bottom garland */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/assets/flowers/marigold-hanging.png"
          alt="Flowers"
          className="w-full max-w-2xl"
          style={{ maxHeight: '100px', objectFit: 'contain' }}
          onError={e => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      </motion.div>

      {/* Banana trees sides */}
      <div className="absolute bottom-0 left-0 opacity-40 pointer-events-none hidden sm:block">
        <img
          src="/assets/banana/banana-tree.png"
          alt=""
          className="h-56 w-auto"
          onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>
      <div className="absolute bottom-0 right-0 opacity-40 pointer-events-none hidden sm:block">
        <img
          src="/assets/banana/banana-tree.png"
          alt=""
          className="h-56 w-auto"
          style={{ transform: 'scaleX(-1)' }}
          onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      {/* Temple illustration corner */}
      <div className="absolute top-0 right-0 opacity-[0.07] pointer-events-none w-40 sm:w-56">
        <img
          src="/assets/temple/temple-illustration.png"
          alt=""
          className="w-full h-auto object-contain"
          onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>
    </section>
  )
}
