import {
  Settings,
  HeadphonesIcon,
  ArrowLeftRight,
  Puzzle,
  ClipboardList,
  Radio,
} from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Implementation',
    description:
      'Business process review, data migration, design and development, training, go-live support, and post-launch optimization.',
    details: [
      'Business process review',
      'Data migration & cleansing',
      'Design and development',
      'Reports and customizations',
      'Training and go-live support',
    ],
  },
  {
    icon: HeadphonesIcon,
    title: 'Application Support',
    description:
      'Flexible Epicor support for companies needing occasional help, remote or onsite support, or staff augmentation.',
    details: [
      'Hourly support options',
      'Remote and onsite support',
      'Staff augmentation',
      'Emergency business support',
      'USA-based resources',
    ],
  },
  {
    icon: ArrowLeftRight,
    title: 'EDI',
    description:
      'Electronic data interchange solutions for trading partner connectivity, cloud-based data exchange, and reporting.',
    details: [
      'Trading partner connectivity',
      'Cloud-based data exchange',
      'Testing and implementation',
      'Reporting visibility',
      'Reduced labor cost',
    ],
  },
  {
    icon: Puzzle,
    title: 'Product Configuration',
    description:
      'Epicor Product Configurator solutions for quote entry, order entry, engineering, and finished good part creation.',
    details: [
      'Turnkey configurator',
      'Smart part numbering',
      'Quote/order configuration',
      'Method creation',
      'Testing and go-live support',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description:
      'ERP project management bringing structure to goals, timelines, budgets, resources, and stakeholder alignment.',
    details: [
      'Project planning & ROI analysis',
      'Budgeting & timeline management',
      'Resource planning',
      'Meeting facilitation',
      'Action-item tracking',
    ],
  },
  {
    icon: Radio,
    title: 'RFID Integration',
    description:
      'Connect RFID visibility into real Epicor workflows. Exclusive Epicor partner for Xemelgo RFID solutions.',
    details: [
      'Real-time inventory visibility',
      'WIP tracking',
      'Asset tracking',
      'Shipping & receiving validation',
      'Cycle counting',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section section-padding">
      <div className="content-wrapper container-custom">
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
            What We Do
          </span>
          <h2
            className="mt-4 font-bold text-[var(--text-dark)]"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
          >
            Comprehensive Epicor Expertise
          </h2>
          <p className="mt-4 text-[var(--text-dark-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            From implementation to ongoing support, we provide end-to-end Epicor services
            tailored to manufacturing and distribution operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="reveal bg-[var(--bg-void)] rounded-2xl p-8 text-white group hover:-translate-y-1 transition-all duration-300"
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    'inset 0 0 0 1px rgba(14,159,159,0.3), 0 8px 32px rgba(14,159,159,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    'inset 0 0 0 1px rgba(255,255,255,0.06)';
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--accent-teal)]/20 transition-colors">
                  <Icon size={24} className="text-[var(--accent-teal)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-[var(--text-secondary)] text-xs flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--accent-teal)]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
