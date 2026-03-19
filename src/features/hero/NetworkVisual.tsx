import { motion } from 'framer-motion'

export function NetworkVisual() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center opacity-40">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#bbdef2" stopOpacity="0" />
              <stop offset="50%" stopColor="#bbdef2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#bbdef2" stopOpacity="0" />
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
              strokeWidth="1"
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
              strokeWidth="1"
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
      </div>
    </div>
  )
}
