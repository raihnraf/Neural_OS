import { MagneticButton } from '@/components/MagneticButton'

export function NetworkCTA() {
  return (
    <section className="bg-surface-container-low rounded-xl p-12 border border-outline-variant/10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />
      <h2 className="text-3xl font-semibold mb-6">Join the Decentralized Fabric</h2>
      <p className="text-on-surface-variant max-w-2xl mx-auto mb-10">
        Neural OS is expanding. Deploy your own high-performance compute node and contribute to the
        global planetary intelligence engine while earning protocol rewards.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <MagneticButton variant="primary" size="lg">
          Download Node Client
        </MagneticButton>
        <MagneticButton variant="outline" size="lg">
          Read Integration Docs
        </MagneticButton>
      </div>
    </section>
  )
}
