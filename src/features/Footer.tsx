import { motion } from 'framer-motion'

export function Footer() {
  const links = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ]

  return (
    <footer className="bg-surface-container-lowest w-full py-12 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <div className="text-lg font-black text-primary">
              NEURAL OS
            </div>
            <p className="font-body text-[0.6875rem] uppercase tracking-[0.1em] font-light text-primary-container opacity-70">
              © 2026 NEURAL OS. Planetary-scale intelligence engine.
            </p>
          </motion.div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-body text-[0.6875rem] uppercase tracking-[0.1em] font-light">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-on-surface-variant hover:text-secondary transition-colors duration-200 opacity-70 hover:opacity-100"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
