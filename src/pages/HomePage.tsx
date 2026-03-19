import { NavBar, Hero } from '../features/hero'
import { ProductShowcase } from '../features/product-showcase'
import { DeveloperTerminal } from '../features/developer-terminal'
import { Metrics } from '../features/metrics'
import { Footer } from '../features/Footer'

function HomePage() {
  return (
    <main className="pt-16">
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
