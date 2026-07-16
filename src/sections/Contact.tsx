import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const interestOptions = [
  'Epicor Implementation',
  'Application Support',
  'EDI',
  'Product Configuration',
  'Project Management',
  'RFID',
  'General Inquiry',
];

export default function Contact() {
  const [formState, setFormState] = useState({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formState.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setFormState({
        company: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
      setStatus('idle');
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg-void)] section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="reveal">
            <span className="font-mono text-[var(--accent-teal)] text-sm tracking-wider uppercase">
              Get In Touch
            </span>
            <h2
              className="mt-4 font-bold text-white"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
            >
              Ready to Make Epicor Work Better for Your Business?
            </h2>
            <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
              Whether you need implementation help, application support, EDI, product
              configuration, project management, or RFID visibility, Quartz Group can help you
              move forward with confidence.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[var(--accent-teal)]" />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-xs uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:1-800-449-3155"
                    className="text-white hover:text-[var(--accent-teal)] transition-colors"
                  >
                    1-800-449-3155
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[var(--accent-teal)]" />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-xs uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:info@thequartzgroup.com"
                    className="text-white hover:text-[var(--accent-teal)] transition-colors"
                  >
                    info@thequartzgroup.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[var(--accent-teal)]" />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-xs uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-white">United States</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary" onClick={(e) => e.preventDefault()}>
                Let&apos;s Talk
              </a>
              <a
                href="https://quartztrack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Explore RFID Solutions
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--bg-surface)] rounded-2xl p-8 border border-white/5"
            >
              <p className="text-[var(--text-secondary)] text-sm mb-6">
                Tell us what you&apos;re trying to solve. We&apos;ll help you figure out the best
                next step.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-void)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[var(--accent-teal)] focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 block">
                    Area of Interest *
                  </label>
                  <select
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-void)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[var(--accent-teal)] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select...</option>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 block">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    className={`w-full bg-[var(--bg-void)] border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-white/10 focus:border-[var(--accent-teal)]'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 block">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    className={`w-full bg-[var(--bg-void)] border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                      errors.lastName ? 'border-red-500' : 'border-white/10 focus:border-[var(--accent-teal)]'
                    }`}
                    placeholder="Smith"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full bg-[var(--bg-void)] border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-[var(--accent-teal)]'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-void)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[var(--accent-teal)] focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-[var(--text-secondary)] text-xs uppercase tracking-wider mb-2 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-[var(--bg-void)] border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-[var(--accent-teal)]'
                  }`}
                  placeholder="Tell us what you're trying to solve..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
                disabled={status === 'success'}
              >
                {status === 'success' ? (
                  <>
                    <CheckCircle size={16} className="mr-2" />
                    Message Sent Successfully
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm">
                    Thank you for reaching out! We&apos;ll get back to you within one business day.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                  <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
