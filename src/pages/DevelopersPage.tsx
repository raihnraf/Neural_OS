import { DeveloperNav, DeveloperDashboard } from '../features/developer-dashboard'

function DevelopersPage() {
  return (
    <main className="pt-16 relative bg-background min-h-screen">
      <DeveloperNav />
      <DeveloperDashboard />
    </main>
  )
}

export default DevelopersPage
