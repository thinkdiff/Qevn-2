'use client'

const items = [
  'Multi-Agent Systems',
  'AI Calling Agents',
  'Zero-Burnout Ops',
  '60% Shorter Sales Cycles',
  '24/7 AI Workforce',
  'Custom Built. Not SaaS.',
  'Multi-Agent Systems',
  'AI Calling Agents',
  'Zero-Burnout Ops',
  '60% Shorter Sales Cycles',
  '24/7 AI Workforce',
  'Custom Built. Not SaaS.',
]

export default function TrustBar() {
  return (
    <section
      className="relative overflow-hidden py-5"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        backgroundColor: 'var(--bg-surface)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, var(--bg-surface), transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(270deg, var(--bg-surface), transparent)',
        }}
      />

      <div className="flex overflow-hidden select-none">
        <div className="animate-ticker flex items-center gap-0 whitespace-nowrap">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span
                className="font-mono text-xs tracking-[0.15em] uppercase px-6"
                style={{ color: 'var(--text-muted)' }}
              >
                {item}
              </span>
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'rgba(200,240,75,0.4)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
