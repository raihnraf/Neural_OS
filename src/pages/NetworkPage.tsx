import { TopNav } from '@/components'
import {
  NetworkHero,
  NetworkLatency,
  RegionAvailability,
  ComplianceCard,
  NetworkMetrics,
  NetworkCTA,
  useNetworkData,
} from './network'
import { REGION_STATUS } from './network/constants'

export default function NetworkPage() {
  const { latencyData, activeConnections, avgPayload, lastPing } = useNetworkData()
  const regionStatus = REGION_STATUS.initial

  return (
    <main className="pt-16 bg-background min-h-screen">
      <TopNav activePage="network" />
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        <NetworkHero />

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
          <NetworkLatency latencyData={latencyData} lastPing={lastPing} />
          <RegionAvailability regionStatus={regionStatus} />
          <ComplianceCard />
        </section>

        <NetworkMetrics activeConnections={activeConnections} avgPayload={avgPayload} />

        <NetworkCTA />
      </div>
    </main>
  )
}
