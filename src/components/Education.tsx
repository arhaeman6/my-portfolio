import { motion } from 'motion/react';
import { Award, BookOpen, Code2, Sparkles } from 'lucide-react';
import { EDUCATION_MILESTONES } from '../data/portfolio';

function MilestoneIcon({ index }: { index: string }) {
  const cls = 'w-5 h-5 text-violet-300';
  switch (index) {
    case '01':
      return <BookOpen className={cls} />;
    case '02':
      return <Award className={cls} />;
    case '03':
      return <Code2 className={cls} />;
    default:
      return <Sparkles className={cls} />;
  }
}

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium tracking-wider text-violet-300 mb-3">
            Education &amp; Learning
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance] max-w-2xl">
            Academic Foundation &amp; Continuous Technical Growth
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_MILESTONES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/75 p-6 sm:p-7 flex flex-col justify-between gap-6 transition-colors hover:border-violet-400/35"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-400/25 flex items-center justify-center">
                    <MilestoneIcon index={item.index} />
                  </div>
                  <span className="font-mono text-xs text-slate-400 tabular-nums">
                    {item.index}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-violet-300">{item.subtitle}</p>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <p className="font-mono text-xs text-slate-400">
                  {item.focusAreas.join(' · ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
