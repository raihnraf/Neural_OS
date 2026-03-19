import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CountUpProps {
  value: string
  className?: string
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Extract number from value (e.g., "99.9%" -> 99.9, "10B+" -> 10)
  const numValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const suffix = value.replace(/[0-9.]/g, '')
  
  const count = useMotionValue(0)
  const rounded = useSpring(count, {
    stiffness: 50,
    damping: 20,
  })

  useEffect(() => {
    if (isInView) {
      const controls = rounded.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(value.includes('.') ? 1 : 0) + suffix
        }
      })

      const timeout = setTimeout(() => {
        count.set(numValue)
      }, 100)

      return () => {
        controls()
        clearTimeout(timeout)
      }
    }
  }, [isInView, numValue, suffix, rounded, count, value])

  return (
    <span
      ref={ref}
      className={className}
      suppressHydrationWarning
    >
      0{suffix}
    </span>
  )
}
