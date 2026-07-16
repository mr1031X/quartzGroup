import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'quartz-group-xemelgo-new-era',
    title: 'Quartz Group + Xemelgo: A New Era for Epicor Users',
    excerpt:
      'Quartz Group partners with Xemelgo to bring real-time RFID visibility directly into Epicor ERP workflows for manufacturers and distributors.',
    author: 'Chris Smalley',
    date: 'Feb 25, 2026',
    category: 'RFID',
  },
  {
    slug: 'visibility-is-a-choice',
    title: 'Visibility Is a Choice: Why Real-Time RFID Matters Now',
    excerpt:
      'In today&apos;s fast-moving manufacturing environment, inventory visibility is not a luxury—it is a competitive necessity. Here&apos;s why.',
    author: 'Chris Smalley',
    date: 'Apr 30, 2026',
    category: 'RFID',
  },
  {
    slug: 'bridging-rfid-erp-gap',
    title: 'Bridging the Gap Between RFID Data and ERP Execution',
    excerpt:
      'RFID generates massive amounts of data. The real challenge is turning that data into actionable ERP workflows that improve operations.',
    author: 'Chris Smalley',
    date: 'May 5, 2026',
    category: 'Epicor',
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-[var(--bg-paper)] section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 reveal">
          <div>
            <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
              Insights
            </span>
            <h2
              className="mt-4 font-bold text-[var(--text-dark)]"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
            >
              Latest from the Blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-[var(--accent-indigo)] transition-colors text-sm font-medium mt-4 md:mt-0"
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="reveal group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-[var(--bg-void)] to-[var(--bg-surface)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${30 + index * 20}% ${40 + index * 10}%, var(--accent-teal) 0%, transparent 50%)`,
                    }}
                  />
                </div>
                <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-wider relative z-10 bg-[var(--bg-void)]/60 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-[var(--text-dark-secondary)] text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-[var(--text-dark)] font-semibold mb-2 group-hover:text-[var(--accent-teal)] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-[var(--text-dark-secondary)] text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[var(--accent-teal)] text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
