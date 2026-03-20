import { ReactNode } from 'react'
import { TopNav } from './TopNav'
import { SideNav } from './SideNav'

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <SideNav />
      <main className="md:pl-64 pt-24 pb-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">{children}</div>
      </main>
    </div>
  )
}
