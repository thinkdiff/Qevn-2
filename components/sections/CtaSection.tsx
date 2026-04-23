'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function CtaSection() {
  const [modalOpen, setModalOpen] = useState(false)

  // Prevent body scroll when modal open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  // Escape key to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      <section
        id="cta"
        className="relative py-32 lg:py-44 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-base)' }}
      >
        {/* Radial background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,240,75,0.06) 0%, rgba(75,139,240,0.02) 50%, transparent 70%)',
          }}
        />

        {/* Top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(200,240,75,0.2) 30%, rgba(200,240,75,0.3) 50%, rgba(200,240,75,0.2) 70%, transparent)',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span
              className="font-mono text-xs tracking-[0.18em] uppercase mb-6 block"
              style={{ color: 'var(--accent-primary)' }}
            >
              Ready to Automate?
            </span>

            <h2
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[0.92] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Stop Managing.
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #F2F2F0 0%, #C8F04B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Start Scaling.
              </span>
            </h2>

            <p
              className="text-lg max-w-xl mx-auto leading-relaxed mb-12"
              style={{ color: 'var(--text-muted)' }}
            >
              Book a free 30-minute strategy call. We'll map where AI can
              eliminate your biggest bottlenecks.
            </p>

            <Button
              variant="primary"
              size="lg"
              pulse
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
              className="text-base px-10 py-5"
            >
              Book Your Strategy Call
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3.75 9h10.5M9.75 5.25L13.5 9l-3.75 3.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Calendly Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 80px rgba(0,0,0,0.8)',
              }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Modal header */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div>
                  <p
                    className="font-display text-base font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Book a Strategy Call
                  </p>
                  <p
                    className="font-mono text-xs mt-0.5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    30 minutes · Free · No commitment
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1 1l12 12M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Calendly embed */}
              <div className="w-full">
                <iframe
                  src="https://calendly.com/hello-qevn/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0F1012&text_color=F2F2F0&primary_color=C8F04B"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Book a Strategy Call"
                  style={{ display: 'block' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
