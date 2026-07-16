import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I have used Quartz for a couple years now. The team they have assembled proves to be a priceless asset every time I use them. I have never hesitated to make the call to solicit their help, thoughts and in many cases their ideas.",
    name: 'Jeffrey A. Baum',
    title: 'Director of Information Technology',
    company: 'Aware Products, LLC',
  },
  {
    quote:
      "Quartz Group delivered our Epicor implementation on time and on budget. Their deep product knowledge and practical approach made all the difference in our transition.",
    name: 'Bob Tucker',
    title: 'Vice President',
    company: 'Entrepix, Inc.',
  },
  {
    quote:
      "The Quartz team understands manufacturing operations in a way that few consultants do. Their responsive support has been invaluable to our business.",
    name: 'Betsy Witkop',
    title: 'Controller',
    company: 'Saint Gobain Solar Glass',
  },
  {
    quote:
      "Their expertise with the Epicor Product Configurator transformed our quoting process. What used to take hours now takes minutes. A game changer for our business.",
    name: 'Gene Horlander',
    title: 'CIO',
    company: 'Techniks',
  },
  {
    quote:
      "Quartz Group has been our go-to Epicor partner for years. Their consultants are responsive, knowledgeable, and always focused on getting results.",
    name: 'Tom Keough',
    title: 'Controller',
    company: 'Thortex',
  },
  {
    quote:
      "The team at Quartz Group doesn't just know Epicor — they understand how manufacturing businesses actually work. That combination is rare and valuable.",
    name: 'Kathy Ward',
    title: 'CPA, CFO',
    company: 'Tru-Flex Metal Hose',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--bg-paper)] section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
            Client Stories
          </span>
          <h2
            className="mt-4 font-bold text-[var(--text-dark)]"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-[var(--text-dark-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            Long-term partnerships built on trust, expertise, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Quote
                size={28}
                className="text-[var(--accent-teal)]/15 absolute top-5 right-5 shrink-0"
              />
              <p className="text-[var(--text-dark-secondary)] leading-relaxed mb-6 text-sm pr-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-5">
                <p className="text-[var(--text-dark)] font-semibold text-sm">
                  {testimonial.name}
                </p>
                <p className="text-[var(--text-dark-secondary)] text-xs">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
