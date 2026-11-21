import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { HeroVisual3D } from './HeroVisual3D';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Subtle architectural ambient gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-violet-700/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-blue-700/15 blur-[130px]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Unboxed metadata kicker (zero-pill discipline) */}
            <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-400 mb-5 flex flex-wrap items-center gap-2">
              <span className="text-violet-300">Python Developer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>AI &amp; Machine Learning Enthusiast</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{PROFILE.location}</span>
            </p>

            <h1 className="font-display font-bold tracking-tight text-white text-[clamp(2.35rem,4.4vw,4rem)] leading-[1.08] [text-wrap:balance] max-w-2xl">
              <span className="block">{PROFILE.heroHeadlineTop}</span>
              <span className="block mt-2">
                Building Ideas Through{' '}
                <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                  Code &amp; AI.
                </span>
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {PROFILE.heroSubtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-[0_10px_32px_rgba(124,58,237,0.32)] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:text-white backdrop-blur-md transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Mail className="w-4 h-4 text-violet-300" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Tech Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <HeroVisual3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
