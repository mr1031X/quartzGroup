import { Phone } from 'lucide-react';

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          poster="/assets/hero-image.jpg"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay - subtle gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,6,0.55) 0%, rgba(5,5,6,0.45) 40%, rgba(5,5,6,0.65) 100%)',
        }}
      />

      {/* Content - Centered */}
      <div className="relative z-10 container-custom text-center px-6">
        <h1
          className="text-white font-bold leading-[1.05] mb-6 mx-auto"
          style={{
            fontSize: 'clamp(42px, 7vw, 84px)',
            letterSpacing: '-0.02em',
            maxWidth: '900px',
          }}
        >
          Customized Solutions That Actually Work
        </h1>

        <p
          className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 mx-auto"
          style={{ maxWidth: '640px' }}
        >
          Epicor ERP consulting, implementation, support, and RFID solutions
          for manufacturers and distributors across the United States.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" onClick={handleScrollToContact} className="btn-primary">
            Let's Talk
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

        <p className="text-white/40 text-sm mt-8">
          <Phone size={14} className="inline mr-1 -mt-0.5" />
          <img
            src="/assets/phone-number.png"
            alt="Phone"
            className="inline h-4 w-auto opacity-40 align-middle"
          />
          &nbsp;|&nbsp; Epicor Kinetic &amp; RFID Experts
        </p>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--bg-void))',
        }}
      />
    </section>
  );
}
