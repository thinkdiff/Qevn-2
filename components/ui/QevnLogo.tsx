import React from 'react'

export default function QevnLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* The SVG Mark — square with concave bottom-right cut + detached quarter-circle */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 36 36"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent-primary shrink-0"
      >
        {/* Main block: square with concave arc cut from mid-right to mid-bottom */}
        <path d="M0 0 H36 V16 C36 16 36 26 26 32 C22 34 18 36 16 36 H0 Z" />
        {/* Small quarter-circle piece at bottom-right */}
        <path d="M21 36 C26 36 30 34 33 31 L36 28 V36 Z" />
      </svg>
      {/* The wordmark */}
      <span
        className="font-display text-[1.4rem] font-extrabold tracking-[-0.02em] leading-none"
        style={{ color: 'var(--text-primary)' }}
      >
        Qevn
      </span>
    </div>
  )
}
