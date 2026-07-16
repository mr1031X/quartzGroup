import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  relatedSlugs: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: 'quartz-group-xemelgo-new-era',
    title: 'Quartz Group + Xemelgo: A New Era for Epicor Users',
    excerpt: 'Quartz Group partners with Xemelgo to bring real-time RFID visibility directly into Epicor ERP workflows for manufacturers and distributors.',
    content: `
      <p>Quartz Group is proud to announce its exclusive partnership with Xemelgo, bringing real-time RFID visibility directly into Epicor ERP workflows. This partnership represents a significant milestone for manufacturers and distributors looking to modernize their operations with cutting-edge tracking technology.</p>
      
      <h3>What This Means for Epicor Users</h3>
      <p>For years, manufacturers have struggled with the gap between physical inventory movements and ERP data. Goods move through the warehouse, production floor, and shipping docks—but the ERP system often lags hours or even days behind reality. This partnership solves that problem by connecting Xemelgo's advanced RFID platform directly to Epicor Kinetic and Prophet 21.</p>
      
      <h3>Key Capabilities</h3>
      <ul>
        <li><strong>Real-time inventory visibility</strong> — Know exactly what you have, where it is, and when it moved</li>
        <li><strong>WIP tracking</strong> — Follow work-in-progress through every stage of production</li>
        <li><strong>Asset tracking</strong> — Locate tools, equipment, and returnable containers instantly</li>
        <li><strong>Shipping and receiving validation</strong> — Verify every shipment against orders automatically</li>
        <li><strong>Cycle counting</strong> — Eliminate annual physical counts with continuous inventory verification</li>
      </ul>
      
      <h3>Why Xemelgo?</h3>
      <p>Xemelgo's cloud-native RFID platform was built from the ground up for manufacturing and distribution environments. Unlike traditional RFID systems that require massive infrastructure investments, Xemelgo can be deployed in as little as 24 hours and delivers ROI in under 12 months.</p>
      
      <h3>Getting Started</h3>
      <p>Quartz Group, as the exclusive Epicor partner for Xemelgo, is uniquely positioned to help you plan, implement, and optimize your RFID deployment. Our consultants understand both the RFID technology and the Epicor ERP system, ensuring a seamless integration that delivers real business value from day one.</p>
      
      <p>Visit <a href="https://quartztrack.com/">QuartzTrack.com</a> to learn more about our RFID solutions or contact us to schedule a consultation.</p>
    `,
    author: 'Chris Smalley',
    date: 'Feb 25, 2026',
    category: 'RFID',
    readTime: '5 min read',
    relatedSlugs: ['visibility-is-a-choice', 'bridging-rfid-erp-gap'],
  },
  {
    slug: 'visibility-is-a-choice',
    title: 'Visibility Is a Choice: Why Real-Time RFID Matters Now',
    excerpt: 'In todays fast-moving manufacturing environment, inventory visibility is not a luxury. It is a competitive necessity.',
    content: `
      <p>In today's fast-moving manufacturing environment, inventory visibility is not a luxury—it is a competitive necessity. Companies that can see their inventory in real time make better decisions, respond faster to customer demands, and operate more profitably than those relying on outdated, manual tracking methods.</p>
      
      <h3>The Cost of Poor Visibility</h3>
      <p>Consider these common scenarios:</p>
      <ul>
        <li>A production line stops because a critical component cannot be found in the warehouse</li>
        <li>A customer order is delayed because inventory records show stock that does not actually exist</li>
        <li>Excess inventory ties up working capital because planners cannot trust the data</li>
        <li>Shipments go out with wrong items because verification was manual and error-prone</li>
      </ul>
      <p>These problems cost manufacturers millions of dollars every year. And they are entirely avoidable.</p>
      
      <h3>RFID Changes the Game</h3>
      <p>RFID technology transforms inventory management from a periodic, manual process into a continuous, automatic one. Tags on items, pallets, and containers are read automatically as they move through your facility, updating your ERP system in real time without any human intervention.</p>
      
      <h3>The Results Speak for Themselves</h3>
      <p>Companies that implement RFID with their Epicor system typically see:</p>
      <ul>
        <li>99%+ inventory accuracy</li>
        <li>50% reduction in search time</li>
        <li>30% improvement in order fulfillment speed</li>
        <li>Significant reduction in expediting costs</li>
      </ul>
      
      <h3>Visibility Is a Choice</h3>
      <p>You can choose to continue with manual processes, periodic cycle counts, and inventory uncertainty. Or you can choose real-time visibility. The technology exists. The integration is proven. The only question is whether you are ready to make the choice.</p>
      
      <p>Contact Quartz Group to learn how we can bring real-time RFID visibility to your Epicor environment.</p>
    `,
    author: 'Chris Smalley',
    date: 'Apr 30, 2026',
    category: 'RFID',
    readTime: '4 min read',
    relatedSlugs: ['quartz-group-xemelgo-new-era', 'bridging-rfid-erp-gap'],
  },
  {
    slug: 'bridging-rfid-erp-gap',
    title: 'Bridging the Gap Between RFID Data and ERP Execution',
    excerpt: 'RFID generates massive amounts of data. The real challenge is turning that data into actionable ERP workflows.',
    content: `
      <p>RFID systems generate massive amounts of data. Every tag read, every movement detected, every transaction logged—it all creates a rich stream of information about what is happening in your facility. But data alone does not create value. The real challenge is turning that data into actionable ERP workflows that improve operations and drive measurable business results.</p>
      
      <h3>The Integration Challenge</h3>
      <p>Many RFID implementations fail not because the technology does not work, but because the integration with ERP systems is poorly designed. Data flows into a separate silo, never making its way into the business processes where it could create value. Planners still cannot see real-time inventory. Warehouse staff still perform manual counts. The RFID system becomes an expensive curiosity rather than a transformative tool.</p>
      
      <h3>A Better Approach</h3>
      <p>Successful RFID-ERP integration requires thinking beyond simple data feeds. It requires understanding how your business actually operates and designing workflows that put the right information in the right place at the right time.</p>
      
      <h3>Key Integration Points</h3>
      <ul>
        <li><strong>Inventory Management</strong> — RFID updates Epicor inventory records automatically as items move</li>
        <li><strong>Job Tracking</strong> — WIP movements update job status in real time</li>
        <li><strong>Shipping</strong> — RFID validates shipments against Epicor sales orders</li>
        <li><strong>Receiving</strong> — Incoming items are automatically matched to POs and receipted</li>
        <li><strong>Quality Control</strong> — Inspection status is tracked automatically through RFID checkpoints</li>
      </ul>
      
      <h3>The Quartz Group Difference</h3>
      <p>As Epicor experts and the exclusive Xemelgo partner, Quartz Group designs RFID integrations that actually work with your Epicor workflows. We do not just connect systems—we connect data to decisions, and decisions to results.</p>
    `,
    author: 'Chris Smalley',
    date: 'May 5, 2026',
    category: 'Epicor',
    readTime: '6 min read',
    relatedSlugs: ['quartz-group-xemelgo-new-era', 'visibility-is-a-choice'],
  },
  {
    slug: 'walmart-rfid-supply-chain',
    title: 'Walmart Will Use RFID for Inventory and Supply Chain Management',
    excerpt: 'Major retailers like Walmart are mandating RFID for suppliers. What does this mean for manufacturers using Epicor?',
    content: `
      <p>Major retailers like Walmart are increasingly mandating RFID for suppliers. This shift represents a significant change in supply chain requirements that manufacturers need to understand and prepare for.</p>
      
      <h3>What Walmart's RFID Mandate Means</h3>
      <p>Walmart's expanded RFID requirements mean that suppliers must tag products at the item level with RFID tags that can be read automatically throughout the supply chain. This affects everything from how products are packaged to how they are tracked through distribution centers.</p>
      
      <h3>Implications for Epicor Users</h3>
      <p>If you are a manufacturer supplying major retailers, you will need to:</p>
      <ul>
        <li>Implement RFID tagging processes in your production or packaging operations</li>
        <li>Ensure your ERP system can track and report on RFID-tagged inventory</li>
        <li>Integrate RFID data with your shipping and compliance processes</li>
        <li>Provide the electronic data your retail partners require</li>
      </ul>
      
      <h3>How Quartz Group Can Help</h3>
      <p>Quartz Group helps manufacturers prepare for and comply with retailer RFID mandates. We can integrate RFID capabilities into your existing Epicor environment, ensuring you meet your customers' requirements without disrupting your operations.</p>
    `,
    author: 'Chris Smalley',
    date: 'Mar 15, 2026',
    category: 'RFID',
    readTime: '5 min read',
    relatedSlugs: ['quartz-group-xemelgo-new-era', 'visibility-is-a-choice'],
  },
  {
    slug: 'rfid-field-service-inventory',
    title: 'RFID for Field Service Inventory',
    excerpt: 'Field service operations face unique inventory challenges. RFID technology provides a practical solution.',
    content: `
      <p>Field service operations face unique inventory challenges. Technicians need the right parts at the right time, but tracking inventory across multiple vehicles, depots, and job sites is notoriously difficult.</p>
      
      <h3>The Field Service Inventory Problem</h3>
      <p>Common challenges include:</p>
      <ul>
        <li>Technicians arriving at jobs without the necessary parts</li>
        <li>Excess inventory sitting unused in service vehicles</li>
        <li>No visibility into what parts are where</li>
        <li>Manual replenishment processes that are slow and error-prone</li>
      </ul>
      
      <h3>How RFID Helps</h3>
      <p>RFID technology provides a practical solution for field service inventory management. By tagging parts and using mobile RFID readers, technicians can:</p>
      <ul>
        <li>Quickly check inventory in their vehicle before heading to a job</li>
        <li>Automatically record parts usage against work orders</li>
        <li>Trigger automatic replenishment when stock runs low</li>
        <li>Provide accurate inventory visibility to dispatch and planning</li>
      </ul>
      
      <h3>Integration with Epicor</h3>
      <p>Quartz Group can integrate field service RFID tracking with your Epicor system, giving you complete visibility into field inventory and ensuring your technicians always have what they need.</p>
    `,
    author: 'Chris Smalley',
    date: 'Mar 1, 2026',
    category: 'RFID',
    readTime: '4 min read',
    relatedSlugs: ['quartz-group-xemelgo-new-era', 'what-is-your-rfid-goal'],
  },
  {
    slug: 'inventory-lost-at-sea',
    title: 'Inventory — Lost at Sea',
    excerpt: 'Without proper tracking systems, inventory can feel like it is lost at sea. Learn how modern visibility solutions help.',
    content: `
      <p>Without proper tracking systems, inventory can feel like it is lost at sea. You know it is somewhere in your facility, but finding it when you need it is another matter entirely.</p>
      
      <h3>The Hidden Costs of Inventory Chaos</h3>
      <p>When inventory is not properly tracked, the costs add up quickly:</p>
      <ul>
        <li>Time spent searching for materials</li>
        <li>Production delays when parts cannot be found</li>
        <li>Excess safety stock to compensate for poor visibility</li>
        <li>Expired or obsolete inventory that was forgotten</li>
        <li>Customer dissatisfaction from delayed shipments</li>
      </ul>
      
      <h3>Bringing Inventory Under Control</h3>
      <p>Modern visibility solutions—whether RFID, barcode scanning, or improved processes—can bring clarity to your operations. The key is having a system that tracks inventory automatically as it moves, updating your Epicor system in real time.</p>
      
      <h3>Start with the Basics</h3>
      <p>You do not need to implement everything at once. Start with your highest-value items, your biggest problem areas, or your most critical workflows. Build from there. The important thing is to start.</p>
    `,
    author: 'Chris Smalley',
    date: 'Feb 10, 2026',
    category: 'Manufacturing Operations',
    readTime: '3 min read',
    relatedSlugs: ['visibility-is-a-choice', 'what-is-your-rfid-goal'],
  },
  {
    slug: 'what-is-your-rfid-goal',
    title: 'What Is Your RFID Goal?',
    excerpt: 'Before implementing RFID, it is essential to define your goals clearly. This guide helps you identify the right strategy.',
    content: `
      <p>Before implementing RFID, it is essential to define your goals clearly. RFID is a powerful technology, but like any tool, it works best when you know what you are trying to accomplish.</p>
      
      <h3>Common RFID Goals</h3>
      <p>Here are some of the most common goals we see from manufacturers:</p>
      <ul>
        <li><strong>Inventory Accuracy</strong> — Eliminate discrepancies between physical inventory and system records</li>
        <li><strong>Search Time Reduction</strong> — Help workers find items faster</li>
        <li><strong>WIP Visibility</strong> — Track work-in-progress through production</li>
        <li><strong>Shipping Accuracy</strong> — Verify every shipment is correct</li>
        <li><strong>Asset Tracking</strong> — Know where tools, equipment, and containers are</li>
        <li><strong>Compliance</strong> — Meet customer or regulatory requirements</li>
      </ul>
      
      <h3>Defining Your Goals</h3>
      <p>Good RFID goals are specific, measurable, and tied to business outcomes. Instead of "we want better inventory tracking," try "we want to reduce inventory search time by 50% and achieve 99% inventory accuracy within 6 months."</p>
      
      <h3>How Quartz Group Can Help</h3>
      <p>Our consultants work with you to define clear RFID goals, design a solution that achieves them, and measure the results. We ensure your RFID investment delivers real, measurable business value.</p>
    `,
    author: 'Chris Smalley',
    date: 'Jan 20, 2026',
    category: 'RFID',
    readTime: '4 min read',
    relatedSlugs: ['visibility-is-a-choice', 'rfid-field-service-inventory'],
  },
  {
    slug: 'tickets-please',
    title: 'Tickets, Please!',
    excerpt: 'A look at how proper tracking and validation systems can transform manufacturing workflows.',
    content: `
      <p>A look at how proper tracking and validation systems can transform manufacturing workflows, from receiving to shipping.</p>
      
      <h3>The Analogy</h3>
      <p>Think of your manufacturing operation like a transit system. Materials and products move through various stations—receiving, warehouse, production, quality, shipping. At each station, you need a "ticket" to verify that the right item is moving at the right time.</p>
      
      <h3>Manual Tickets vs. Automatic Validation</h3>
      <p>Traditional manufacturing relies on manual "tickets"—paper travelers, scan sheets, or operator memory. These manual systems are slow, error-prone, and create bottlenecks. Automatic validation using RFID or barcode scanning replaces manual checks with instant, accurate verification.</p>
      
      <h3>Benefits of Automatic Validation</h3>
      <ul>
        <li><strong>Speed</strong> — No stopping to scan or record manually</li>
        <li><strong>Accuracy</strong> — Eliminates human error in data entry</li>
        <li><strong>Traceability</strong> — Complete history of every item's journey</li>
        <li><strong>Compliance</strong> — Automatic documentation for audits</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>Quartz Group helps manufacturers implement automatic tracking and validation systems integrated with Epicor. Contact us to learn how we can streamline your operations.</p>
    `,
    author: 'Chris Smalley',
    date: 'Jan 5, 2026',
    category: 'Manufacturing Operations',
    readTime: '3 min read',
    relatedSlugs: ['inventory-lost-at-sea', 'bridging-rfid-erp-gap'],
  },
];

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-20 bg-[var(--bg-void)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-[var(--text-secondary)] mb-6">
            The article you are looking for does not exist.
          </p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean) as BlogPost[];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
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

          <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
            {post.category}
          </span>
          <h1
            className="mt-4 font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-[var(--text-secondary)] text-sm">
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <article
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group bg-[var(--bg-surface)] rounded-xl p-6 border border-white/5 hover:border-[var(--accent-teal)]/30 transition-all"
                >
                  <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-wider">
                    {related.category}
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
