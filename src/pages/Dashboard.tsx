import { motion } from 'framer-motion';
import { DashboardLayout, MetricsGrid, SignalDecomposition, AuditLogs, ModelRepository } from '../features/dashboard/components';

export function Dashboard() {
  return (
    <DashboardLayout>
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-2 block">
            System Pulse / Live
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-surface">
            Compute Cluster Delta-7
          </h1>
          <p className="text-on-surface-variant mt-2 max-w-xl">
            Real-time inference monitoring across planetary-scale neural nodes.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-container px-4 py-2 border border-outline-variant/10 rounded-lg flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(225,250,255,0.6)] animate-pulse"></div>
            <span className="text-xs font-medium text-tertiary">SYNCED</span>
          </div>
          <div className="bg-surface-container px-4 py-2 border border-outline-variant/10 rounded-lg">
            <span className="text-xs text-on-surface-variant mr-2">UPTIME:</span>
            <span className="text-xs font-mono text-primary">99.998%</span>
          </div>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <MetricsGrid />

      {/* Signal Decomposition + Audit Logs */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <SignalDecomposition />
        <AuditLogs />
      </div>

      {/* Model Repository */}
      <ModelRepository />
    </DashboardLayout>
  );
}
