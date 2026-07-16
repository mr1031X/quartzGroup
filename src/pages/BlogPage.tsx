import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const allPosts: BlogPost[] = [
  {
    slug: 'quartz-group-xemelgo-new-era',
    title: 'Quartz Group + Xemelgo: A New Era for Epicor Users',
    excerpt:
      'Quartz Group partners with Xemelgo to bring real-time RFID visibility directly into Epicor ERP workflows for manufacturers and distributors. This partnership marks a significant step forward for businesses looking to modernize their operations with cutting-edge tracking technology.',
    author: 'Chris Smalley',
    date: 'Feb 25, 2026',
    category: 'RFID',
    readTime: '5 min read',
  },
  {
    slug: 'visibility-is-a-choice',
    title: 'Visibility Is a Choice: Why Real-Time RFID Matters Now',
    excerpt:
      "In today's fast-moving manufacturing environment, inventory visibility is not a luxury—it is a competitive necessity. Real-time RFID tracking gives businesses the edge they need to compete effectively.",
    author: 'Chris Smalley',
    date: 'Apr 30, 2026',
    category: 'RFID',
    readTime: '4 min read',
  },
  {
    slug: 'bridging-rfid-erp-gap',
    title: 'Bridging the Gap Between RFID Data and ERP Execution',
    excerpt:
      'RFID generates massive amounts of data. The real challenge is turning that data into actionable ERP workflows that improve operations and drive measurable business results.',
    author: 'Chris Smalley',
    date: 'May 5, 2026',
    category: 'Epicor',
    readTime: '6 min read',
  },
  {
    slug: 'walmart-rfid-supply-chain',
    title: 'Walmart Will Use RFID for Inventory and Supply Chain Management',
    excerpt:
      'Major retailers like Walmart are mandating RFID for suppliers. What does this mean for manufacturers using Epicor, and how can you prepare for this shift?',
    author: 'Chris Smalley',
    date: 'Mar 15, 2026',
    category: 'RFID',
    readTime: '5 min read',
  },
  {
    slug: 'rfid-field-service-inventory',
    title: 'RFID for Field Service Inventory',
    excerpt:
      'Field service operations face unique inventory challenges. RFID technology provides a practical solution for tracking parts, tools, and equipment in real time.',
    author: 'Chris Smalley',
    date: 'Mar 1, 2026',
    category: 'RFID',
    readTime: '4 min read',
  },
  {
    slug: 'inventory-lost-at-sea',
    title: 'Inventory — Lost at Sea',
    excerpt:
      'Without proper tracking systems, inventory can feel like it is lost at sea. Learn how modern visibility solutions can bring clarity to your operations.',
    author: 'Chris Smalley',
    date: 'Feb 10, 2026',
    category: 'Manufacturing Operations',
    readTime: '3 min read',
  },
  {
    slug: 'what-is-your-rfid-goal',
    title: 'What Is Your RFID Goal?',
    excerpt:
      'Before implementing RFID, it is essential to define your goals clearly. This guide helps you identify the right RFID strategy for your business needs.',
    author: 'Chris Smalley',
    date: 'Jan 20, 2026',
    category: 'RFID',
    readTime: '4 min read',
  },
  {
    slug: 'tickets-please',
    title: 'Tickets, Please!',
    excerpt:
      'A look at how proper tracking and validation systems can transform manufacturing workflows, from receiving to shipping.',
    author: 'Chris Smalley',
    date: 'Jan 5, 2026',
    category: 'Manufacturing Operations',
    readTime: '3 min read',
  },
];

const categories = [
  'All',
  'Epicor',
  'RFID',
  'ERP Implementation',
  'Application Support',
  'EDI',
  'Product Configuration',
  'Manufacturing Operations',
  'Distribution',
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20 bg-[var(--bg-void)] min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-white/5">
        <div className="container-custom">
          <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
            Insights & Resources
          </span>
          <h1
            className="mt-4 font-bold text-white"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em' }}
          >
            Quartz Group Blog
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
            Expert insights on Epicor ERP, RFID technology, manufacturing operations, and digital
            transformation for manufacturers and distributors.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-white/5">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--bg-surface)] border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white text-sm focus:border-[var(--accent-teal)] focus:outline-none transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[var(--accent-teal)] text-white'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[var(--text-secondary)] text-lg">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-[var(--accent-teal)] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-[var(--bg-surface)] rounded-2xl border border-white/5 overflow-hidden hover:border-[var(--accent-teal)]/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-[var(--bg-void)] to-[var(--bg-surface)] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `radial-gradient(circle at ${30 + (index % 3) * 20}% ${40 + (index % 2) * 10}%, var(--accent-teal) 0%, transparent 50%)`,
                        }}
                      />
                    </div>
                    <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-wider relative z-10 bg-[var(--bg-void)]/60 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[var(--text-secondary)] text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-[var(--accent-teal)] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[var(--accent-teal)] text-sm font-medium group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container-custom text-center">
          <h2 className="text-white font-bold text-2xl mb-4">
            Want to learn more about how we can help?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            Reach out to discuss your Epicor or RFID needs.
          </p>
          <Link to="/#contact" className="btn-primary inline-flex">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
