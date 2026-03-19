import { motion } from 'framer-motion';
import { useDashboardStore } from '../store/dashboardStore';

export function AuditLogs() {
  const { data } = useDashboardStore();

  const borderColorMap = {
    primary: 'border-primary/40',
    secondary: 'border-secondary/40',
    tertiary: 'border-tertiary/40',
  };

  return (
    <motion.div
      className="lg:col-span-2 md:col-span-4 bg-surface-container-low border border-outline-variant/10 rounded-xl overflow-hidden flex flex-col"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high/30">
        <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Audit Logs</span>
        <span className="text-[10px] font-mono text-on-surface-variant">{data.logs.length} New</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[250px] scrollbar-hide">
        {data.logs.map((log, index) => (
          <motion.div
            key={log.id}
            className={`flex gap-3 items-start border-l-2 ${borderColorMap[log.type]} pl-3 py-1`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <div className="flex-1">
              <p className="text-xs font-medium text-on-surface">{log.title}</p>
              <p className="text-[10px] text-on-surface-variant mt-1">{log.description}</p>
            </div>
            <span className="text-[9px] font-mono text-outline">{log.timestamp}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
