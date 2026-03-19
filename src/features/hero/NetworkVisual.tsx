import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function NetworkVisual() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { stiffness: 100, damping: 30 }
  const rotateX = useSpring(mouseY, springConfig)
  const rotateY = useSpring(mouseX, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center opacity-40" style={{ perspective: '1000px' }}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg className="w-full h-full" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#ecf7ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ddb7ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ecf7ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Concentric circles */}
          <motion.circle
            cx="500"
            cy="200"
            fill="none"
            r="150"
            stroke="#42484b"
            strokeWidth="0.5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.circle
            cx="500"
            cy="200"
            fill="none"
            r="80"
            stroke="#42484b"
            strokeWidth="0.5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />

          {/* Network lines */}
          <g className="network-lines">
            <motion.line
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              x1="200"
              x2="800"
              y1="100"
              y2="300"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            <motion.line
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              x1="200"
              x2="800"
              y1="300"
              y2="100"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            
            {/* Nodes */}
            <motion.circle
              cx="200"
              cy="100"
              fill="#ecf7ff"
              r="3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.circle
              cx="800"
              cy="300"
              fill="#ddb7ff"
              r="3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
            <motion.circle
              cx="500"
              cy="200"
              fill="#ecf7ff"
              r="5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  )
}
