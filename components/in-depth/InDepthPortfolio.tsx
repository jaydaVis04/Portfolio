import Navigation from './Navigation';
import Hero from './Hero';
import Experience from './Experience';
import Recognition from './Recognition';
import Projects from './Projects';
import Labs from './Labs';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function InDepthPortfolio() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="page-width in-depth">
        <Hero />
        <Experience />
        <Recognition />
        <Projects />
        <Labs />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
