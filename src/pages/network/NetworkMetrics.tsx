import { UPTIME_BARS, NETWORK_METRICS } from './constants'

interface NetworkMetricsProps {
  activeConnections: number
  avgPayload: number
}

export function NetworkMetrics({ activeConnections, avgPayload }: NetworkMetricsProps) {
  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Historical Reliability</h2>
          <p className="text-on-surface-variant max-w-md">
            Neural OS maintains transparent uptime metrics for all core routing protocols and edge
            gateways.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <div className="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest mb-1">
              Average Payload
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="text-xl font-bold font-mono">{avgPayload.toFixed(1)} GB/s</div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
          <div className="text-right border-l border-outline-variant pl-4">
            <div className="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest mb-1">
              Active Nodes
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="text-xl font-bold font-mono">
                {activeConnections.toLocaleString()}
              </div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-80 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex items-end p-8 gap-1 relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

        {UPTIME_BARS.map((height, idx) => (
          <div
            key={idx}
            className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[80%] rounded-t-sm"
            style={{ height: `${height}%` }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-surface-container-highest/90 border border-outline-variant/30 px-6 py-3 rounded-lg backdrop-blur">
            <span className="text-primary font-mono font-bold">
              {NETWORK_METRICS.reliability} AVERAGE RELIABILITY ({NETWORK_METRICS.reliabilityPeriod}
              )
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6 px-2">
        <span className="text-[0.6875rem] font-mono text-on-surface-variant">JAN 2023</span>
        <span className="text-[0.6875rem] font-mono text-on-surface-variant">PRESENT DAY</span>
      </div>
    </section>
  )
}
