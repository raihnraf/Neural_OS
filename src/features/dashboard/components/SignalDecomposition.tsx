import { motion } from 'framer-motion'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import { signalData } from '../data/mockDashboardData'

export function SignalDecomposition() {
  return (
    <motion.div
      className="lg:col-span-4 md:col-span-4 bg-surface-container p-6 rounded-xl border border-outline-variant/20 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      whileHover={{ boxShadow: '0 0 15px rgba(187, 222, 242, 0.2)' }}
    >
      <div className="absolute top-0 right-0 p-4">
        <span className="text-[10px] font-mono text-primary/40">TRACE_ID: 88-X991</span>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface">
          Live Signal Decomposition
        </h4>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-primary border border-white/10" />
          <span className="w-3 h-3 rounded-full bg-secondary border border-white/10" />
          <span className="w-3 h-3 rounded-full bg-tertiary border border-white/10" />
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={signalData}>
            <defs>
              <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ecf7ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ecf7ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSecondary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ddb7ff" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#ddb7ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTertiary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e1faff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#e1faff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="primary"
              stroke="#ecf7ff"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrimary)"
            />
            <Area
              type="monotone"
              dataKey="secondary"
              stroke="#ddb7ff"
              strokeWidth={1.5}
              fillOpacity={1}
              fill="url(#colorSecondary)"
            />
            <Area
              type="monotone"
              dataKey="tertiary"
              stroke="#e1faff"
              strokeWidth={1}
              strokeDasharray="3 3"
              fillOpacity={1}
              fill="url(#colorTertiary)"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent pointer-events-none" />
      </div>
    </motion.div>
  )
}
