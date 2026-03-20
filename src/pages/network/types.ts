export interface LatencyData {
  region: string
  latency: string
  percentage: number
  trend: 'up' | 'down' | 'stable'
}

export interface RegionStatus {
  name: string
  status: 'Operational' | 'Maintenance' | 'Degraded'
  statusColor: string
  lastUpdate: Date
}

export interface NetworkPageData {
  activeConnections: number
  avgPayload: number
  lastPing: Date
}
