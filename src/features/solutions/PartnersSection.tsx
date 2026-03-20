import { motion } from 'framer-motion'

const partners = [
  { name: 'QUANTUM.X', id: 'quantum' },
  { name: 'LITHIUM_DYNAMICS', id: 'lithium' },
  { name: 'SENSORY_LABS', id: 'sensory' },
  { name: 'BIO_NODE', id: 'bio' },
]

export function PartnersSection() {
  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[0.6875rem] uppercase tracking-[0.2em] font-label text-secondary block mb-2">
            Ecosystem
          </span>
          <h2 className="text-4xl font-semibold tracking-tight">Strategic AI Partnerships</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant max-w-md"
        >
          We collaborate with industry leaders to ensure Neural OS remains the gold standard for
          enterprise intelligence.
        </motion.p>
      </div>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-4">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-32 bg-surface-container-low flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border border-outline-variant/10 cursor-pointer"
          >
            <span className="text-on-surface font-bold tracking-tighter text-xl">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Partnership Featured Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 p-8 bg-gradient-to-r from-surface-container-lowest to-surface-container-low border border-outline-variant/20 flex flex-col md:flex-row justify-between items-center"
      >
        <div className="flex gap-6 items-center">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-secondary-container">handshake</span>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Joint Innovation Program</h4>
            <p className="text-sm text-on-surface-variant">
              Apply for strategic hardware access and co-development grants.
            </p>
          </div>
        </div>
        <button className="mt-6 md:mt-0 px-6 py-2 border border-outline text-sm hover:bg-surface-bright transition-colors">
          Partner Inquiry
        </button>
      </motion.div>
    </section>
  )
}
