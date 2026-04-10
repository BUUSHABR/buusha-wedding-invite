'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #8B1A2B, #D4AF37, #FF6B2B)',
        }}
      />

      {/* Scroll down indicator (shows at top) */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        style={{ opacity: useSpring(scrollYProgress) ? undefined : undefined }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-[#D4AF37] text-xs mb-1 font-medium opacity-70">scroll</span>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
            <motion.circle
              cx="10" cy="8" r="3"
              fill="#D4AF37"
              animate={{ cy: [8, 18, 8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  )
}
