import { motion } from 'framer-motion'
import { Button } from '../../components/Button'
import { Badge } from '../../components/Badge'
import { NetworkVisual } from './NetworkVisual'

export function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden grid-bg">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-container/10 blur-[120px] rounded-full animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Badge>Neural Engine v2.4 Live</Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-semibold tracking-tight text-on-surface mb-6 leading-tight mt-8"
        >
          The Data Engine for{' '}
          <br />
          <span className="text-gradient">Secure AI.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          The infrastructure for high-performance AI, optimized for massive scale.
          Securely train, evaluate, and deploy at planetary speed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" shimmer className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Read the Docs
          </Button>
        </motion.div>

        {/* Network Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20"
        >
          <NetworkVisual />
        </motion.div>
      </div>
    </section>
  )
}
