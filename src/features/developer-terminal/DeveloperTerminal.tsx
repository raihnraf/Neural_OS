import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { InteractiveTerminal } from '../../components/InteractiveTerminal'
import { codeSnippetData } from '../../data/mockData'

export function DeveloperTerminal() {
  const features = [
    'RESTful API with 99.9% uptime',
    'SDKs for Python, Node.js, and Go',
    'CLI for automated pipeline management',
  ]

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-on-surface mb-6">
            Built for Engineers
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Integrate our data engine into your existing stack with three lines of code.
            Support for all major frameworks and native cloud providers.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-primary"
              >
                <Check className="w-5 h-5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <InteractiveTerminal code={codeSnippetData.code} language={codeSnippetData.language} />
        </motion.div>
      </div>
    </section>
  )
}
