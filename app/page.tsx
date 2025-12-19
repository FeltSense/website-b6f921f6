import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <Contact />
      <Services />
      <About />
      <Testimonials />
      <Features />
      <Footer />
      <Pricing />
    </main>
  );
}
