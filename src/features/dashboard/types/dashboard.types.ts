export interface MetricData {
  id: string
  label: string
  value: string
  unit: string
  trend?: 'up' | 'down' | 'stable'
  trendValue?: string
  icon: string
  color: 'primary' | 'secondary' | 'tertiary'
}

export interface AuditLog {
  id: string
  title: string
  description: string
  timestamp: string
  type: 'primary' | 'secondary' | 'tertiary'
}

export interface Model {
  id: string
  name: string
  status: 'deployed' | 'testing' | 'idle'
  architecture: string
  lastSync: string
  usage: number
}

export interface DashboardData {
  latency: number
  throughput: number
  accuracy: number
  latencyHistory: number[]
  logs: AuditLog[]
  models: Model[]
  syncStatus: 'synced' | 'syncing' | 'error'
  uptime: string
}

export interface SignalDataPoint {
  primary: number
  secondary: number
  tertiary: number
}
