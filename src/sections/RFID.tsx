import { Radio, BarChart3, Package, Truck, ScanLine, Clock } from 'lucide-react';

const rfidFeatures = [
  { icon: Package, label: 'Inventory Visibility' },
  { icon: ScanLine, label: 'WIP Tracking' },
  { icon: Truck, label: 'Shipping Validation' },
  { icon: BarChart3, label: 'Cycle Counting' },
  { icon: Clock, label: 'Real-Time Data' },
];

const stats = [
  { value: '99%', label: 'Inventory Accuracy' },
  { value: '50%', label: 'Less Search Time' },
  { value: '24h', label: 'Setup Time' },
  { value: '<12', label: 'Months ROI' },
];

export default function RFID() {
  return (
    <section id="rfid" className="relative bg-[var(--bg-void)] section-padding overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,159,159,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="reveal">
            <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
              RFID Solutions
            </span>
            <h2
              className="mt-4 font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
            >
              Real-Time RFID Visibility for Epicor Users
            </h2>
            <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
              Quartz Group is the exclusive Epicor partner for Xemelgo, helping Epicor users
              connect RFID data into real operational workflows. Manufacturers and distributors
              often have inventory, WIP, assets, and shipments moving faster than their ERP data
              can keep up. We help close that gap.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {rfidFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 text-[var(--text-secondary)]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[var(--accent-teal)]" />
                    </div>
                    <span className="text-sm">{feature.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://quartztrack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit QuartzTrack
              </a>
              <a href="#contact" className="btn-outline">
                Talk to Quartz About RFID
              </a>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="reveal grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-white/5 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span
                  className="font-mono font-bold text-[var(--accent-teal)] block"
                  style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
                >
                  {stat.value}
                </span>
                <span className="text-[var(--text-secondary)] text-sm mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Key message card */}
            <div className="col-span-2 bg-gradient-to-r from-[var(--accent-teal)]/20 to-[var(--accent-indigo)]/20 rounded-2xl p-6 border border-[var(--accent-teal)]/20 text-center">
              <Radio size={24} className="text-[var(--accent-teal)] mx-auto mb-3" />
              <p className="text-white font-semibold text-lg">Visibility is a choice.</p>
              <p className="text-[var(--text-secondary)] text-sm mt-2">
                Choose real-time RFID visibility with Quartz Group and Xemelgo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
