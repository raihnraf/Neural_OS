import { useState, useEffect } from 'react'
import { LATENCY_DATA, UPDATE_INTERVALS } from './constants'
import type { LatencyData } from './types'

export function useNetworkData() {
  const [latencyData, setLatencyData] = useState<LatencyData[]>(LATENCY_DATA.initial)
  const [activeConnections, setActiveConnections] = useState(12402)
  const [avgPayload, setAvgPayload] = useState(24.8)
  const [lastPing, setLastPing] = useState<Date>(new Date())

  useEffect(() => {
    const latencyInterval = setInterval(() => {
      setLatencyData((prev) =>
        prev.map((item) => {
          const variation = (Math.random() - 0.5) * 10
          const newPercentage = Math.max(60, Math.min(98, item.percentage + variation))
          const newLatency = (0.5 + (100 - newPercentage) / 20).toFixed(1)

          let trend: 'up' | 'down' | 'stable' = 'stable'
          if (variation > 3) trend = 'up'
          if (variation < -3) trend = 'down'

          return {
            ...item,
            percentage: Math.round(newPercentage),
            latency: `${newLatency}ms`,
            trend,
          }
        })
      )
    }, UPDATE_INTERVALS.latency)

    const connectionsInterval = setInterval(() => {
      setActiveConnections((prev) => prev + Math.floor((Math.random() - 0.5) * 50))
    }, UPDATE_INTERVALS.connections)

    const payloadInterval = setInterval(() => {
      setAvgPayload((prev) => Math.max(20, Math.min(30, prev + (Math.random() - 0.5) * 2)))
    }, UPDATE_INTERVALS.payload)

    const pingInterval = setInterval(() => {
      setLastPing(new Date())
    }, UPDATE_INTERVALS.ping)

    return () => {
      clearInterval(latencyInterval)
      clearInterval(connectionsInterval)
      clearInterval(payloadInterval)
      clearInterval(pingInterval)
    }
  }, [])

  return {
    latencyData,
    activeConnections,
    avgPayload,
    lastPing,
  }
}
