import { motion } from 'framer-motion'
import { cn } from '@/utils'

interface SolutionCardProps {
  title: string
  subtitle?: string
  description: string
  icon: string
  iconColor: string
  category: string
  imageSrc: string
  imageAlt: string
  variant?: 'large' | 'vertical' | 'wide'
  actions?: { label: string; href: string }[]
  stats?: { label: string; value: string }[]
}

export function SolutionCard({
  title,
  description,
  icon,
  iconColor,
  category,
  imageSrc,
  imageAlt,
  variant = 'large',
  actions = [],
  stats = [],
}: SolutionCardProps) {
  if (variant === 'large') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-8 group relative overflow-hidden bg-surface-container-low p-8 border border-outline-variant/20 hover:border-primary/40 transition-all duration-300"
      >
        <div className="relative z-10 flex flex-col h-full justify-between min-h-[400px]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className={cn('material-symbols-outlined', iconColor)}>{icon}</span>
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] font-label text-on-surface-variant">
                {category}
              </span>
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-on-surface">{title}</h3>
            <p className="text-on-surface-variant max-w-md leading-relaxed">{description}</p>
          </div>
          <div className="mt-8 flex gap-4">
            {actions.map((action, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-surface-container-highest text-sm font-medium hover:bg-surface-bright transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
          <img alt={imageAlt} src={imageSrc} className="w-full h-full object-cover" />
        </div>
      </motion.div>
    )
  }

  if (variant === 'vertical') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="md:col-span-4 bg-surface-container p-8 border border-outline-variant/20 flex flex-col justify-between hover:border-secondary/40 transition-all"
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className={cn('material-symbols-outlined', iconColor)}>{icon}</span>
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] font-label text-on-surface-variant">
              {category}
            </span>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-on-surface">{title}</h3>
          <p className="text-on-surface-variant leading-relaxed text-sm">{description}</p>
        </div>
        <div className="mt-8">
          <img
            alt={imageAlt}
            src={imageSrc}
            className="w-full h-32 object-cover opacity-50 grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </motion.div>
    )
  }

  if (variant === 'wide') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="md:col-span-12 group bg-surface-container-lowest p-8 border border-outline-variant/20 flex flex-col md:flex-row gap-12 items-center hover:border-tertiary/40 transition-all"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className={cn('material-symbols-outlined', iconColor)}>{icon}</span>
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] font-label text-on-surface-variant">
              {category}
            </span>
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-on-surface">{title}</h3>
          <p className="text-on-surface-variant max-w-xl leading-relaxed">{description}</p>
          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-l border-outline-variant/30 pl-4">
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    {stat.label}
                  </div>
                  <div className="text-lg font-bold text-primary">{stat.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-full md:w-1/3 aspect-video bg-surface-container overflow-hidden">
          <img alt={imageAlt} src={imageSrc} className="w-full h-full object-cover opacity-80" />
        </div>
      </motion.div>
    )
  }

  return null
}

export function SolutionsGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-32">
      <SolutionCard
        variant="large"
        icon="account_balance"
        iconColor="text-primary"
        category="Finance & Markets"
        title="Algorithmic Sovereignty"
        description="Low-latency execution for high-frequency trading and risk assessment. Neural OS minimizes jitters and maximizes throughput for real-time fiscal intelligence."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB_XCwSnB0z_uODlx18wgGM6IEnCiMV_ZGfRdTOPZzxJ2S2NW5vYWE9qj-9bSNj4M7EGSSVtcvRsxBVFoPsblIwIjfbRNSDBCjle0cqizhzwis5EMl8pk46y2Mz0tZII2P8llDFFzDVNvQBamQ6wyEiKEZXAhRVLjTeLHW6zyNR89Ci1sdRBX_6wXyBJ4isOvJ6l9ORGddoKE_fWtLDkvQSYtT97R0KtBcicAySRmMCJq-CNFcaCR0uADzDYhYjc-x3m42cNKauLNPR"
        imageAlt="Abstract financial data flow and rising line graphs"
        actions={[
          { label: 'Risk Engine', href: '#' },
          { label: 'Market Docs', href: '#' },
        ]}
      />
      <SolutionCard
        variant="vertical"
        icon="medical_services"
        iconColor="text-secondary"
        category="Life Sciences"
        title="Precision Diagnostics"
        description="HIPAA-compliant neural processing for genomic sequencing and automated clinical reporting. Secure data silos meet high-speed inference."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAdL9Tk5mGNs2X4Scj4pYGhhh1e4fjEACPDRsuiQJuslJaRGG2Bs2uGaDVbURZ6FM6an-9QOxINMH1CDosEnhh8szb68OkviIjThTtkjkVepY7Y420-zB7-GnRtnvnu7sZPsO2HVEP5iFA5vNrlaMycS0mQQasfga2OBhXOD6I0-3Y0ZGoOs0HSxc6eaU-8bq0VKzAsEQqBvgDJWhbaII9h9JxC8T5jtgH9tJoZX1_Uer3ctutuAD_aJPSE_X488zEXWKvib0yLAJ"
        imageAlt="Abstract microscopic neural structures in cyan and purple"
      />
      <SolutionCard
        variant="wide"
        icon="directions_car"
        iconColor="text-tertiary"
        category="Automotive & Robotics"
        title="Real-time Edge Inference"
        description="Neural OS powers the next generation of autonomous mobility with sub-5ms latency for object detection and path planning. Engineered for hardware parity with leading silicon providers."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Ra3VLlZZYfQWY2StarEfM5x_aFTOEAZzZZdI9I_1KU1a1xHpZTgbqZlT7kH7TcTu4fXTkNVa93FfUCQZ4Y1EIysMztazDmp_WuwtpVGEK24GN9iJBAwkJA6jXof-6qUb9dFBUeOJ_ICj0A9TpBnszfF4lO-voQlzEM3jH1PV4FDoBNixLT_mkcc-UonYZcbrs3Eiqgh6cSdKY9p0pL7N4Dfztfccrh0sVdm9m-AZNOsRMUHtmVwAltkfqWCIdbhzZhlbd-Y1f9_X"
        imageAlt="LIDAR point cloud visualization of an urban environment"
        stats={[
          { label: 'Latency', value: '0.42ms' },
          { label: 'Safety', value: 'SIL-4' },
          { label: 'Throughput', value: '120 TOPS' },
          { label: 'Protocol', value: 'NX-Link' },
        ]}
      />
    </section>
  )
}
