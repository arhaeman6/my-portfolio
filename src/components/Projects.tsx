import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Code2, Github, X } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolio';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  const markImageFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-medium tracking-wider text-violet-300 mb-3">
              Featured Projects
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Practical Applications &amp; AI Experiments
            </h2>
          </motion.div>

          <a
            href="https://github.com/arhaeman6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
          >
            <Github className="w-4 h-4 text-violet-300" />
            <span>Explore GitHub Repositories</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2x2 Rounded Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, idx) => {
            const hasFailed = Boolean(failedImages[project.id]);
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/80 overflow-hidden flex flex-col transition-all duration-200 hover:border-violet-400/40 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
              >
                {/* 4:3 Visual Cover with Zero-Broken-Image Fallback */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect ${project.title} details`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#101428] via-[#0a0d1a] to-[#06070c] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-400"
                >
                  {!hasFailed ? (
                    <img
                      src={project.coverImage}
                      alt={project.coverAlt}
                      referrerPolicy="no-referrer"
                      onError={() => markImageFailed(project.id)}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-violet-950/50 via-[#0a0d1a] to-blue-950/40">
                      <Code2 className="w-8 h-8 text-violet-300 mb-2" />
                      <p className="font-display text-base font-semibold text-white text-center">
                        {project.title}
                      </p>
                    </div>
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a] via-transparent to-transparent opacity-70"
                  />
                </button>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-6">
                  <div>
                    {/* Quiet unboxed metadata line */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono tabular-nums">
                      <span className="text-violet-300">{project.index}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans">{project.category}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Unboxed tech tags with typographic separators */}
                    <p className="font-mono text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tech} className="inline-flex items-center gap-2">
                          <span>{tech}</span>
                          {tIdx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </p>

                    <div className="flex items-center gap-4 shrink-0">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-violet-300 hover:text-violet-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded px-1 py-0.5"
                      >
                        Project Details
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-300 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded px-1 py-0.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Project Detail Lightbox / Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0a0d1a] shadow-[0_32px_90px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-black/60 border border-white/15 text-slate-200 hover:text-white hover:bg-black/80 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[#06070c]">
              {!failedImages[selectedProject.id] ? (
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.coverAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-950/60 to-blue-950/50">
                  <Code2 className="w-10 h-10 text-violet-300" />
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="font-mono text-xs text-violet-300">
                  {selectedProject.index} · {selectedProject.category}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.08]">
                <h4 className="text-xs font-semibold tracking-wider text-slate-400 mb-3">
                  Key Focus Areas
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-200 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-mono text-xs text-slate-400">
                  {selectedProject.technologies.join(' · ')}
                </p>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-colors whitespace-nowrap shrink-0"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
