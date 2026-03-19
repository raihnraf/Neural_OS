import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MaterialSymbols, MagneticButton, TopNav } from '@/components'

const docLinks = [
  { category: 'GETTING STARTED', title: 'Quickstart Guide' },
  { category: 'CORE API', title: 'Neural Engine v2' },
  { category: 'PROTOCOL', title: 'L3 Connectivity' },
  { category: 'SECURITY', title: 'Auth Handshakes' },
]

const whitepapers = [
  { title: 'Neural OS Consensus V2', size: 'PDF • 4.2 MB' },
  { title: 'Sharding Intelligence', size: 'PDF • 1.8 MB' },
]

const caseStudies = [
  { title: 'Financial Fractals', tag: 'FinTech' },
  { title: 'Bio-Node Systems', tag: 'Health' },
]

export default function ResourcesPage() {
  return (
    <main className="pt-16 bg-background min-h-screen">
      <TopNav activePage="resources" />
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Hero Section */}
        <header className="mb-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-highest border-l border-secondary mb-6"
        >
          <span className="text-[0.6875rem] uppercase tracking-[0.1em] font-label text-secondary">
            Knowledge Base v4.02
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-primary mb-6 font-headline leading-tight"
        >
          Architectural{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            Intelligence
          </span>{' '}
          Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-on-surface-variant leading-relaxed"
        >
          Access technical specifications, deployment frameworks, and market insights for the planetary-scale neural operating system.
        </motion.p>
      </header>

      {/* Bento Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Featured: Documentation (Large Box) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 group relative overflow-hidden bg-surface-container-low p-8 border border-outline-variant/20 rounded-xl bento-glow transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <MaterialSymbols icon="menu_book" className="text-primary scale-150" filled />
                <span className="text-[0.6875rem] font-mono tracking-widest text-on-surface-variant">
                  DOCS.ENV_STABLE
                </span>
              </div>
              <h2 className="text-3xl font-bold text-on-surface mb-4 font-headline">
                Developer Documentation
              </h2>
              <p className="text-on-surface-variant max-w-md mb-8">
                Complete API references, SDK implementations, and system architecture diagrams for building autonomous nodes on Neural OS.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {docLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to="/docs"
                  className="flex flex-col p-4 bg-surface-container border border-outline-variant/10 rounded hover:border-primary/50 transition-all"
                >
                  <span className="text-xs text-primary font-bold mb-1">{link.category}</span>
                  <span className="text-sm">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Highlight (Vertical Tall) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 group bg-surface-container-low border border-outline-variant/20 rounded-xl bento-glow transition-all overflow-hidden flex flex-col"
        >
          <div className="h-48 bg-surface-container-highest relative overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvfDNEPOVEn-nLjsTqnVVKhHzp7xUPsFkS6EMsDjmysMkeZoUO1kxuDNtCnv-PQF1jR03Qv5vutEqtvWfKrXl9yAQ0mhEID5ptaPbkGD97_SI-0FDmFfNAnvGOsP-NNNWJBS5QbeWCb_W-REuJz_0SXMJsWCdICq16MtpKxjy69HbJXMCd5c-3SjWxHiUTPlCy0fRCE1rxADQHR3Tw4asYjjEPDso_RM71MQXD3BA7uUgCR330RzqE-O9h04peT1aNRN5n8M40Zm0_"
              alt="Abstract cyan and purple light waves on black background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-[0.6875rem] font-mono text-secondary mb-2 tracking-widest">
              LATEST UPDATES
            </span>
            <h3 className="text-xl font-bold mb-4 font-headline">
              Scaling Neural Latency to sub-1ms
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Explore our breakthrough in decentralized compute orchestration and how we solved the consensus bottleneck.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-outline italic">5 min read</span>
              <Link
                to="/blog"
                className="text-primary flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
              >
                Read Post{' '}
                <MaterialSymbols icon="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Whitepapers (Medium Square) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 bg-surface-container-low p-8 border border-outline-variant/20 rounded-xl bento-glow transition-all"
        >
          <div className="mb-6">
            <MaterialSymbols icon="description" className="text-secondary text-3xl mb-4" />
            <h3 className="text-xl font-bold font-headline mb-3">Whitepapers</h3>
            <p className="text-sm text-on-surface-variant">
              Deep dives into the mathematical foundation of the Neural OS core protocol.
            </p>
          </div>
          <ul className="space-y-4">
            {whitepapers.map((paper, idx) => (
              <li key={idx} className="flex items-start gap-3 group cursor-pointer">
                <MaterialSymbols icon="download" className="text-primary text-sm mt-1" />
                <div>
                  <p className="text-sm group-hover:text-primary transition-colors">{paper.title}</p>
                  <p className="text-[0.6rem] text-outline font-mono">{paper.size}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Case Studies (Medium Square) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 bg-surface-container-low p-8 border border-outline-variant/20 rounded-xl bento-glow transition-all relative overflow-hidden"
        >
          <div className="relative z-10">
            <MaterialSymbols icon="insights" className="text-tertiary text-3xl mb-4" />
            <h3 className="text-xl font-bold font-headline mb-3">Case Studies</h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Real-world implementation scenarios across enterprise sectors.
            </p>
            <div className="space-y-3">
              {caseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-surface-container-lowest rounded border border-outline-variant/10 flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <span className="text-sm">{study.title}</span>
                  <span className="text-[0.6rem] bg-on-secondary-fixed-variant/20 text-secondary px-2 py-0.5 rounded uppercase">
                    {study.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 blur-3xl rounded-full"></div>
        </motion.div>

        {/* Assets / Branding (Medium Horizontal) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 group relative overflow-hidden bg-[#0e0e0e] p-8 border border-outline-variant/20 rounded-xl bento-glow transition-all"
        >
          <div className="flex flex-col h-full">
            <MaterialSymbols icon="palette" className="text-primary-fixed text-3xl mb-4" />
            <h3 className="text-xl font-bold font-headline mb-3">Asset Library</h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Logo kits, UI components, and brand guidelines for ecosystem partners.
            </p>
            <MagneticButton
              variant="outline"
              className="mt-auto w-full py-3 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2"
            >
              Open Portal{' '}
              <MaterialSymbols icon="open_in_new" className="text-xs" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Ecosystem Partners Section */}
      <section className="mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-6 text-on-surface">
              Built for the <br />
              <span className="text-primary">Next Intelligence Era</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Our resources are crafted to accelerate the transition from static cloud services to dynamic neural environments. Every whitepaper and API reference is a building block for the decentralized web.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">240+</span>
                <span className="text-[0.6875rem] uppercase tracking-wider text-outline">
                  Open Repo Contributors
                </span>
              </div>
              <div className="w-px h-12 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">1.2M</span>
                <span className="text-[0.6875rem] uppercase tracking-wider text-outline">
                  Documentation Views
                </span>
              </div>
            </div>
          </div>
          <div className="relative bg-surface-container-low rounded-xl border border-outline-variant/20 p-1">
            <div className="aspect-video rounded-lg overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPvjLkVjU1o8UnItz1zIzSi17dGp2GOilYh_efJfOoyKYAN-fm-urtCZ5fnphKYZ3A1S1qZIfOGn4pDuRvsUBF4H_0Ygp8tBFGckc0kNJH8Pm384JBWW2xVnHDFCGV7I-ypqge4m738VPcHjy5g7xc9Gl-HE04V_rF89mnlLzdHwSkMbsr--nMxa11d9a7waInQ7p91zWHpeEWEAJvyiHxl55u4ANQ3xa1YQYFoKksxf-Pe8QitNC1fnLMSS9ZPeOaXijD-yqnE0r8"
                alt="High tech circuit board with glowing blue lines"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MaterialSymbols icon="play_arrow" className="text-primary text-3xl" filled />
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-mono text-outline uppercase tracking-[0.2em] mb-2">
                Internal Simulation v1.0
              </p>
              <p className="text-sm font-medium">
                Visualizing the Axiom Matrix deployment sequence.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}
