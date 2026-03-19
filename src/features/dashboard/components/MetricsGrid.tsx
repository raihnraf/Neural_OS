import { motion } from 'framer-motion';
import { useDashboardStore } from '../store/dashboardStore';

export function MetricsGrid() {
  const { data } = useDashboardStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
      {/* Latency Card */}
      <motion.div
        className="md:col-span-2 bg-surface-container-low p-6 border border-outline-variant/10 rounded-xl flex flex-col justify-between hover:border-primary/30 transition-all group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Mean Latency</p>
            <h3 className="text-4xl font-bold text-primary mt-2 group-hover:scale-105 transition-transform origin-left">
              {data.latency.toFixed(1)}
              <span className="text-lg font-normal ml-1">ms</span>
            </h3>
          </div>
          <span className="material-symbols-outlined text-primary/40">timer</span>
        </div>
        <div className="mt-8 h-12 flex items-end gap-1">
          {data.latencyHistory.map((value, index) => (
            <motion.div
              key={index}
              className="w-full bg-primary/20 rounded-t-sm"
              style={{ height: `${(value / 30) * 100}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${(value / 30) * 100}%` }}
              transition={{ delay: 0.2 + index * 0.05 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Throughput Card */}
      <motion.div
        className="md:col-span-2 bg-surface-container-low p-6 border border-outline-variant/10 rounded-xl flex flex-col justify-between hover:border-secondary/30 transition-all group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Throughput</p>
            <h3 className="text-4xl font-bold text-secondary mt-2 group-hover:scale-105 transition-transform origin-left">
              {(data.throughput / 1000).toFixed(1)}k
              <span className="text-lg font-normal ml-1">req/s</span>
            </h3>
          </div>
          <span className="material-symbols-outlined text-secondary/40">speed</span>
        </div>
        <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
          <span>L: 4.2k</span>
          <div className="flex-1 mx-4 h-px bg-outline-variant/20 relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-secondary h-full shadow-[0_0_8px_#ddb7ff]"
              initial={{ width: 0 }}
              animate={{ width: '66%' }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
          </div>
          <span>H: 12.0k</span>
        </div>
      </motion.div>

      {/* Accuracy Card */}
      <motion.div
        className="md:col-span-2 bg-surface-container-low p-6 border border-outline-variant/10 rounded-xl hover:border-tertiary/30 transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Model Accuracy</p>
        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-3xl font-bold text-tertiary">{data.accuracy.toFixed(1)}%</h3>
          <div className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded text-[10px] font-bold">+0.4%</div>
        </div>
        <p className="text-[10px] text-on-surface-variant/60 mt-4 leading-relaxed">
          Top-1 accuracy weighted across 4 active neural nodes.
        </p>
      </motion.div>
    </div>
  );
}
