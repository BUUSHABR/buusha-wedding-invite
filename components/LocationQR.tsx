'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const QRCodeSVG = dynamic(
  () => import('qrcode.react').then(m => m.QRCodeSVG),
  { ssr: false, loading: () => <div className="w-48 h-48 bg-[#FFF8F0] rounded-xl animate-pulse" /> }
)

const MAPS_URL = 'https://maps.app.goo.gl/amWj3kdNht8N6DnM6'

export default function LocationQR() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #5C0A15 0%, #8B1A2B 50%, #C81C1C 100%)',
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url('/assets/kolam/kolam-green.jpg')`,
          backgroundSize: '250px',
          backgroundRepeat: 'repeat',
          filter: 'invert(1)',
        }}
      />

      {/* Corner temple images */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-48">
        <img
          src="/assets/temple/temple-illustration.png"
          alt=""
          className="w-full h-full object-contain"
          onError={e => { ;(e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="text-5xl block mb-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📍
          </motion.span>
          <h2
            className="text-2xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Venue Details
          </h2>
          <p className="text-[#F5D76E] mt-1 text-sm" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
            இடம் விபரம்
          </p>
          <div className="h-0.5 w-24 mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Venue card */}
        <motion.div
          className="rounded-3xl overflow-hidden mb-6"
          style={{
            background: 'rgba(255,255,255,0.95)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Card top */}
          <div
            className="py-3 px-6 text-center"
            style={{ background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)' }}
          >
            <p className="text-white font-semibold text-sm uppercase tracking-wider">Wedding Venue</p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* QR Code */}
              <motion.div
                className="flex-shrink-0 p-3 rounded-2xl"
                style={{
                  background: 'white',
                  boxShadow: '0 4px 20px rgba(139,26,43,0.15)',
                  border: '3px solid #D4AF37',
                }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring' }}
              >
                <QRCodeSVG
                  value={MAPS_URL}
                  size={160}
                  bgColor="#ffffff"
                  fgColor="#8B1A2B"
                  level="H"
                  style={{ borderRadius: '8px' }}
                />
                <p className="text-center text-[#C8972F] text-xs mt-2 font-medium">
                  Scan to navigate
                </p>
              </motion.div>

              {/* Location details */}
              <div className="text-center sm:text-left flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <span className="text-2xl">🏛️</span>
                  <h3
                    className="text-xl sm:text-2xl font-bold"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#8B1A2B',
                    }}
                  >
                    Sri Lakshmi Mall
                  </h3>
                </div>

                <p
                  className="text-[#C8972F] font-semibold mb-1"
                  style={{ fontFamily: 'Poppins' }}
                >
                  📍 Sattur, Tamil Nadu
                </p>

                <div
                  className="my-3 h-px"
                  style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
                />

                <div className="space-y-1.5 text-sm text-[#5C0A15]" style={{ fontFamily: 'Poppins' }}>
                  <p>📅 Engagement: May 24th, 2026</p>
                  <p>💒 Wedding: May 25th, 2026</p>
                  <p>🕐 Morning Ceremony</p>
                </div>

                {/* Tamil address */}
                <p className="text-[#C8972F] text-xs mt-3" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
                  ஸ்ரீ லக்ஷ்மி மால், சாத்தூர்
                </p>
              </div>
            </div>

            {/* Maps button */}
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-6 py-3 px-6 rounded-2xl font-semibold text-white text-sm sm:text-base"
              style={{
                background: 'linear-gradient(135deg, #8B1A2B, #C81C1C)',
                boxShadow: '0 4px 20px rgba(139,26,43,0.3)',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 25px rgba(139,26,43,0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Open in Google Maps
            </motion.a>
          </div>
        </motion.div>

        {/* Extra info */}
        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: '🍛', text: 'Grand Feast Included', sub: 'சாப்பாடு உண்டு' },
            { icon: '🎶', text: 'Music & Celebration', sub: 'இசை நிகழ்ச்சி' },
            { icon: '🌸', text: 'Floral Decorations', sub: 'மலர் அலங்காரம்' },
            { icon: '📸', text: 'Memories Forever', sub: 'நினைவுகள் என்றும்' },
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(212,175,55,0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-2xl block mb-1">{item.icon}</span>
              <p className="text-white text-xs font-medium">{item.text}</p>
              <p className="text-[#F5D76E] text-xs opacity-70" style={{ fontFamily: 'Noto Serif Tamil' }}>
                {item.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
