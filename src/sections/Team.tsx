import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TeamMember {
  name: string;
  role?: string;
  image?: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Adam Everett',
    role: 'Senior Project Management',
    image: '/team/AEverett.png',
    description: 'PMP certified. Over 15 years experience in software development, management, and delivery.',
  },
  {
    name: 'Adam Maggied',
    role: 'Senior Consultant',
    image: '/team/AMaggied.png',
    description: 'Epicor Manufacturing and Distribution certified. RFID Professional Institute certified. Over 15 years in IT and ERP implementations.',
  },
  {
    name: 'Alejandra Arevalo',
    role: 'Senior Consultant',
    image: '/team/AArevalo.png',
    description: 'Epicor Manufacturing and Distribution and Tools certified. Over 15 years in information technology.',
  },
  {
    name: 'Asit Nagpal',
    role: 'Technical Consultant',
    image: '/team/ANagpal2.png',
    description: 'Epicor Finance and Kinetic Sales Management certified. Over 30 years in software development, 10 years in Epicor Tools.',
  },
  {
    name: 'Audrey Mann-Monasmith',
    role: 'Custom Solutions Group Manager',
    image: '/team/AMann.png',
    description: 'Epicor Mfg, Distribution, Financial and Tools certified. RFID Institute certified. Over 21 years in manufacturing software.',
  },
  {
    name: 'Brittney Caine',
    role: 'Accounting & Administrative Assistant',
    image: '/team/BCaine2.png',
    description: 'Degrees in Accounting and Business Management. Over 20 years in accounting and finance roles.',
  },
  {
    name: 'Chris Smalley',
    role: 'Director, RFID Product Development',
    image: '/team/CSmalley.png',
    description: 'Leads RFID product development and strategy, driving real-time visibility solutions integrated with Epicor ERP.',
  },
  {
    name: 'Denise Lang',
    role: 'Senior Finance Consultant',
    image: '/team/DLang.png',
    description: 'Over 10 years in ERP system implementation and consulting with a focus on finance modules and cost flow.',
  },
  {
    name: 'Don Agostino',
    role: 'Senior Consultant',
    image: '/team/DAgostino.png',
    description: '33 years in manufacturing and manufacturing software consulting. Specializes in scheduling, job tracking, MRP, and financials.',
  },
  {
    name: 'David Bartosik',
    role: 'Senior Consultant',
    image: '/team/DBartosik.png',
  },
  {
    name: 'Don Luoto',
    role: 'Senior Consultant',
    image: '/team/DLuoto.png',
    description: 'Epicor Manufacturing and Distribution certified. Consulting on Epicor products since 1996. Supports Kinetic, Epicor 10, 9 and Vantage 8.',
  },
  {
    name: 'Ed Atzert',
    role: 'Senior Consultant',
    image: '/team/EAtzert.png',
  },
  {
    name: 'George Esber',
    role: 'Operations Consultant',
    image: '/team/GEsber.png',
    description: 'Hands-on manufacturing operations experience. Helps clients bridge the gap between operations and Epicor ERP capabilities.',
  },
  {
    name: 'Jason Campbell',
    role: 'Senior Consultant',
    image: '/team/JCampbell.png',
    description: 'Expert Epicor consulting across manufacturing and distribution. Specializes in helping clients maximize their ERP investment.',
  },
  {
    name: 'Jay Paquette',
    role: 'Senior Project Management',
    image: '/team/JPaquette2.png',
    description: 'Over 20 years deploying enterprise application software. Focus on Manufacturing and Distribution. Dynamic implementation skills.',
  },
  {
    name: 'Jennifer Guhlin',
    role: 'Technical Consultant',
    image: '/team/JGuhlin.png',
    description: 'Epicor Financial certified. Over 15 years in manufacturing, quality assurance, finance and ERP software.',
  },
  {
    name: 'Joe Brifo',
    role: 'Senior Software Engineer',
  },
  {
    name: 'Ken Adams',
    role: 'Senior Application Support Specialist',
    image: '/team/KAdams.png',
    description: 'Epicor Manufacturing and Distribution certified. Over 20 years supporting ERP systems with emphasis on Inventory & Manufacturing.',
  },
  {
    name: 'Kevin Eliasson',
    role: 'Senior Consultant',
  },
  {
    name: 'Matt Hellwig',
    role: 'President',
    image: '/team/MHellwig.png',
    description: 'Epicor Manufacturing and Distribution certified. Over 25 years in manufacturing and distribution software consulting. RFID Institute certified.',
  },
  {
    name: 'Matt McIntosh',
    role: 'Senior Consultant',
    image: '/team/MMcIntosh.png',
    description: 'Nearly 20 years implementing and optimizing Epicor ERP across manufacturing, distribution, and aerospace & defense.',
  },
  {
    name: 'Mike Gerbi',
    role: 'Senior Developer',
    image: '/team/MGerbi.png',
    description: 'Epicor Tools & Technical certified. Deep technical development expertise for custom Epicor solutions and integrations.',
  },
  {
    name: 'Ron Stevenson',
    role: 'Senior Financial Consultant',
    image: '/team/RStevenson.png',
    description: 'Specializes in Epicor financial implementations. Helps clients optimize financial workflows, reporting, and compliance.',
  },
  {
    name: 'Sean McDaniel',
    role: 'Senior Software Engineer',
    image: '/team/SMcDaniel.png',
    description: 'Epicor Tools & Technical certified. Advanced software engineering for complex Epicor customizations and integrations.',
  },
];

const INITIAL_COUNT = 8;

export default function Team() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? teamMembers : teamMembers.slice(0, INITIAL_COUNT);

  return (
    <section id="team" className="bg-[var(--bg-void)] section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
            Our People
          </span>
          <h2
            className="mt-4 font-bold text-white"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
          >
            The Quartz Group Team
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-3xl mx-auto leading-relaxed">
            Our team recognizes that purchasing a world-class software platform such as Epicor is
            only half of the success equation. Every member of the team recognizes that your
            success is our success.
          </p>
        </div>

        {/* Team Grid - Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {visible.map((member, index) => (
            <div
              key={member.name}
              className="team-card group"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <div className="flex items-start gap-4 bg-[var(--bg-surface)] rounded-xl p-4 border border-white/5 hover:border-[var(--accent-teal)]/25 transition-all duration-300 h-full">
                {/* Small Portrait Photo - WebP with PNG fallback */}
                {member.image && (
                  <div className="w-[72px] h-[90px] rounded-lg overflow-hidden bg-gradient-to-b from-[var(--bg-surface)] to-[#111113] flex-shrink-0">
                    <picture>
                      <source srcSet={`${member.image.replace('.png', '.webp')}`} type="image/webp" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width="72"
                        height="90"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </picture>
                  </div>
                )}

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-semibold text-sm leading-tight">{member.name}</h3>
                  {member.role && (
                    <p className="text-[var(--accent-teal)] text-xs font-medium mt-0.5 mb-2 leading-tight">
                      {member.role}
                    </p>
                  )}
                  {member.description && (
                    <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {teamMembers.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-white transition-colors text-sm font-medium"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View All {teamMembers.length} Team Members <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
