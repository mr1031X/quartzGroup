import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import { ArrowLeft, Calendar, User, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { sanityClient, urlFor, type BlogPost } from '@/lib/sanity';

interface RelatedPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  categories?: string[];
}

const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-10 not-prose">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          className="w-full rounded-xl shadow-lg"
          loading="lazy"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-[var(--text-secondary)] mt-3">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-[var(--accent-teal)] hover:underline underline-offset-4"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-white/90">{children}</em>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-secondary)] marker:text-[var(--accent-teal)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-secondary)] marker:text-[var(--accent-teal)]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed pl-2">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed pl-2">{children}</li>,
  },
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const postQuery = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          excerpt,
          body,
          publishedAt,
          author->{name, slug, image},
          mainImage,
          categories
        }`;
        const postResult = await sanityClient.fetch<BlogPost>(postQuery, { slug });

        if (!postResult) {
          setError('Post not found.');
        } else {
          setPost(postResult);

          const relatedQuery = `*[_type == "post" && slug.current != $slug && count(categories[@ in $categories]) > 0] | order(publishedAt desc)[0...2] {
            _id,
            title,
            slug,
            excerpt,
            publishedAt,
            categories
          }`;
          const relatedResult = await sanityClient.fetch<RelatedPost[]>(relatedQuery, {
            slug,
            categories: postResult.categories || [],
          });
          setRelatedPosts(relatedResult);
        }
      } catch {
        setError('Failed to load this post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (loading) {
    return (
      <main className="pt-20 bg-[var(--bg-void)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--text-secondary)]">Loading article...</p>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="pt-20 bg-[var(--bg-void)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-[var(--text-secondary)] mb-6">{error || 'The article you are looking for does not exist.'}</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const shareText = `Check out this article: ${post.title}`;

  return (
    <main className="pt-20 bg-[var(--bg-void)] min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-white/5">
        <div className="container-custom max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-wider bg-[var(--accent-teal)]/10 px-3 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1
            className="mt-4 font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-[var(--text-secondary)] text-sm">
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author?.name || 'Quartz Group'}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(post.publishedAt)}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="container-custom max-w-4xl pt-12">
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <img
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.mainImage.alt || post.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-invert prose-lg max-w-none">
            <PortableText value={post.body as never} components={ptComponents} />
          </article>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <div className="flex items-center gap-4">
              <span className="text-[var(--text-secondary)] text-sm flex items-center gap-2">
                <Share2 size={16} />
                Share this article:
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-teal)]/20 transition-colors"
              >
                <Linkedin size={16} className="text-[var(--text-secondary)]" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-teal)]/20 transition-colors"
              >
                <Twitter size={16} className="text-[var(--text-secondary)]" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-teal)]/20 transition-colors"
              >
                <Facebook size={16} className="text-[var(--text-secondary)]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="container-custom max-w-4xl">
            <h3 className="text-white font-semibold text-xl mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related._id}
                  to={`/blog/${related.slug.current}`}
                  className="group bg-[var(--bg-surface)] rounded-xl p-6 border border-white/5 hover:border-[var(--accent-teal)]/30 transition-all"
                >
                  <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-wider">
                    {(related.categories || [])[0] || 'Article'}
                  </span>
                  <h4 className="text-white font-semibold mt-2 group-hover:text-[var(--accent-teal)] transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm mt-2 line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
