import { useEffect, useRef, useState, useCallback } from 'react'

interface MarkerData {
  name: string
  lat: number
  lng: number
  status: string
  color: string
  x: number
  y: number
  z: number
  traffic?: number
  latency?: string
  connections?: number
}

const markerData: MarkerData[] = [
  {
    name: 'US-EAST-1',
    lat: 37.5,
    lng: -77,
    status: 'ACTIVE',
    color: '#ecf7ff',
    x: 0.5,
    y: 0.3,
    z: 0.8,
    traffic: 85,
    latency: '0.8ms',
    connections: 1247,
  },
  {
    name: 'EU-WEST-2',
    lat: 51.5,
    lng: -0.1,
    status: 'OPERATIONAL',
    color: '#ddb7ff',
    x: -0.2,
    y: 0.6,
    z: 0.7,
    traffic: 72,
    latency: '1.2ms',
    connections: 892,
  },
  {
    name: 'AP-SOUTH-1',
    lat: 19,
    lng: 72,
    status: 'HIGH TRAFFIC',
    color: '#e1faff',
    x: -0.7,
    y: 0.2,
    z: 0.6,
    traffic: 94,
    latency: '4.5ms',
    connections: 1534,
  },
  {
    name: 'SA-EAST-1',
    lat: -23.5,
    lng: -46.6,
    status: 'OPERATIONAL',
    color: '#90caf9',
    x: 0.3,
    y: -0.5,
    z: 0.7,
    traffic: 45,
    latency: '2.1ms',
    connections: 423,
  },
  {
    name: 'AF-CENTRAL-1',
    lat: 1.3,
    lng: 36.8,
    status: 'SYNCING',
    color: '#ce93d8',
    x: -0.4,
    y: 0.1,
    z: 0.9,
    traffic: 38,
    latency: '3.2ms',
    connections: 287,
  },
]

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 0 },
  { from: 0, to: 3 },
  { from: 1, to: 4 },
]

export default function InteractiveGlobe() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [hoveredPoint, setHoveredPoint] = useState<MarkerData | null>(null)
  const [activeConnections, setActiveConnections] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Auto-rotate animation
  useEffect(() => {
    const animate = () => {
      setRotation((prev) => ({
        x: prev.x,
        y: prev.y + 0.1,
      }))
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Handle point click
  const handlePointClick = useCallback((index: number) => {
    setActiveConnections((prev) => [...prev, index])
    setTimeout(() => {
      setActiveConnections((prev) => prev.filter((i) => i !== index))
    }, 2000)
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center overflow-hidden relative"
    >
      {/* 3D Globe Wireframe */}
      <div
        className="relative"
        style={{
          width: '500px',
          height: '500px',
          perspective: '1000px',
        }}
      >
        {/* Rotating Globe */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Globe Sphere */}
          <div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(236, 247, 255, 0.15), rgba(20, 20, 40, 0.9))',
              boxShadow:
                'inset 0 0 80px rgba(236, 247, 255, 0.15), 0 0 60px rgba(236, 247, 255, 0.2)',
            }}
          />

          {/* Grid Lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/20"
                style={{
                  transform: `rotateY(${i * 22.5}deg)`,
                }}
              />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute inset-0 rounded-full border border-primary/20"
                style={{
                  transform: `rotateX(${(i - 2.5) * 36}deg)`,
                }}
              />
            ))}
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {connections.map((conn, i) => {
              const from = markerData[conn.from]
              const to = markerData[conn.to]
              const isActive =
                activeConnections.includes(conn.from) || activeConnections.includes(conn.to)
              return (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + (to.x - from.x) * 30}%`}
                  y2={`${50 + (to.y - from.y) * 30}%`}
                  stroke={isActive ? from.color : 'rgba(236, 247, 255, 0.2)'}
                  strokeWidth={isActive ? '2' : '1'}
                  strokeDasharray={isActive ? 'none' : '5,5'}
                  style={{
                    transform: `translate3d(${from.x * 200}px, ${from.y * 200}px, ${from.z * 100}px)`,
                    transition: 'all 0.3s ease',
                  }}
                />
              )
            })}
          </svg>

          {/* Data Points */}
          {markerData.map((point, index) => (
            <div
              key={point.name}
              className="absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-150"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-8px',
                marginTop: '-8px',
                backgroundColor: point.color,
                boxShadow: `0 0 ${hoveredPoint?.name === point.name ? '30' : '20'}px ${point.color}`,
                transform: `translate3d(${point.x * 200}px, ${point.y * 200}px, ${point.z * 100}px)`,
                opacity: hoveredPoint && hoveredPoint.name !== point.name ? 0.5 : 1,
              }}
              onClick={() => handlePointClick(index)}
              onMouseEnter={() => setHoveredPoint(point)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {/* Pulse animation */}
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  backgroundColor: point.color,
                  opacity: 0.5,
                }}
              />
            </div>
          ))}

          {/* Active Rings */}
          {activeConnections.map((index, i) => {
            const point = markerData[index]
            return (
              <div
                key={`ring-${i}`}
                className="absolute rounded-full border-2 pointer-events-none"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '60px',
                  height: '60px',
                  marginLeft: '-30px',
                  marginTop: '-30px',
                  borderColor: point.color,
                  transform: `translate3d(${point.x * 200}px, ${point.y * 200}px, ${point.z * 100}px) scale(${1 + i * 0.5})`,
                  opacity: 1 - i * 0.3,
                  animation: 'ring-expand 1s ease-out forwards',
                }}
              />
            )
          })}
        </div>

        {/* Atmosphere glow */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(236, 247, 255, 0.25), transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Info Panel */}
      {hoveredPoint && (
        <div className="absolute bottom-8 left-8 bg-surface-container-highest/90 border border-primary/30 px-6 py-4 rounded-lg backdrop-blur pointer-events-none">
          <div className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            Selected Node
          </div>
          <div className="text-lg font-bold text-primary">{hoveredPoint.name}</div>
          <div className="text-sm text-on-surface-variant mt-1">{hoveredPoint.status}</div>
          <div className="text-xs text-on-surface-variant mt-2">Click to create connection</div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-8 right-8 bg-surface-container-highest/90 border border-primary/30 px-4 py-3 rounded-lg backdrop-blur">
        <div className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">
          Network Status
        </div>
        <div className="space-y-1">
          {markerData.map((point) => (
            <div key={point.name} className="flex items-center gap-2 text-xs">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: point.color,
                  boxShadow: `0 0 8px ${point.color}`,
                }}
              />
              <span className="text-on-surface">{point.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />

      <style>{`
        @keyframes ring-expand {
          0% {
            transform: translate3d(var(--tx, 0), var(--ty, 0), var(--tz, 0)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate3d(var(--tx, 0), var(--ty, 0), var(--tz, 0)) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
