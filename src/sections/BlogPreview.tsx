import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { sanityClient, urlFor, type BlogPost } from '@/lib/sanity';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export default function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
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
        // Silently fail: the section will show nothing if Sanity is unreachable
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (!loading && posts.length === 0) {
    return null;
  }

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
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="h-48 bg-gray-100 animate-pulse" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-1/3" />
                    <div className="h-6 bg-gray-100 rounded animate-pulse" />
                    <div className="h-4 bg-gray-100 rounded animate-pulse" />
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3" />
                  </div>
                </div>
              ))
            : posts.map((post, index) => (
                <Link
                  key={post._id}
                  to={`/blog/${post.slug.current}`}
                  className="reveal group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  style={{ transitionDelay: `${index * 0.1}s` }}
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
                              backgroundImage: `radial-gradient(circle at ${30 + index * 20}% ${40 + index * 10}%, var(--accent-teal) 0%, transparent 50%)`,
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
                    <div className="flex items-center gap-4 text-[var(--text-dark-secondary)] text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author?.name || 'Quartz Group'}
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
