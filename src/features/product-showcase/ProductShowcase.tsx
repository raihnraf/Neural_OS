import { motion } from 'framer-motion'
import { productsData } from '../../data/mockData'
import { ProductCard } from './ProductCard'

export function ProductShowcase() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="label-sm text-secondary font-bold tracking-widest block mb-2 uppercase text-[0.6875rem]">
          Product Ecosystem
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-on-surface">
          Integrated Intelligence Layers
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              product.size === 'large' ? 'md:col-span-2 lg:col-span-2 row-span-2' : '',
              product.size === 'medium' ? 'md:col-span-2 lg:col-span-2' : ''
            )}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
