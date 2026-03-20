import { motion } from 'framer-motion'
import { metricsData } from '../../data/mockData'
import { CountUp } from '../../hooks/useCountUp'

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
}

export function Metrics() {
  return (
    <section className="py-32 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {metricsData.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={cn(
                  'text-6xl md:text-7xl font-black mb-2 transition-transform duration-500',
                  colorMap[metric.color]
                )}
              >
                <CountUp value={metric.value} />
              </motion.div>
              <div className="text-[0.6875rem] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
