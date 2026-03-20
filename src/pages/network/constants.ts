export const LATENCY_DATA = {
  initial: [
    { region: 'North America', latency: '0.8ms', percentage: 92, trend: 'stable' as const },
    { region: 'Europe Central', latency: '1.2ms', percentage: 88, trend: 'stable' as const },
    { region: 'Asia Pacific', latency: '4.5ms', percentage: 74, trend: 'stable' as const },
  ],
}

export const REGION_STATUS = {
  initial: [
    {
      name: 'NYC-01',
      status: 'Operational' as const,
      statusColor: 'primary',
      lastUpdate: new Date(),
    },
    {
      name: 'LON-04',
      status: 'Operational' as const,
      statusColor: 'primary',
      lastUpdate: new Date(),
    },
    {
      name: 'TKY-02',
      status: 'Maintenance' as const,
      statusColor: 'secondary',
      lastUpdate: new Date(),
    },
    {
      name: 'SIN-01',
      status: 'Operational' as const,
      statusColor: 'primary',
      lastUpdate: new Date(),
    },
  ],
}

export const COMPLIANCE_BADGES = ['GDPR', 'SOC2 TYPE II', 'HIPAA', 'ISO 27001']

export const UPTIME_BARS = [
  80, 75, 85, 90, 88, 95, 82, 89, 92, 98, 91, 85, 70, 75, 90, 94, 88, 82, 85, 92,
]

export const UPDATE_INTERVALS = {
  latency: 2000,
  connections: 1500,
  payload: 3000,
  ping: 1000,
}

export const NETWORK_METRICS = {
  uptime: '99.999%',
  globalP99: '<12ms',
  reliability: '99.9997%',
  reliabilityPeriod: 'LAST 365D',
}
