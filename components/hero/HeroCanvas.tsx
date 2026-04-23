'use client'

import Spline from '@splinetool/react-spline/next'

export default function HeroCanvas() {
  return (
    <div
      className="relative w-full h-full pointer-events-none flex items-center justify-center"
      style={{
        // Filter to tint to lime green and crush blacks
        filter: 'sepia(1) hue-rotate(35deg) saturate(3) contrast(1.2) drop-shadow(0 0 30px rgba(200,240,75,0.3))',
        // Screen mode makes #000000 fully transparent.
        mixBlendMode: 'screen',
        // Fade the left edge to remove the hard line where the iframe ends
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
      }}
    >
      <div className="w-[120%] h-[120%] pointer-events-none flex items-center justify-center">
        <Spline
          scene="https://prod.spline.design/P62XqRqEyqMgiN-C/scene.splinecode" 
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
