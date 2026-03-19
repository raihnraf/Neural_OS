import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import type { GlobeMethods } from 'react-globe.gl'

interface MarkerData {
  name: string
  lat: number
  lng: number
  status: string
  color: string
}

interface ArcData {
  start: { lat: number; lng: number }
  end: { lat: number; lng: number }
}

const markerData: MarkerData[] = [
  { name: 'US-EAST-1', lat: 37.5, lng: -77, status: 'ACTIVE', color: '#ecf7ff' },
  { name: 'EU-WEST-2', lat: 51.5, lng: -0.1, status: 'SYNCING', color: '#ddb7ff' },
  { name: 'AP-SOUTH-1', lat: 19, lng: 72, status: 'PEAK', color: '#e1faff' },
]

const connectionArcs: ArcData[] = [
  { start: { lat: 37.5, lng: -77 }, end: { lat: 51.5, lng: -0.1 } }, // US-EAST to EU-WEST
  { start: { lat: 51.5, lng: -0.1 }, end: { lat: 19, lng: 72 } }, // EU-WEST to AP-SOUTH
  { start: { lat: 19, lng: 72 }, end: { lat: 37.5, lng: -77 } }, // AP-SOUTH to US-EAST
]

// Simple label accessor that returns a plain string
const getLabelText = (d: any) => {
  const marker = d as MarkerData
  return `${marker.name}: ${marker.status}`
}

export default function InteractiveGlobe() {
  const globeEl = useRef<GlobeMethods>()
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isReady, setIsReady] = useState(false)

  // Update dimensions on mount and resize
  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth
          const height = containerRef.current.offsetHeight
          setDimensions({ width, height })
          // Only mark as ready when we have valid dimensions
          if (width > 0 && height > 0) {
            setIsReady(true)
          }
        }
      }

      // Small delay to ensure container is laid out
      const timer = setTimeout(updateDimensions, 100)
      window.addEventListener('resize', updateDimensions)
      return () => {
        clearTimeout(timer)
        window.removeEventListener('resize', updateDimensions)
      }
    }
  }, [])

  // Auto-rotate when not interacting
  useEffect(() => {
    if (globeEl.current && isReady) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 0.8
    }
  }, [isReady])

  return (
    <div ref={containerRef} className="absolute inset-0">
      {isReady && dimensions.width > 0 && dimensions.height > 0 && (
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#ecf7ff"
          atmosphereAltitude={0.25}
          arcsData={connectionArcs}
          arcStartLat={(d: any) => d.start.lat}
          arcStartLng={(d: any) => d.start.lng}
          arcEndLat={(d: any) => d.end.lat}
          arcEndLng={(d: any) => d.end.lng}
          arcColor={() => '#ecf7ff'}
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashInitialGap={0.1}
          arcDashAnimateTime={2000}
          arcStroke={0.5}
          arcAltitude={0.5}
          pointsData={markerData}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude={0}
          pointRadius={0.5}
          pointsMerge={false}
          labelsData={markerData}
          labelLat="lat"
          labelLng="lng"
          labelText={getLabelText}
          labelColor={() => '#ecf7ff'}
          labelSize={1.2}
          labelAltitude={0.05}
          labelDotRadius={0.2}
          enablePointerInteraction={true}
        />
      )}

      {/* Gradient overlays matching the page style */}
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 pointer-events-none opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none"></div>
    </div>
  )
}
