import { motion } from 'framer-motion';
import { useDashboardStore } from '../store/dashboardStore';
import type { Model } from '../types/dashboard.types';

const statusConfig = {
  deployed: {
    color: 'primary',
    label: 'DEPLOYED',
    bg: 'bg-primary/10',
    text: 'text-primary',
  },
  testing: {
    color: 'secondary',
    label: 'TESTING',
    bg: 'bg-secondary/10',
    text: 'text-secondary',
  },
  idle: {
    color: 'tertiary',
    label: 'IDLE',
    bg: 'bg-tertiary/10',
    text: 'text-tertiary',
  },
};

export function ModelRepository() {
  const { data } = useDashboardStore();

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-on-surface">Model Repository</h2>
          <p className="text-xs text-on-surface-variant mt-1">Active deployments and model health indices.</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            className="bg-surface-container-high text-on-surface px-3 py-1.5 rounded text-xs border border-outline-variant/20 hover:bg-surface-bright transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Filter
          </motion.button>
          <motion.button
            className="bg-surface-container-high text-on-surface px-3 py-1.5 rounded text-xs border border-outline-variant/20 hover:bg-surface-bright transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Export
          </motion.button>
        </div>
      </div>

      <motion.div
        className="bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high/50 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold border-b border-outline-variant/10">
              <th className="px-6 py-4">Model Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Architecture</th>
              <th className="px-6 py-4">Last Sync</th>
              <th className="px-6 py-4">Usage</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10 text-sm">
            {data.models.map((model, index) => (
              <motion.tr
                key={model.id}
                className="hover:bg-surface-container transition-colors group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <ModelRow model={model} />
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}

function ModelRow({ model }: { model: Model }) {
  const config = statusConfig[model.status];

  return (
    <>
      <td className="px-6 py-4 font-medium text-primary">{model.name}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1.5 ${config.bg} ${config.text} px-2 py-0.5 rounded-full text-[10px] font-bold`}>
          <span className={`w-1.5 h-1.5 rounded-full ${config.text === 'text-primary' ? 'animate-pulse' : ''} bg-current`}></span>
          {config.label}
        </span>
      </td>
      <td className="px-6 py-4 text-on-surface-variant text-xs font-mono">{model.architecture}</td>
      <td className="px-6 py-4 text-on-surface-variant text-xs">{model.lastSync}</td>
      <td className="px-6 py-4">
        <div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${config.text === 'text-primary' ? 'bg-primary shadow-[0_0_8px_#ecf7ff]' : config.text === 'text-secondary' ? 'bg-secondary shadow-[0_0_8px_#ddb7ff]' : 'bg-tertiary'}`}
            initial={{ width: 0 }}
            animate={{ width: `${model.usage}%` }}
            transition={{ delay: 1, duration: 0.5 }}
          />
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-lg">more_vert</span>
        </button>
      </td>
    </>
  );
}
