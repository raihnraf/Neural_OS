import { DeveloperHero } from './DeveloperHero'
import { DocumentationSidebar } from './DocumentationSidebar'
import { CodeTerminal } from './CodeTerminal'
import { ResourceCards } from './ResourceCards'
import { SDKSection } from './SDKSection'

export function DeveloperDashboard() {
  return (
    <main className="pt-24 pb-20 px-6 max-w-[1440px] mx-auto">
      <DeveloperHero />

      {/* Main Developer Grid - Bento Layout */}
      <div className="grid grid-cols-12 gap-6">
        <DocumentationSidebar />

        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <CodeTerminal />
          <ResourceCards />
          <SDKSection />
        </div>
      </div>
    </main>
  )
}
