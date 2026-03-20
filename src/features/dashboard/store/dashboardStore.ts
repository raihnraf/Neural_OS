import { create } from 'zustand'
import type { DashboardData } from '../types/dashboard.types'
import { mockDashboardData } from '../data/mockDashboardData'

interface DashboardState {
  data: DashboardData
  isLoading: boolean
  error: string | null
  refreshData: () => void
  setSelectedModel: (modelId: string) => void
  selectedModelId: string | null
}

export const useDashboardStore = create<DashboardState>((set) => ({
  data: mockDashboardData,
  isLoading: false,
  error: null,
  selectedModelId: null,
  refreshData: () => {
    // Simulate data refresh - in production this would call an API
    set({ isLoading: true })
    setTimeout(() => {
      set({
        data: {
          ...mockDashboardData,
          latency: mockDashboardData.latency + (Math.random() - 0.5) * 2,
          throughput: mockDashboardData.throughput + Math.floor((Math.random() - 0.5) * 200),
        },
        isLoading: false,
      })
    }, 500)
  },
  setSelectedModel: (modelId: string) => set({ selectedModelId: modelId }),
}))
