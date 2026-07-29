import { Link } from 'react-router-dom';
import { Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const serviceLinks = [
  { label: 'Implementation', href: '/#services' },
  { label: 'Application Support', href: '/#services' },
  { label: 'EDI Solutions', href: '/#services' },
  { label: 'Product Configuration', href: '/#services' },
  { label: 'Project Management', href: '/#services' },
  { label: 'RFID Integration', href: '/#rfid' },
];

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Our Team', href: '/#team' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

const resourceLinks = [
  { label: 'Epicor', href: 'https://www.epicor.com/', external: true },
  { label: 'EpicCare', href: 'https://epicorcs.service-now.com/epiccare', external: true },
  { label: 'EpicWeb', href: 'https://epicweb.epicor.com/', external: true },
  { label: 'Epicor User Group', href: 'http://www.epicorusers.org/', external: true },
  { label: 'QuartzTrack RFID', href: 'https://quartztrack.com/', external: true },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <footer className="bg-[var(--bg-void)] pt-32 pb-8 border-t border-white/5">
      <div className="container-custom">
        {/* Big CTA */}
        <div className="mb-24 reveal">
          <h2
            className="font-bold text-white leading-none"
            style={{ fontSize: 'clamp(40px, 8vw, 120px)', letterSpacing: '-0.03em' }}
          >
            Ready to Talk?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mt-6 max-w-xl">
            Let&apos;s discuss how Quartz Group can help you get more from your Epicor investment.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="tel:1-800-449-3155" className="btn-primary">
              <Phone size={16} className="mr-2" />
              Call <img src="/assets/phone-number.png" alt="1-800-449-3155" className="inline h-4 w-auto ml-1" />
            </a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="btn-outline">
              Send a Message
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/assets/quartz-group-logo.png"
                alt="Quartz Group"
                className="h-9 w-auto object-contain"
                width="417"
                height="73"
              />
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              Your Epicor Partner. Customized solutions that actually work for manufacturers and
              distributors.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/1641447"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-teal)]/20 transition-colors"
              >
                <Linkedin size={16} className="text-[var(--text-secondary)]" />
              </a>
              <a
                href="https://twitter.com/QuartzGroupInc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-teal)]/20 transition-colors"
              >
                <Twitter size={16} className="text-[var(--text-secondary)]" />
              </a>
              <a
                href="https://www.facebook.com/TheQuartzGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-teal)]/20 transition-colors"
              >
                <Facebook size={16} className="text-[var(--text-secondary)]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[var(--text-secondary)] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('http') || link.href.startsWith('/#') ? (
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-[var(--text-secondary)] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-[var(--text-secondary)] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-secondary)] text-xs">
            © {new Date().getFullYear()} Quartz Group, Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-[var(--text-secondary)] text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <a href="mailto:info@thequartzgroup.com" className="text-[var(--text-secondary)] text-xs hover:text-white transition-colors flex items-center gap-1">
              <Mail size={12} />
              <img src="/assets/email-address.png" alt="info@thequartzgroup.com" className="h-3.5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
