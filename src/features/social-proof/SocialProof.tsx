import { motion } from 'framer-motion'

const logos = [
  { name: 'Vercel', width: 'w-24' },
  { name: 'Stripe', width: 'w-20' },
  { name: 'Linear', width: 'w-20' },
  { name: 'Raycast', width: 'w-24' },
  { name: 'Supabase', width: 'w-28' },
  { name: 'Resend', width: 'w-24' },
]

const metrics = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '500+', label: 'Global Nodes' },
  { value: '<10ms', label: 'Avg Latency' },
  { value: '24/7', label: 'Security Monitoring' },
]

export function SocialProof() {
  return (
    <section className="py-12 border-y border-outline-variant/10 bg-surface-dim/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Trusted By Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-on-surface-variant text-sm mb-8"
        >
          Trusted by innovative teams worldwide
        </motion.p>

        {/* Logo Cloud */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${logo.width} h-8 flex items-center justify-center`}
            >
              <span className="text-on-surface-variant font-semibold text-lg">{logo.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Metrics Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant/20" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6">
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span>Powering next-gen AI infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-semibold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-on-surface-variant text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
