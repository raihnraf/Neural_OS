import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MagneticButton } from '../../components/MagneticButton'
import { cn } from '@/utils'

export function SolutionsNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Developers', href: '/developers' },
    { name: 'Network', href: '/network' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Dashboard', href: '/dashboard' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 h-16',
        isScrolled
          ? 'bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_0_15px_rgba(187,222,242,0.05)]'
          : 'bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/20'
      )}
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-6 h-full">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="text-xl font-bold tracking-tighter text-primary font-headline">
            Neural OS
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-['Inter'] font-semibold tracking-tight text-sm">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className={cn(
                  'transition-colors',
                  link.name === 'Solutions'
                    ? 'text-primary border-b-2 border-primary-container pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded transition-all active:scale-95"
              aria-label="Terminal"
            >
              <span className="material-symbols-outlined text-sm">terminal</span>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded transition-all active:scale-95"
              aria-label="Settings"
            >
              <span className="material-symbols-outlined text-sm">settings</span>
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton variant="primary" size="sm">
              Get Started
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
