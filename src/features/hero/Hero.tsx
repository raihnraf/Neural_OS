import { motion } from 'framer-motion'
import { MagneticButton } from '../../components/MagneticButton'
import { Badge } from '../../components/Badge'
import { NetworkVisual } from './NetworkVisual'
import { LAYOUT, ANIMATION } from '@/constants'

export function Hero() {
  return (
    <section
      className="relative min-h-[750px] flex items-center justify-center overflow-hidden grid-bg"
      style={{ minHeight: 750 }}
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-container/10 blur-[120px] rounded-full animate-pulse-glow" />
      
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ANIMATION.FAST / 1000 }}
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
          The Data Engine for <br />
          <span className="text-gradient">Secure AI.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          The infrastructure for high-performance AI, optimized for massive scale. Securely train,
          evaluate, and deploy at planetary speed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton variant="primary" size="lg" shimmer className="w-full sm:w-auto">
            Get Started
          </MagneticButton>
          <MagneticButton variant="outline" size="lg" className="w-full sm:w-auto">
            Read the Docs
          </MagneticButton>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8"
        >
          <div className="flex items-center gap-2 text-on-surface-variant text-sm">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant text-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Free tier available</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant text-sm">
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span>Setup in 5 minutes</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-on-surface-variant text-xs uppercase tracking-widest">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-on-surface-variant"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
