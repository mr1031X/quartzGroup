import { Cpu, Factory, Warehouse, HardHat, Globe, Layers } from 'lucide-react';

const partners = [
  { name: 'Epicor', icon: Cpu },
  { name: 'Xemelgo', icon: Warehouse },
  { name: 'Zebra', icon: Factory },
  { name: 'Impinj', icon: Layers },
  { name: 'Microsoft', icon: Globe },
  { name: 'AWS', icon: HardHat },
];

export default function TrustedBy() {
  return (
    <section className="bg-[var(--bg-void)] py-10 border-y border-white/5">
      <div className="container-custom">
        <p className="text-[var(--text-secondary)] text-xs font-mono tracking-wider text-center mb-6 uppercase">
          Trusted Technology Partners
        </p>
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.name}
                  className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  <Icon size={20} />
                  <span className="font-semibold text-sm tracking-wide">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
