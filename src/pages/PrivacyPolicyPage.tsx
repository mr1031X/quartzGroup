export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20 bg-[var(--bg-void)] min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-white/5">
        <div className="container-custom">
          <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
            Legal
          </span>
          <h1
            className="mt-4 font-bold text-white"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em' }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
            Last updated: August 03, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="prose-custom">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              Quartz Group, Inc. (“we,” “us,” or “our”) respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains how we collect,
              use, and safeguard information when you visit our website or submit information
              through our contact form.
            </p>

            <h2 className="text-white text-xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed mb-8 space-y-2">
              <li>Name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message or inquiry details</li>
            </ul>

            <h2 className="text-white text-xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed mb-8 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate with you about our products, services, and events</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-white text-xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              We may use cookies and similar tracking technologies to understand how visitors
              interact with our website. We also use third-party analytics and marketing tools that
              may set cookies or collect information according to their own privacy policies.
            </p>

            <h2 className="text-white text-xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              We use trusted third-party services, including HubSpot, to manage our contact forms,
              communications, and marketing efforts. Information submitted through our forms is
              transmitted to and stored by these service providers in accordance with their privacy
              policies.
            </p>

            <h2 className="text-white text-xl font-semibold mb-4">Data Security</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              We implement reasonable administrative, technical, and physical safeguards to protect
              your personal information. However, no method of transmission over the internet or
              electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-white text-xl font-semibold mb-4">Your Rights</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              You have the right to access, update, or request deletion of your personal
              information. To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="text-white text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated effective date. We encourage you to review this policy
              periodically.
            </p>

            <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or how we handle your information,
              please contact us:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] leading-relaxed space-y-2">
              <li>
                <span>Email: <img src="/assets/email-address.png" alt="info@thequartzgroup.com" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" /></span>               
              </li>
              <li>Phone: <img src="/assets/phone-number.png" alt="1-800-449-3155" className="inline h-4 w-auto ml-1" /></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
