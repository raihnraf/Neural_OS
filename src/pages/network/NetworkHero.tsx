import { motion } from 'framer-motion'
import { InteractiveGlobe } from '@/components'
import { NETWORK_METRICS } from './constants'

export function NetworkHero() {
  return (
    <section className="relative mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 z-10">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block bg-surface-container-highest text-secondary border-l-2 border-secondary px-3 py-1 text-[0.6875rem] font-bold tracking-[0.1em] uppercase mb-6"
        >
          Global Backbone
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-semibold tracking-tight text-on-surface mb-8 leading-[1.1]"
        >
          Planetary scale intelligence.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant text-lg max-w-lg mb-12"
        >
          Neural OS operates across 48 global regions with sub-millisecond inter-node latency. A
          self-healing mesh designed for the next epoch of compute.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-surface-container-low p-6 rounded-lg border-l border-primary/20">
            <div className="text-primary text-3xl font-bold mb-1">{NETWORK_METRICS.uptime}</div>
            <div className="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest">
              Network Uptime
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg border-l border-secondary/20">
            <div className="flex items-center gap-2">
              <div className="text-secondary text-3xl font-bold mb-1">
                {NETWORK_METRICS.globalP99}
              </div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            </div>
            <div className="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest">
              Global P99
            </div>
          </div>
        </motion.div>
      </div>

      <div className="lg:col-span-7 relative min-h-[600px] rounded-xl bg-surface-container-lowest border border-outline-variant/10">
        <InteractiveGlobe />
      </div>
    </section>
  )
}
