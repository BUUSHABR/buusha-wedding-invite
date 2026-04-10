import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Buusha & Renuka — Wedding Invitation 💍',
  description: 'You are cordially invited to the wedding of Buusha Gengavarajan & Renuka. Sri Lakshmi Mall, Sattur.',
  openGraph: {
    title: 'Buusha & Renuka Wedding 💍',
    description: 'Join us to celebrate our special day!',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#8B1A2B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ta" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: '#FFF8F0',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  )
}
