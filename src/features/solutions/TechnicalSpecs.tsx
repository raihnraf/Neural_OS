import { motion } from 'framer-motion'

const specs = [
  {
    title: 'Execution Model',
    description:
      'Deterministic multitasking with nanosecond-scale context switching. Zero-copy memory architecture optimized for tensor processing units.',
  },
  {
    title: 'Security Stack',
    description:
      'End-to-end encrypted weights and hardware-attested secure enclaves. Formal verification of all kernel-level AI instructions.',
  },
  {
    title: 'Connectivity',
    description:
      'Native support for ultra-reliable low-latency communications (URLLC) and satellite-mesh backhaul orchestration.',
  },
]

export function TechnicalSpecs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant/20 pt-20">
      {specs.map((spec, index) => (
        <motion.div
          key={spec.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <h4 className="text-on-surface-variant uppercase tracking-widest text-[10px] font-bold mb-6">
            {spec.title}
          </h4>
          <p className="text-sm leading-relaxed">{spec.description}</p>
        </motion.div>
      ))}
    </section>
  )
}
