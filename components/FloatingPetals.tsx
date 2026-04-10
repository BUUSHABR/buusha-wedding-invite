'use client'

import { useEffect, useState } from 'react'

interface Petal {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  rotate: number
  color: string
  type: string
}

const PETAL_COLORS = ['#FF6B8A', '#FFB3C6', '#FF8FAB', '#FFC8DD', '#D4AF37', '#FFE066', '#FF6B2B']
const PETAL_SHAPES = ['🌸', '🌺', '🌹', '✿', '❀', '🌼']

export default function FloatingPetals({ count = 15 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 16 + 12,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      rotate: Math.random() * 360,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      type: PETAL_SHAPES[Math.floor(Math.random() * PETAL_SHAPES.length)],
    }))
    setPetals(generated)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map(petal => (
        <span
          key={petal.id}
          style={{
            position: 'absolute',
            left: `${petal.x}%`,
            top: '-30px',
            fontSize: `${petal.size}px`,
            color: petal.color,
            animation: `petalFall ${petal.duration}s ease-in ${petal.delay}s infinite`,
            transform: `rotate(${petal.rotate}deg)`,
            opacity: 0.8,
          }}
        >
          {petal.type}
        </span>
      ))}
    </div>
  )
}
