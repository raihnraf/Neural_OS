import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { MagneticButton } from '../components/MagneticButton'
import { MaterialSymbols } from '../components/MaterialSymbols'
import { cn } from '@/utils'

interface TopNavProps {
  activePage?: string
}

export function TopNav({ activePage = '' }: TopNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

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
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-8 h-full">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="text-xl font-bold tracking-tighter text-primary font-headline">
            Neural OS
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-['Inter'] font-semibold tracking-tight text-sm">
          {navLinks.map((link, index) => {
            const isActive =
              link.href === location.pathname ||
              link.name.toLowerCase() === activePage.toLowerCase()
            return (
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
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-on-surface-variant hover:text-primary'
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded transition-all active:scale-95"
              aria-label="Terminal"
            >
              <MaterialSymbols icon="terminal" className="text-sm" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded transition-all active:scale-95"
              aria-label="Settings"
            >
              <MaterialSymbols icon="settings" className="text-sm" />
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton variant="primary" size="sm" shimmer>
              Connect Node
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
