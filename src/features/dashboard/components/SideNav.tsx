import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { icon: 'dashboard', label: 'Overview', path: '/dashboard' },
  { icon: 'memory', label: 'Models', path: '/dashboard/models' },
  { icon: 'key', label: 'API Keys', path: '/dashboard/api-keys' },
  { icon: 'database', label: 'Logs', path: '/dashboard/logs' },
  { icon: 'shield', label: 'Security', path: '/dashboard/security' },
]

export function SideNav() {
  const location = useLocation()

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/20 bg-surface-container-lowest z-40 hidden md:block">
      <div className="flex flex-col h-full pt-20">
        {/* User Profile */}
        <div className="px-4 mb-8">
          <div className="flex items-center gap-3 p-3 bg-surface-container rounded-xl border border-outline-variant/10">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">account_circle</span>
            </div>
            <div>
              <p className="text-sm font-bold text-primary tracking-tight">System Admin</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                Neural Node 01
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 font-body text-sm tracking-wide">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  className={`
                    flex items-center gap-3 px-4 py-3 cursor-pointer transition-all
                    ${
                      isActive
                        ? 'bg-surface-container text-primary border-l-2 border-secondary'
                        : 'text-on-surface-variant hover:bg-surface-container/50 hover:text-primary'
                    }
                  `}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-outline-variant/10">
          <motion.button
            className="w-full py-2.5 bg-secondary-container/20 border border-secondary/30 text-secondary-fixed-dim rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-secondary-container/40 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Deploy Model
          </motion.button>

          <div className="mt-6 space-y-2">
            <Link to="/docs">
              <div className="text-on-surface-variant hover:text-primary transition-all flex items-center gap-3 px-2 py-2 cursor-pointer text-xs">
                <span className="material-symbols-outlined text-sm">description</span>
                <span>Documentation</span>
              </div>
            </Link>
            <Link to="/support">
              <div className="text-on-surface-variant hover:text-primary transition-all flex items-center gap-3 px-2 py-2 cursor-pointer text-xs">
                <span className="material-symbols-outlined text-sm">help</span>
                <span>Support</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
