'use client'

import { motion } from 'framer-motion'

const MILESTONES = [
  {
    icon: '🌟',
    title: 'Our Beginning',
    titleTamil: 'எங்கள் ஆரம்பம்',
    desc: 'Two hearts destined to meet 💫',
    side: 'left',
  },
  {
    icon: '🌸',
    title: 'Love Blossomed',
    titleTamil: 'காதல் மலர்ந்தது',
    desc: 'Every moment became a cherished memory',
    side: 'right',
  },
  {
    icon: '💍',
    title: 'Engagement',
    titleTamil: 'நிச்சயதார்த்தம்',
    desc: 'June 24, 2026 • Evening 6PM – 8PM',
    side: 'left',
  },
  {
    icon: '💒',
    title: 'The Wedding',
    titleTamil: 'திருமணம்',
    desc: 'June 25, 2026 • Morning 7:30AM – 9:30AM',
    side: 'right',
  },
]

export default function CoupleSection() {
  return (
    <section
      className="relative min-h-screen py-16 px-4 overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(160deg, #2D0A14 0%, #5C0A15 50%, #8B1A2B 100%)',
      }}
    >
      {/* Kolam pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url('/assets/kolam/kolam-green.jpg')`,
          backgroundSize: '220px',
          backgroundRepeat: 'repeat',
          filter: 'invert(1)',
        }}
      />

      {/* Twinkling stars */}
      {[5,15,25,35,45,55,65,75,85,92,10,30,50,70,80].map((x, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300 pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${[10,20,15,30,8,25,12,18,22,35,60,70,80,65,90][i]}%`,
            fontSize: `${[8,6,10,7,9,6,8,7,10,6,8,9,7,6,10][i]}px`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        >
          ✦
        </motion.div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto w-full">

        {/* Section heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">✦ Our Journey ✦</p>
          <h2
            className="text-2xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Buusha & Renuka
          </h2>
          <div className="h-0.5 w-24 mx-auto mt-3" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Three couple images — slide in from sides and bottom */}
        <div className="flex justify-center items-end gap-3 sm:gap-6 mb-12">
          <motion.img
            src="/assets/doodle/couple-garland.png"
            alt="Couple with garlands"
            className="w-28 sm:w-40 object-contain rounded-2xl"
            style={{
              filter: 'drop-shadow(0 12px 32px rgba(212,175,55,0.5))',
              animation: 'bounceGentle 4s ease-in-out infinite',
            }}
            onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1, type: 'spring', bounce: 0.3 }}
          />
          {/* Center — couple holding hands, slightly larger */}
          <motion.img
            src="/assets/couple/couple-holding.png"
            alt="Buusha & Renuka"
            className="w-36 sm:w-52 object-contain rounded-2xl"
            style={{
              filter: 'drop-shadow(0 16px 40px rgba(139,26,43,0.4))',
              animation: 'bounceGentle 4s ease-in-out infinite 0.3s',
            }}
            onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2, type: 'spring', bounce: 0.3 }}
          />
          <motion.img
            src="/assets/doodle/couple-poses.png"
            alt="Couple waving"
            className="w-28 sm:w-40 object-contain rounded-2xl"
            style={{
              filter: 'drop-shadow(0 12px 32px rgba(212,175,55,0.5))',
              animation: 'bounceGentle 4s ease-in-out infinite 0.6s',
            }}
            onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
            initial={{ x: 70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.3, type: 'spring', bounce: 0.3 }}
          />
        </div>

        {/* Journey timeline */}
        <div className="relative px-2 sm:px-8">
          {/* Vertical center line — desktop only */}
          <div
            className="absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2 hidden sm:block"
            style={{ background: 'linear-gradient(180deg, transparent, #D4AF37 15%, #D4AF37 85%, transparent)' }}
          />

          <div className="flex flex-col gap-10">
            {MILESTONES.map((step, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-4 sm:gap-6 ${step.side === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-row`}
                initial={{ opacity: 0, x: step.side === 'left' ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Text */}
                <div className={`flex-1 ${step.side === 'right' ? 'sm:text-right' : 'sm:text-left'} text-left`}>
                  <p
                    className="text-white font-bold text-base sm:text-xl leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-[#D4AF37] text-xs mt-0.5"
                    style={{ fontFamily: 'Noto Serif Tamil, serif' }}
                  >
                    {step.titleTamil}
                  </p>
                  <p
                    className="text-white/60 text-sm mt-1"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Center icon bubble */}
                <motion.div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl z-10"
                  style={{
                    background: 'linear-gradient(135deg, #8B1A2B, #D4AF37)',
                    boxShadow: '0 0 24px rgba(212,175,55,0.45)',
                  }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                >
                  {step.icon}
                </motion.div>

                {/* Spacer — desktop alternating layout */}
                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Love quote */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
