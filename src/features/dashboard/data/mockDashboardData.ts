import type { DashboardData, Model, AuditLog } from '../types/dashboard.types'

export const mockDashboardData: DashboardData = {
  latency: 14.2,
  throughput: 8400,
  accuracy: 98.2,
  latencyHistory: [12, 18, 10, 22, 28, 16, 14, 20],
  syncStatus: 'synced',
  uptime: '99.998%',
  logs: [
    {
      id: '1',
      title: 'Inference Overload',
      description: 'Node-04 shifted to backup cluster.',
      timestamp: '12:44:01',
      type: 'primary',
    },
    {
      id: '2',
      title: 'Model Updated',
      description: 'Neural-L-v2 deployed to production.',
      timestamp: '11:32:15',
      type: 'secondary',
    },
    {
      id: '3',
      title: 'API Key Rotated',
      description: 'Security protocol 44-B completed.',
      timestamp: '10:05:48',
      type: 'tertiary',
    },
  ] as AuditLog[],
  models: [
    {
      id: '1',
      name: 'Neural-Large-v2.1',
      status: 'deployed',
      architecture: 'Transformer-8B',
      lastSync: '2 mins ago',
      usage: 75,
    },
    {
      id: '2',
      name: 'Vision-Alpha-Inference',
      status: 'testing',
      architecture: 'ViT-Base',
      lastSync: '14 mins ago',
      usage: 25,
    },
    {
      id: '3',
      name: 'Data-Processor-Stream',
      status: 'idle',
      architecture: 'Linear-Scale',
      lastSync: '1 hour ago',
      usage: 0,
    },
  ] as Model[],
}

export const signalData = [
  { time: '00:00', primary: 65, secondary: 45, tertiary: 55 },
  { time: '04:00', primary: 58, secondary: 52, tertiary: 48 },
  { time: '08:00', primary: 72, secondary: 38, tertiary: 62 },
  { time: '12:00', primary: 48, secondary: 65, tertiary: 58 },
  { time: '16:00', primary: 82, secondary: 42, tertiary: 52 },
  { time: '20:00', primary: 55, secondary: 58, tertiary: 68 },
]
