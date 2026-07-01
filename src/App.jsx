import useLenis from './hooks/useLenis';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useLenis();

  return (
    <div className="noise">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
