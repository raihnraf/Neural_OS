import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/Button'
import { useAppStore } from '../../store/useAppStore'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  useAppStore() // Access store for potential future use

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Developers', href: '#developers' },
    { name: 'Network', href: '#network' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_0_15px_rgba(187,222,242,0.05)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-primary"
        >
          NEURAL_OS
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-body font-medium text-sm tracking-tight">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:block text-on-surface-variant text-sm font-medium hover:text-primary transition-colors"
          >
            Sign In
          </motion.button>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="primary" size="sm" shimmer>
              Deploy Node
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
