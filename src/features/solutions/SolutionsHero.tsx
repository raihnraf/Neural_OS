import { motion } from 'framer-motion'

export function SolutionsHero() {
  return (
    <header className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border-l-2 border-secondary mb-6"
      >
        <span className="text-[0.6875rem] uppercase tracking-[0.1em] font-label font-bold text-secondary">
          Neural Framework v2.0
        </span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-7xl font-semibold tracking-tighter text-on-surface mb-6 max-w-4xl leading-[1.1]"
      >
        Intelligence engineered for{' '}
        <span className="text-primary-container">critical infrastructure.</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-on-surface-variant text-lg max-w-2xl leading-relaxed"
      >
        Neural OS provides the deterministic execution environment required for
        industry-specific AI workloads. Deploy with the precision of a high-performance kernel.
      </motion.p>
    </header>
  )
}
