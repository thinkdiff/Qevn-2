'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  slug: string
  index: number
}

export default function ServiceCard({
  number,
  title,
  description,
  slug,
  index,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="block">
      <motion.div
      className="group relative flex flex-col p-6 lg:p-8 rounded-2xl cursor-pointer"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.08,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow:
            '0 0 0 1px rgba(200,240,75,0.2), inset 0 0 40px rgba(200,240,75,0.03)',
          background:
            'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(200,240,75,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Number */}
      <span
        className="font-mono text-xs tracking-[0.15em] mb-6 block"
        style={{ color: 'rgba(200,240,75,0.5)' }}
      >
        {number}
      </span>

      {/* Title */}
      <h3
        className="font-display text-lg font-bold tracking-[-0.02em] leading-tight mb-3 flex-1"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--text-muted)' }}
      >
        {description}
      </p>

      {/* Arrow */}
      <div className="mt-6 flex justify-end">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-accent-primary/10"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M3 11L11 3M11 3H5M11 3V9"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--text-muted)' }}
            />
          </svg>
        </div>
      </div>
    </motion.div>
    </Link>
  )
}
