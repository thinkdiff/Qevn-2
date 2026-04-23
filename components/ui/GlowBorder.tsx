'use client'

import { ReactNode } from 'react'

interface GlowBorderProps {
  children: ReactNode
  className?: string
  color?: 'lime' | 'blue'
  intensity?: 'subtle' | 'medium' | 'strong'
}

export default function GlowBorder({
  children,
  className = '',
  color = 'lime',
  intensity = 'subtle',
}: GlowBorderProps) {
  const glows = {
    lime: {
      subtle: '0 0 0 1px rgba(200,240,75,0.15)',
      medium: '0 0 0 1px rgba(200,240,75,0.3), 0 0 20px rgba(200,240,75,0.08)',
      strong: '0 0 0 1px rgba(200,240,75,0.5), 0 0 40px rgba(200,240,75,0.15)',
    },
    blue: {
      subtle: '0 0 0 1px rgba(75,139,240,0.15)',
      medium: '0 0 0 1px rgba(75,139,240,0.3), 0 0 20px rgba(75,139,240,0.08)',
      strong: '0 0 0 1px rgba(75,139,240,0.5), 0 0 40px rgba(75,139,240,0.15)',
    },
  }

  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{
        boxShadow: glows[color][intensity],
        backgroundColor: 'var(--bg-surface)',
      }}
    >
      {children}
    </div>
  )
}
