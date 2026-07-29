import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { sanityClient, urlFor, type BlogPost } from '@/lib/sanity';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          author->{name, slug, image},
          mainImage,
          categories
        }`;
        const result = await sanityClient.fetch<BlogPost[]>(query);
        setPosts(result);
      } catch {
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const categories = useMemo(() => {
    const allCategories = posts.flatMap((post) => post.categories || []);
    const unique = Array.from(new Set(allCategories)).sort();
    return ['All', ...unique];
  }, [posts]);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || (post.categories || []).includes(activeCategory);
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase());
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
          {loading ? (
            <div className="text-center py-20">
              <p className="text-[var(--text-secondary)] text-lg">Loading posts...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-[var(--accent-teal)] hover:underline"
              >
                Retry
              </button>
            </div>
          ) : filteredPosts.length === 0 ? (
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
                  key={post._id}
                  to={`/blog/${post.slug.current}`}
                  className="group bg-[var(--bg-surface)] rounded-2xl border border-white/5 overflow-hidden hover:border-[var(--accent-teal)]/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-[var(--bg-void)] to-[var(--bg-surface)] flex items-center justify-center relative overflow-hidden">
                    {post.mainImage ? (
                      <img
                        src={urlFor(post.mainImage).width(600).url()}
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-20">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `radial-gradient(circle at ${30 + (index % 3) * 20}% ${40 + (index % 2) * 10}%, var(--accent-teal) 0%, transparent 50%)`,
                            }}
                          />
                        </div>
                        <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-wider relative z-10 bg-[var(--bg-void)]/60 px-3 py-1 rounded-full">
                          {(post.categories || [])[0] || 'Article'}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[var(--text-secondary)] text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author?.name || 'Quartz Group'}
                      </span>
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
