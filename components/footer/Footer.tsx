'use client'

import Link from 'next/link'
import QevnLogo from '@/components/ui/QevnLogo'

const serviceLinks = [
  { label: 'Multi-Agent Systems', href: '/services/multi-agent-ai-systems' },
  { label: 'AI Calling Agents', href: '/services/ai-calling-agents' },
  { label: 'Business Auto-Pilot', href: '/services/ai-business-auto-pilot' },
  { label: 'Marketing & Sales Ops', href: '/services/ai-marketing-sales-ops' },
  { label: 'Leads to Closure', href: '/services/leads-to-closure' },
  { label: 'Custom Software', href: '/services/custom-software-development' },
]

const industryLinks = [
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Finance', href: '/industries/finance' },
  { label: 'SaaS', href: '/industries/saas' },
  { label: 'E-commerce', href: '/industries/e-commerce' },
]

const companyLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Results', href: '/#metrics' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Book a Call', href: '/#cta' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

const footerColumns = [
  { title: 'Services', links: serviceLinks },
  { title: 'Industries', links: industryLinks },
  { title: 'Company', links: companyLinks },
  { title: 'Legal', links: legalLinks },
]

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-8"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <QevnLogo />
            </Link>
            <p
              className="text-sm leading-relaxed max-w-[200px]"
              style={{ color: 'var(--text-muted)' }}
            >
              AI business automation. Built to run your operations end-to-end.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p
                className="font-mono text-xs tracking-[0.15em] uppercase mb-5"
                style={{ color: 'var(--accent-primary)' }}
              >
                {column.title}
              </p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-text-primary"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)',
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className="text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            © {new Date().getFullYear()} QEVN. All rights reserved.
          </p>
          <p
            className="font-mono text-xs tracking-wide"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Built with QEVN AI Infrastructure
          </p>
        </div>
      </div>
    </footer>
  )
}
