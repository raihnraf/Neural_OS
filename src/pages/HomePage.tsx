import { NavBar, Hero } from '../features/hero'
import { ProductShowcase } from '../features/product-showcase'
import { DeveloperTerminal } from '../features/developer-terminal'
import { Metrics } from '../features/metrics'
import { Footer } from '../features/Footer'
import { ScrollProgress } from '../components/ScrollProgress'
import { ParticleBackground } from '../components/ParticleBackground'

function HomePage() {
  return (
    <main className="pt-16 relative">
      <ParticleBackground />
      <ScrollProgress />
      <NavBar />
      <Hero />
      <ProductShowcase />
      <DeveloperTerminal />
      <Metrics />
      <Footer />
    </main>
  )
}

export default HomePage
