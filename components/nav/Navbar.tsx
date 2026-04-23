'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import QevnLogo from '@/components/ui/QevnLogo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#metrics' },
  { label: 'Industries', href: '#industries' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    // If already on homepage, scroll to section
    if (window.location.pathname === '/') {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to homepage with hash
      window.location.href = '/' + href
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-base/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <QevnLogo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          clipPath: mobileOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ pointerEvents: mobileOpen ? 'all' : 'none' }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-3xl font-bold text-text-primary hover:text-accent-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Button
              variant="primary"
              onClick={() => {
                setMobileOpen(false)
                window.open('https://calendly.com/hello-qevn/30min', '_blank')
              }}
            >
              Book a Call
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </>
  )
}
