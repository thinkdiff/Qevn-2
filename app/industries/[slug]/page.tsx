import { notFound } from 'next/navigation'
import { industries } from '@/lib/data'
import InnerPageLayout, {
  IndustryHero,
  PainPointsSection,
  SolutionsSection,
  UseCasesSection,
} from '@/components/layout/InnerPageLayout'
import CtaSection from '@/components/sections/CtaSection'

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return {}
  return {
    title: `AI for ${industry.title} — QEVN`,
    description: industry.description,
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    notFound()
  }

  return (
    <InnerPageLayout>
      <IndustryHero industry={industry} />
      <PainPointsSection painPoints={industry.painPoints} />
      <SolutionsSection solutions={industry.solutions} />
      <UseCasesSection useCases={industry.useCases} />
      <CtaSection />
    </InnerPageLayout>
  )
}
