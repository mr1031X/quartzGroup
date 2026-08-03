import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Register GSAP ScrollTrigger for scroll reveal animations
    const initScrollReveal = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(initScrollReveal, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--bg-void)]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
