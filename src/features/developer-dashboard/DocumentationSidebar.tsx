export function DocumentationSidebar() {
  return (
    <div className="col-span-12 lg:col-span-3 space-y-8">
      <section>
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-4">
          Core Concepts
        </h3>
        <nav className="flex flex-col gap-1">
          <a
            className="px-4 py-2 bg-surface-container-low text-primary border-l-2 border-primary text-sm font-medium"
            href="#authentication"
          >
            Authentication
          </a>
          <a
            className="px-4 py-2 hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface text-sm transition-all"
            href="#neural-nodes"
          >
            Neural Nodes
          </a>
          <a
            className="px-4 py-2 hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface text-sm transition-all"
            href="#tokenization"
          >
            Tokenization
          </a>
          <a
            className="px-4 py-2 hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface text-sm transition-all"
            href="#rate-limits"
          >
            Rate Limits
          </a>
        </nav>
      </section>

      <section>
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-4">
          API Reference
        </h3>
        <nav className="flex flex-col gap-1">
          <div className="flex items-center gap-2 px-4 py-2 text-on-surface-variant text-xs font-mono">
            <span className="bg-tertiary-container/20 text-tertiary px-1 rounded text-[10px] font-bold">
              GET
            </span>
            /v1/models
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-on-surface-variant text-xs font-mono">
            <span className="bg-primary-container/20 text-primary px-1 rounded text-[10px] font-bold">
              POST
            </span>
            /v1/inference
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-on-surface-variant text-xs font-mono">
            <span className="bg-secondary-container/20 text-secondary px-1 rounded text-[10px] font-bold">
              PATCH
            </span>
            /v1/tuning
          </div>
        </nav>
      </section>

      <div className="p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-xl">
        <div className="text-xs font-bold text-secondary mb-2 uppercase tracking-tighter">
          Support
        </div>
        <p className="text-[11px] text-on-surface-variant mb-4 leading-tight">
          Need dedicated assistance for enterprise scale?
        </p>
        <button className="w-full text-xs font-bold border border-outline-variant/30 py-2 hover:bg-surface-container transition-colors">
          Talk to Architecture
        </button>
      </div>
    </div>
  )
}
