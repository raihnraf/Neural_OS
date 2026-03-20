import { motion } from 'framer-motion'
import { Database, BarChart3, ShieldCheck, Brain } from 'lucide-react'
import { Product } from '../../data/mockData'
import { ProgressBar } from '../../components/ProgressBar'
import { cn } from '@/utils'

interface ProductCardProps {
  product: Product
}

const iconMap = {
  database: Database,
  analytics: BarChart3,
  shield_lock: ShieldCheck,
  psychology: Brain,
}

const colorMap = {
  primary: 'bg-primary-container/10 text-primary',
  secondary: 'bg-secondary-container/10 text-secondary',
  tertiary: 'bg-tertiary-container/10 text-tertiary',
}

export function ProductCard({ product }: ProductCardProps) {
  const Icon = iconMap[product.icon as keyof typeof iconMap]

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 glow-border h-full flex flex-col"
    >
      {/* Icon */}
      <div
        className={cn(
          'w-10 h-10 rounded flex items-center justify-center mb-4',
          colorMap[product.color]
        )}
      >
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-on-surface mb-2">{product.title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">{product.description}</p>
      </div>

      {/* Metrics */}
      {product.metrics && (
        <div className="mt-6 space-y-4">
          {product.metrics.map((metric, idx) => (
            <div key={idx}>
              {metric.progress !== undefined ? (
                <ProgressBar
                  value={metric.progress}
                  color={product.color}
                  showLabel
                  label={metric.label}
                />
              ) : (
                <div className="bg-surface-container-lowest rounded-lg p-4 border border-outline-variant/10">
                  <div className="flex items-end gap-1 h-32">
                    {[40, 60, 80, 50, 90, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={cn(
                          'flex-1 rounded-t',
                          product.color === 'primary'
                            ? 'bg-primary'
                            : product.color === 'secondary'
                              ? 'bg-secondary'
                              : 'bg-tertiary'
                        )}
                        style={{ opacity: 0.2 + i * 0.15 }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between text-[0.6rem] uppercase tracking-wider text-on-surface-variant font-mono">
                    <span>{metric.label}</span>
                    <span>{metric.value}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
