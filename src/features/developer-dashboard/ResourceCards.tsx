import { Users, BarChart3, Key, ArrowUpRight } from 'lucide-react'

export function ResourceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      {/* Community Card */}
      <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:border-secondary transition-all group">
        <Users className="text-secondary mb-4 w-9 h-9" />
        <h4 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
          Developer Community
        </h4>
        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
          Join 50k+ engineers in our Discord and GitHub Discussions.
        </p>
        <a
          className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2"
          href="#community"
        >
          Join Server <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* API Status Card */}
      <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:border-tertiary transition-all group">
        <div className="flex justify-between items-start mb-4">
          <BarChart3 className="text-tertiary w-9 h-9" />
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-tertiary rounded-full animate-pulse" />
            <div className="w-1 h-4 bg-tertiary/60 rounded-full" />
            <div className="w-1 h-4 bg-tertiary/30 rounded-full" />
          </div>
        </div>
        <h4 className="text-lg font-semibold mb-2 group-hover:text-tertiary transition-colors">
          System Status
        </h4>
        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
          Global health metrics across all neural nodes and clusters.
        </p>
        <a
          className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2"
          href="#status"
        >
          View Metrics <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* API Keys Card */}
      <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:border-primary transition-all group">
        <Key className="text-primary mb-4 w-9 h-9" />
        <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          Manage API Keys
        </h4>
        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
          Provision secret keys and monitor usage quotas in real-time.
        </p>
        <a
          className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2"
          href="#keys"
        >
          Dashboard <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
