import Hero from '../sections/Hero';
import TrustedBy from '../sections/TrustedBy';
import Services from '../sections/Services';
import RFID from '../sections/RFID';
import About from '../sections/About';
import Team from '../sections/Team';
import Testimonials from '../sections/Testimonials';
import BlogPreview from '../sections/BlogPreview';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <RFID />
      <About />
      <Team />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
  );
}
