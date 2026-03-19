import { motion } from 'framer-motion'

const footerLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Status', href: '#' },
]

export function SolutionsFooter() {
  return (
    <footer className="bg-[#0e0e0e] w-full py-12 border-t border-[#42484b]/10">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <span className="text-primary font-bold tracking-tighter">Neural OS</span>
          <span className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-medium">
            © 2026 NEURAL OS. ALL RIGHTS RESERVED.
          </span>
        </motion.div>

        <div className="flex gap-8 font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-medium">
          {footerLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-on-surface-variant hover:text-primary-container transition-colors opacity-80 hover:opacity-100"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
