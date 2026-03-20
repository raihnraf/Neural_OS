import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ButtonHTMLAttributes, forwardRef, useRef, useCallback } from 'react'
import { cn } from '@/utils'

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  shimmer?: boolean
  children: React.ReactNode
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, variant = 'primary', size = 'md', shimmer = false, children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { stiffness: 150, damping: 15 }
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)

    const handleMouseMove = useCallback(
      (e: React.MouseEvent) => {
        if (!buttonRef.current) return

        const rect = buttonRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const offsetX = e.clientX - centerX
        const offsetY = e.clientY - centerY

        x.set(offsetX * 0.3)
        y.set(offsetY * 0.3)
      },
      [x, y]
    )

    const handleMouseLeave = useCallback(() => {
      x.set(0)
      y.set(0)
    }, [x, y])

    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-primary text-on-primary hover:bg-primary/90 focus:ring-primary',
      secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90 focus:ring-secondary',
      outline:
        'border border-outline-variant/30 text-primary hover:bg-surface-container-high focus:ring-outline',
      ghost:
        'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 focus:ring-outline',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-8 py-4 text-lg',
    }

    const shimmerClass = shimmer ? 'shimmer-btn' : ''

    return (
      <motion.div
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <button
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], shimmerClass, className)}
          {...props}
        >
          {children}
        </button>
      </motion.div>
    )
  }
)

MagneticButton.displayName = 'MagneticButton'
