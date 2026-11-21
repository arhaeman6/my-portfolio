import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#05060b] text-slate-100 relative overflow-x-hidden">
        {/* Deep obsidian-navy subtle atmospheric backdrop */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(49,46,129,0.16),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(30,58,138,0.12),_transparent_50%)]"
        />

        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
