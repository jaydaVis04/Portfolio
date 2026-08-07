import CustomCursor from './CustomCursor';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Labs from './Labs';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function InDepthPortfolio() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Labs />
      <Contact />
      <Footer />
    </main>
  );
}
