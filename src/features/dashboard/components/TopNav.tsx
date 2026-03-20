import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const mainNavItems = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Developers', path: '/developers' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Resources', path: '/resources' },
]

export function TopNav() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_0_15px_rgba(187,222,242,0.05)]">
      <div className="flex justify-between items-center h-16 px-6 max-w-[1440px] mx-auto">
        {/* Logo + Main Nav */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <span className="text-xl font-bold tracking-tighter text-primary">Neural OS</span>
          </Link>
          <div className="hidden md:flex gap-6 font-body font-semibold tracking-tight">
            {mainNavItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== '/dashboard' && location.pathname.startsWith(item.path))
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    transition-colors
                    ${
                      isActive
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'text-on-surface-variant hover:text-primary'
                    }
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-surface-container-lowest border border-outline-variant/20 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">
              search
            </span>
            <input
              className="bg-transparent border-none text-xs focus:ring-0 text-on-surface w-48 placeholder-on-surface-variant/50"
              placeholder="Search systems..."
              type="text"
            />
            <span className="text-[10px] text-outline-variant font-mono">⌘K</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <motion.button
              className="p-2 hover:bg-surface-container-low transition-all duration-200 rounded-lg text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined">terminal</span>
            </motion.button>
            <motion.button
              className="p-2 hover:bg-surface-container-low transition-all duration-200 rounded-lg text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined">settings</span>
            </motion.button>
          </div>

          <motion.button
            className="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
