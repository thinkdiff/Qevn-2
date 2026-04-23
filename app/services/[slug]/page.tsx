import { notFound } from 'next/navigation'
import { services } from '@/lib/data'
import InnerPageLayout, {
  ServiceHero,
  FeaturesGrid,
  BenefitsSection,
  ProcessSection,
} from '@/components/layout/InnerPageLayout'
import CtaSection from '@/components/sections/CtaSection'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} — QEVN`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <InnerPageLayout>
      <ServiceHero service={service} />
      <FeaturesGrid features={service.features} />
      <BenefitsSection benefits={service.benefits} />
      <ProcessSection steps={service.process} />
      <CtaSection />
    </InnerPageLayout>
  )
}
