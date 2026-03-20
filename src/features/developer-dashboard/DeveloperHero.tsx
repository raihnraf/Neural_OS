import { FileText, Code } from 'lucide-react'

export function DeveloperHero() {
  return (
    <header className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary bg-secondary-container/10 px-2 py-1 border-l border-secondary">
            v4.2.0 Stable
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-on-surface mb-6">
          Engineer with <span className="text-primary">Neural Precision.</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
          Access the world's most advanced planetary-scale intelligence engine through our
          high-concurrency API and comprehensive SDKs.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 lg:justify-end">
        <div className="flex items-center gap-3 p-4 bg-surface-container border border-outline-variant/10 rounded-lg">
          <div className="w-8 h-8 flex items-center justify-center bg-surface-container-highest rounded text-primary">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
              Documentation
            </div>
            <div className="text-sm font-semibold">Quick Start Guide</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-surface-container border border-outline-variant/10 rounded-lg">
          <div className="w-8 h-8 flex items-center justify-center bg-surface-container-highest rounded text-secondary">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
              API Status
            </div>
            <div className="text-sm font-semibold">99.99% Uptime</div>
          </div>
        </div>
      </div>
    </header>
  )
}
