import Navbar from '@/components/nav/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Metrics from '@/components/sections/Metrics'
import Industries from '@/components/sections/Industries'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Metrics />
      <Industries />
      <CtaSection />
      <Footer />
    </main>
  )
}
