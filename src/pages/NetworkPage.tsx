import { motion } from 'framer-motion'
import { MaterialSymbols, MagneticButton, TopNav } from '@/components'

const latencyData = [
  { region: 'North America', latency: '0.8ms', percentage: 92 },
  { region: 'Europe Central', latency: '1.2ms', percentage: 88 },
  { region: 'Asia Pacific', latency: '4.5ms', percentage: 74 },
]

const regionStatus = [
  { name: 'NYC-01', status: 'Operational', statusColor: 'primary' },
  { name: 'LON-04', status: 'Operational', statusColor: 'primary' },
  { name: 'TKY-02', status: 'Maintenance', statusColor: 'secondary' },
  { name: 'SIN-01', status: 'Operational', statusColor: 'primary' },
]

const complianceBadges = ['GDPR', 'SOC2 TYPE II', 'HIPAA', 'ISO 27001']

const uptimeBars = [80, 75, 85, 90, 88, 95, 82, 89, 92, 98, 91, 85, 70, 75, 90, 94, 88, 82, 85, 92]

export default function NetworkPage() {
  return (
    <main className="pt-16 bg-background min-h-screen">
      <TopNav activePage="network" />
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Hero Section / Global Visualization */}
        <section className="relative mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block bg-surface-container-highest text-secondary border-l-2 border-secondary px-3 py-1 text-[0.6875rem] font-bold tracking-[0.1em] uppercase mb-6"
          >
            Global Backbone
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-semibold tracking-tight text-on-surface mb-8 leading-[1.1]"
          >
            Planetary scale intelligence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg max-w-lg mb-12"
          >
            Neural OS operates across 48 global regions with sub-millisecond inter-node latency. A self-healing mesh designed for the next epoch of compute.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-surface-container-low p-6 rounded-lg border-l border-primary/20">
              <div className="text-primary text-3xl font-bold mb-1">99.999%</div>
              <div className="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest">
                Network Uptime
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg border-l border-secondary/20">
              <div className="text-secondary text-3xl font-bold mb-1">&lt;12ms</div>
              <div className="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest">
                Global P99
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Map Visualization */}
        <div className="lg:col-span-7 relative h-[600px] rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 opacity-50"></div>
          <img
            alt="Planetary data grid"
            className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-[20s]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRh5f_iyOLEQRPLh5mPcLCOtLXwuhtaCb4h0olwDYMz5Y9dKMDrdEi5VZ-_3JYMS1Brql16T9M67jtpIubb_mtXaqekhd4rRxcj47UUsTLERs1iN82rgEplkW_etoZw1Ni5JmbjifpHPs7t47DiGGh-UWqVuN8Msptutcs1huiocwsS9z63TyPQSLOhm4w-B7LLK_bFxCGqEuFOv_Clkpj397kk4wRrSb29gg-O7iszc8DCvThFXCwiSaJnnh4fBubTkrp536MOAsu"
          />
          
          {/* Floating Data Pointers */}
          <div className="absolute top-1/4 left-1/3 bg-surface-container-highest/80 backdrop-blur px-3 py-1 rounded-full border border-primary/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[0.6875rem] font-mono text-primary">US-EAST-1: ACTIVE</span>
          </div>
          <div className="absolute bottom-1/3 right-1/4 bg-surface-container-highest/80 backdrop-blur px-3 py-1 rounded-full border border-secondary/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
            <span className="text-[0.6875rem] font-mono text-secondary">EU-WEST-2: SYNCING</span>
          </div>
          <div className="absolute top-1/2 right-1/3 bg-surface-container-highest/80 backdrop-blur px-3 py-1 rounded-full border border-tertiary/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
            <span className="text-[0.6875rem] font-mono text-tertiary">AP-SOUTH-1: PEAK</span>
          </div>
        </div>
      </section>

      {/* Bento Grid: Status and Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
        {/* Node Latency */}
        <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between group hover:border-primary/30 transition-all">
          <div>
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-xl font-semibold">Node Latency</h3>
              <MaterialSymbols icon="speed" className="text-primary text-2xl" />
            </div>
            <div className="space-y-6">
              {latencyData.map((data, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="w-24 text-[0.6875rem] uppercase tracking-tighter text-on-surface-variant">
                    {data.region}
                  </span>
                  <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: `${data.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-[0.6875rem] font-mono text-primary">
                    {data.latency}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-[0.6875rem] uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
            <MaterialSymbols icon="info" className="text-xs" />
            Real-time cross-region pings
          </div>
        </div>

        {/* Region Availability */}
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all">
          <h3 className="text-xl font-semibold mb-6">Region Status</h3>
          <div className="space-y-4">
            {regionStatus.map((region, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center py-2 border-b border-outline-variant/10"
              >
                <span className="text-sm font-medium">{region.name}</span>
                <span
                  className={`text-[0.6875rem] text-${region.statusColor} bg-${region.statusColor}/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider`}
                  style={{
                    color: region.statusColor === 'secondary' ? '#ddb7ff' : '#ecf7ff',
                    backgroundColor: region.statusColor === 'secondary' ? 'rgba(221, 183, 255, 0.1)' : 'rgba(236, 247, 255, 0.1)'
                  }}
                >
                  {region.status}
                </span>
              </div>
            ))}
          </div>
          <MagneticButton
            variant="outline"
            className="w-full mt-8 py-3 text-[0.6875rem] font-bold uppercase tracking-widest"
          >
            View All 48 Regions
          </MagneticButton>
        </div>

        {/* Compliance Card */}
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary/10 blur-3xl rounded-full"></div>
          <div>
            <MaterialSymbols icon="gavel" className="text-secondary mb-6 text-3xl" />
            <h3 className="text-xl font-semibold mb-2">Global Compliance</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Localized data sovereignty with automated regional routing.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {complianceBadges.map((badge, idx) => (
              <span
                key={idx}
                className="text-[0.6875rem] font-mono border border-outline-variant px-2 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Network Traffic / Uptime */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Historical Reliability
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Neural OS maintains transparent uptime metrics for all core routing protocols and edge gateways.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <div className="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest mb-1">
                Average Payload
              </div>
              <div className="text-xl font-bold font-mono">24.8 GB/s</div>
            </div>
            <div className="text-right border-l border-outline-variant pl-4">
              <div className="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest mb-1">
                Active Nodes
              </div>
              <div className="text-xl font-bold font-mono">12,402</div>
            </div>
          </div>
        </div>

        {/* Uptime Graph */}
        <div className="w-full h-80 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex items-end p-8 gap-1 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
          
          {/* Mock Bar Chart for Uptime */}
          {uptimeBars.map((height, idx) => (
            <div
              key={idx}
              className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[80%] rounded-t-sm"
              style={{ height: `${height}%` }}
            ></div>
          ))}

          {/* Overlay Label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-surface-container-highest/90 border border-outline-variant/30 px-6 py-3 rounded-lg backdrop-blur">
              <span className="text-primary font-mono font-bold">
                99.9997% AVERAGE RELIABILITY (LAST 365D)
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6 px-2">
          <span className="text-[0.6875rem] font-mono text-on-surface-variant">JAN 2023</span>
          <span className="text-[0.6875rem] font-mono text-on-surface-variant">PRESENT DAY</span>
        </div>
      </section>

      {/* Node Distribution CTA */}
      <section className="bg-surface-container-low rounded-xl p-12 border border-outline-variant/10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
        <h2 className="text-3xl font-semibold mb-6">Join the Decentralized Fabric</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto mb-10">
          Neural OS is expanding. Deploy your own high-performance compute node and contribute to the global planetary intelligence engine while earning protocol rewards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton variant="primary" size="lg">
            Download Node Client
          </MagneticButton>
          <MagneticButton variant="outline" size="lg">
            Read Integration Docs
          </MagneticButton>
        </div>
      </section>
      </div>
    </main>
  )
}
