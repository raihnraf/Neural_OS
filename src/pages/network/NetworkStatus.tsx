import { MaterialSymbols } from '@/components'
import { MagneticButton } from '@/components/MagneticButton'
import type { LatencyData, RegionStatus } from './types'
import { COMPLIANCE_BADGES } from './constants'

interface NetworkLatencyProps {
  latencyData: LatencyData[]
  lastPing: Date
}

export function NetworkLatency({ latencyData, lastPing }: NetworkLatencyProps) {
  return (
    <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between group hover:border-primary/30 transition-all">
      <div>
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-xl font-semibold">Node Latency</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-[0.625rem] uppercase tracking-widest text-on-surface-variant">
                Live • Updated {Math.floor((Date.now() - lastPing.getTime()) / 1000)}s ago
              </span>
            </div>
          </div>
          <MaterialSymbols icon="speed" className="text-primary text-2xl" />
        </div>
        <div className="space-y-6">
          {latencyData.map((data, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="w-24 text-[0.6875rem] uppercase tracking-tighter text-on-surface-variant">
                {data.region}
              </span>
              <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${data.percentage}%` }}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[0.6875rem] font-mono text-primary">{data.latency}</span>
                {data.trend === 'up' && (
                  <MaterialSymbols icon="arrow_upward" className="text-xs text-error" />
                )}
                {data.trend === 'down' && (
                  <MaterialSymbols icon="arrow_downward" className="text-xs text-primary" />
                )}
                {data.trend === 'stable' && (
                  <MaterialSymbols icon="remove" className="text-xs text-on-surface-variant" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-[0.6875rem] uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
        <MaterialSymbols icon="info" className="text-xs" />
        Real-time cross-region pings
      </div>
    </div>
  )
}

interface RegionAvailabilityProps {
  regionStatus: RegionStatus[]
}

export function RegionAvailability({ regionStatus }: RegionAvailabilityProps) {
  return (
    <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all">
      <h3 className="text-xl font-semibold mb-6">Region Status</h3>
      <div className="space-y-4">
        {regionStatus.map((region, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-2 border-b border-outline-variant/10"
          >
            <span className="text-sm font-medium">{region.name}</span>
            <span
              className="text-[0.6875rem] px-2 py-0.5 rounded uppercase font-bold tracking-wider"
              style={{
                color: region.statusColor === 'secondary' ? '#ddb7ff' : '#ecf7ff',
                backgroundColor:
                  region.statusColor === 'secondary'
                    ? 'rgba(221, 183, 255, 0.1)'
                    : 'rgba(236, 247, 255, 0.1)',
              }}
            >
              {region.status}
            </span>
          </div>
        ))}
      </div>
      <MagneticButton
        variant="outline"
        className="w-full mt-8 py-3 text-[0.6875rem] font-bold uppercase tracking-widest"
      >
        View All 48 Regions
      </MagneticButton>
    </div>
  )
}

export function ComplianceCard() {
  return (
    <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between overflow-hidden relative">
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
      <div>
        <MaterialSymbols icon="gavel" className="text-secondary mb-6 text-3xl" />
        <h3 className="text-xl font-semibold mb-2">Global Compliance</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          Localized data sovereignty with automated regional routing.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {COMPLIANCE_BADGES.map((badge, idx) => (
          <span
            key={idx}
            className="text-[0.6875rem] font-mono border border-outline-variant px-2 py-1"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}
