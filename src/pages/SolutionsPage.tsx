import {
  SolutionsNav,
  SolutionsHero,
  SolutionsGrid,
  PartnersSection,
  TechnicalSpecs,
  SolutionsFooter,
} from '../features/solutions'

function SolutionsPage() {
  return (
    <main className="pt-16 relative bg-background min-h-screen">
      <SolutionsNav />
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <SolutionsHero />
        <SolutionsGrid />
        <PartnersSection />
        <TechnicalSpecs />
      </div>
      <SolutionsFooter />
    </main>
  )
}

export default SolutionsPage
