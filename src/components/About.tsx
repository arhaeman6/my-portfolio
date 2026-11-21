import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ImagePlus, MapPin, RotateCcw } from 'lucide-react';
import { PROFILE, SUMMARY_CARDS } from '../data/portfolio';

export function About() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleResetPhoto = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium tracking-wider text-violet-300 mb-3">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance] max-w-2xl">
            Curiosity-Driven Engineering in Python &amp; Artificial Intelligence
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Profile Image Placeholder / Editorial Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full min-h-[340px] rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/80 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
              {previewUrl ? (
                <>
                  <img
                    src={previewUrl}
                    alt={`${PROFILE.name} profile portrait`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#05060b]/90 via-[#05060b]/25 to-transparent"
                  />
                </>
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-violet-600/20 blur-3xl pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-blue-600/15 blur-3xl pointer-events-none"
                  />
                </>
              )}

              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  {PROFILE.location}
                </span>

                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="sr-only"
                    aria-label="Preview profile photo"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 border border-white/12 bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    <ImagePlus className="w-3.5 h-3.5 text-violet-300" />
                    <span>{previewUrl ? 'Change Photo' : 'Add Photo'}</span>
                  </button>
                  {previewUrl && (
                    <button
                      type="button"
                      onClick={handleResetPhoto}
                      aria-label="Reset profile placeholder"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/12 bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/[0.12] backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {!previewUrl && (
                <div className="relative z-10 my-10 flex flex-col items-center justify-center text-center">
                  <div className="relative w-32 h-32 rounded-full border border-white/15 bg-gradient-to-br from-violet-500/20 via-[#0d1124] to-blue-500/20 flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.22)]">
                    <span className="font-display text-4xl font-bold tracking-tight text-white">
                      AE
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-medium text-slate-400">
                    Profile Portrait Placeholder
                  </p>
                </div>
              )}

              <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold text-white">{PROFILE.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{PROFILE.role}</p>
                </div>
                <span className="font-mono text-xs text-violet-300 whitespace-nowrap">
                  Python · AI/ML
                </span>
              </div>
            </div>
          </motion.div>

          {/* Editorial Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between gap-8"
          >
            <div className="space-y-5">
              <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-medium">
                {PROFILE.aboutBio}
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                {PROFILE.aboutSecondary}
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-sm">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-slate-200 hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-slate-200 hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 font-medium text-violet-300 hover:text-violet-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
              >
                <span>Browse Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Full-width 4-Column Factual Summary Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SUMMARY_CARDS.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/70 px-6 py-5 transition-colors hover:border-violet-400/30"
            >
              <p className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {card.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-slate-200">{card.label}</p>
              <p className="mt-0.5 text-xs text-slate-400">{card.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
