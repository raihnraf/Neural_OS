import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MaterialSymbols, MagneticButton, TopNav } from '@/components'

interface PricingTier {
  name: string
  description: string
  price: string
  period: string
  icon: string
  badge?: string
  badgeColor?: string
  recommended?: boolean
  features: {
    text: string
    available: boolean
    highlight?: boolean
  }[]
  ctaText: string
  ctaVariant: 'primary' | 'outline'
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    description: 'For individual developers and testing environments.',
    price: '$0',
    period: '/ per node',
    icon: 'biotech',
    badge: 'Sandbox',
    features: [
      { text: '1k Tokens per second', available: true },
      { text: 'Shared public nodes', available: true },
      { text: 'Community support', available: true },
      { text: 'Advanced Guardrails', available: false },
    ],
    ctaText: 'Initialize Core',
    ctaVariant: 'outline',
  },
  {
    name: 'Pro',
    description: 'Production ready clusters for scaling startups.',
    price: '$499',
    period: '/ monthly cluster',
    icon: 'bolt',
    badge: 'Enterprise',
    badgeColor: 'secondary',
    recommended: true,
    features: [
      { text: '250k Tokens per second', available: true, highlight: true },
      { text: '3 Dedicated inference nodes', available: true, highlight: true },
      { text: '24/7 Priority sync', available: true, highlight: true },
      { text: 'SOC2 Security guardrails', available: true, highlight: true },
    ],
    ctaText: 'Deploy Network',
    ctaVariant: 'primary',
  },
  {
    name: 'Custom',
    description: 'Bespoke infrastructure for global conglomerates.',
    price: 'POA',
    period: '/ price on application',
    icon: 'hub',
    badge: 'Planetary',
    features: [
      { text: 'Unlimited token throughput', available: true },
      { text: 'Isolated bare-metal nodes', available: true },
      { text: 'Dedicated TAM & Engineering', available: true },
      { text: 'Custom protocol layers', available: true },
    ],
    ctaText: 'Contact Synthesis',
    ctaVariant: 'outline',
  },
]

const features = [
  {
    icon: 'memory',
    iconColor: 'text-secondary',
    title: 'Dedicated Inference',
    description: 'Guaranteed hardware allocation for your agents. No noisy neighbors, no latency spikes.',
  },
  {
    icon: 'security',
    iconColor: 'text-secondary',
    title: 'Deterministic Security',
    description: 'Cryptographic proof of execution for every token generated within your matrix.',
  },
  {
    icon: 'lan',
    iconColor: 'text-secondary',
    title: 'Matrix Peering',
    description: 'Direct connection to the Axiom backbone for <1ms data transfer between agents.',
  },
  {
    icon: 'query_stats',
    iconColor: 'text-secondary',
    title: 'Real-time Telemetry',
    description: 'Monitor node health and token consumption via our high-fidelity terminal dashboard.',
  },
]

export default function PricingPage() {
  return (
    <main className="pt-16 bg-background min-h-screen">
      <TopNav activePage="pricing" />
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Hero Section */}
        <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-secondary"></span>
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-secondary font-label">
                Axiom Matrix Protocol
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary font-headline leading-tight">
              Scalable Intelligence.<br />
              <span className="text-on-surface-variant">Deterministic Cost.</span>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed border-l border-outline-variant/30 pl-4">
              Provisioning neural compute for autonomous agents and planetary-scale data synthesis. Select your operational tier.
            </p>
          </div>
        </div>
      </header>

      {/* Pricing Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={tier.name} tier={tier} index={index} />
        ))}
      </div>

      {/* Feature Comparison */}
      <section className="mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-outline-variant/20 pt-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Deep Technical<br />Infrastructure
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              The Neural OS isn't just a layer—it's the core. Every node is optimized for ultra-low latency and verifiable computation.
            </p>
            <Link
              to="/docs"
              className="flex items-center gap-4 group cursor-pointer text-primary"
            >
              <span className="text-[0.6875rem] font-label uppercase tracking-widest">
                View Documentation
              </span>
              <MaterialSymbols
                icon="arrow_forward"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/20 overflow-hidden">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background p-8"
              >
                <MaterialSymbols
                  icon={feature.icon}
                  className={`${feature.iconColor} mb-4 text-2xl`}
                />
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-on-surface-variant text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-40 relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-container/20 to-transparent z-0"></div>
        <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to sync with the matrix?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton variant="primary" size="lg" shimmer>
              Initialize Now
            </MagneticButton>
            <MagneticButton variant="outline" size="lg">
              Speak to an Architect
            </MagneticButton>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}

interface PricingCardProps {
  tier: PricingTier
  index: number
}

function PricingCard({ tier, index }: PricingCardProps) {
  const isRecommended = tier.name === 'Pro'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`
        ${isRecommended 
          ? 'bg-surface-container-low border border-secondary/20 premium-glow' 
          : 'glass-panel border border-outline-variant/20 glow-border'
        }
        p-8 flex flex-col justify-between group transition-all duration-300
        ${isRecommended ? 'relative overflow-hidden' : ''}
      `}
    >
      {tier.badge && (
        <div className="absolute top-0 right-0 p-4" style={{ position: 'relative', marginBottom: '1rem' }}>
          {isRecommended && (
            <div className="bg-secondary-container text-secondary text-[10px] px-2 py-1 font-bold uppercase tracking-tighter rounded">
              Recommended
            </div>
          )}
        </div>
      )}

      <div>
        <div className="flex justify-between items-start mb-12">
          <div className={`p-2 rounded ${isRecommended ? 'bg-secondary/10' : 'bg-surface-container-highest'}`}>
            <MaterialSymbols
              icon={tier.icon}
              className={`text-2xl ${isRecommended ? 'text-secondary' : 'text-tertiary'}`}
            />
          </div>
          {tier.badge && (
            <span className="text-[0.6875rem] font-label text-outline uppercase tracking-widest">
              {tier.badge}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <p className="text-on-surface-variant text-sm mb-8">{tier.description}</p>

        <div className="flex items-baseline gap-1 mb-10">
          <span className="text-4xl font-bold text-primary">{tier.price}</span>
          <span className="text-on-surface-variant text-xs uppercase tracking-tighter">
            {tier.period}
          </span>
        </div>

        <ul className="space-y-4 mb-12">
          {tier.features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-3 text-sm ${
                feature.highlight ? 'text-on-surface' : 'text-on-surface-variant'
              } ${!feature.available ? 'opacity-40' : ''}`}
            >
              <MaterialSymbols
                icon={feature.available ? 'check' : 'lock'}
                className={`text-xs ${
                  feature.highlight 
                    ? 'text-secondary' 
                    : feature.available 
                      ? 'text-primary' 
                      : ''
                }`}
                filled={feature.highlight}
              />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      <MagneticButton
        variant={tier.ctaVariant}
        className="w-full py-4 text-sm font-semibold uppercase tracking-widest"
      >
        {tier.ctaText}
      </MagneticButton>
    </motion.div>
  )
}