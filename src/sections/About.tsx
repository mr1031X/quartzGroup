import { Target, Heart, TrendingUp, Users, Award, Shield } from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: 'Experienced Epicor Consultants',
    description: 'Deep product knowledge across Epicor Kinetic and Prophet 21.',
  },
  {
    icon: Users,
    title: 'Manufacturing & Distribution Expertise',
    description: 'We understand your industry because we have lived it.',
  },
  {
    icon: Target,
    title: 'Practical Implementation Guidance',
    description: 'Real-world solutions that work in practice, not just in theory.',
  },
  {
    icon: Heart,
    title: 'Long-Term Client Partnerships',
    description: 'Your success is our success. We build relationships that last.',
  },
  {
    icon: TrendingUp,
    title: 'Responsive Support',
    description: 'When you need us, we are there. No waiting, no runaround.',
  },
  {
    icon: Shield,
    title: 'Customer Success Mindset',
    description: 'Every decision is made with your business outcomes in mind.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg-paper)] section-padding">
      <div className="container-custom">
        {/* Why Quartz Group */}
        <div className="mb-24">
          <div className="text-center mb-16 reveal">
            <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
              Why Quartz Group
            </span>
            <h2
              className="mt-4 font-bold text-[var(--text-dark)]"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
            >
              Deep Epicor Knowledge. Real Business Experience. Practical Results.
            </h2>
            <p className="mt-4 text-[var(--text-dark-secondary)] text-lg max-w-3xl mx-auto leading-relaxed">
              Buying a world-class ERP platform like Epicor is only part of the success equation.
              Successful ERP work requires careful planning, a clear understanding of your business,
              and deep knowledge of the software. Our consultants understand operations,
              manufacturing, distribution, finance, and technical development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent-teal)]/20 transition-colors">
                    <Icon size={20} className="text-[var(--accent-teal)]" />
                  </div>
                  <h3 className="text-[var(--text-dark)] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[var(--text-dark-secondary)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* About the Company */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
              Our Story
            </span>
            <h2
              className="mt-4 font-bold text-[var(--text-dark)]"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.02em' }}
            >
              Founded by ERP Implementation Experts
            </h2>
            <p className="mt-6 text-[var(--text-dark-secondary)] leading-relaxed">
              Quartz Group was founded by ERP implementation experts with years of experience
              implementing and supporting ERP products across many industries and global
              environments. We have seen what works and what does not, and we bring that
              experience to every client engagement.
            </p>
          </div>

          <div className="reveal space-y-6">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-indigo)]/10 flex items-center justify-center">
                  <Target size={20} className="text-[var(--accent-indigo)]" />
                </div>
                <h3 className="text-[var(--text-dark)] font-semibold text-lg">Our Vision</h3>
              </div>
              <p className="text-[var(--text-dark-secondary)] leading-relaxed">
                Deliver experience-tested, tailored Epicor solutions that align with each
                client&apos;s business process and keep the business moving forward.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center">
                  <Heart size={20} className="text-[var(--accent-teal)]" />
                </div>
                <h3 className="text-[var(--text-dark)] font-semibold text-lg">Our Mission</h3>
              </div>
              <p className="text-[var(--text-dark-secondary)] leading-relaxed">
                Create long-term client partnerships by providing outstanding customer service at
                every level. We believe the client&apos;s success is our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
