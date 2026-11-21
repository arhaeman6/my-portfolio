import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#04050a] py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <a
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-white"
            >
              {PROFILE.name}
            </a>
            <p className="mt-1 text-xs text-slate-400">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-400 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <p>&copy; {year} {PROFILE.name}. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
