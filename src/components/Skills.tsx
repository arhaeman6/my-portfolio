import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  Box,
  BrainCircuit,
  Code2,
  Cpu,
  FileCode,
  Grid2x2,
  Layout,
  Palette,
  Smartphone,
  Table2,
  Zap,
} from 'lucide-react';
import {
  SKILL_CATEGORIES,
  SKILLS,
  type SkillCategory,
  type SkillItem,
} from '../data/portfolio';

function SkillIcon({ iconKey }: { iconKey: SkillItem['iconKey'] }) {
  const cls = 'w-5 h-5';
  switch (iconKey) {
    case 'python':
      return <Code2 className={cls} />;
    case 'html':
      return <FileCode className={cls} />;
    case 'css':
      return <Palette className={cls} />;
    case 'bootstrap':
      return <Layout className={cls} />;
    case 'fastapi':
      return <Zap className={cls} />;
    case 'pandas':
      return <Table2 className={cls} />;
    case 'numpy':
      return <Grid2x2 className={cls} />;
    case 'ml':
      return <BrainCircuit className={cls} />;
    case 'crewai':
      return <Bot className={cls} />;
    case 'docker':
      return <Box className={cls} />;
    case 'flutter':
      return <Smartphone className={cls} />;
    default:
      return <Cpu className={cls} />;
  }
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');
  const [activeSkillId, setActiveSkillId] = useState<string>(SKILLS[0].id);

  const visibleSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  const activeSkill =
    visibleSkills.find((s) => s.id === activeSkillId) ?? visibleSkills[0] ?? SKILLS[0];

  const handleCategoryChange = (category: SkillCategory) => {
    setSelectedCategory(category);
    const nextList =
      category === 'All' ? SKILLS : SKILLS.filter((skill) => skill.category === category);
    if (nextList.length > 0 && !nextList.some((s) => s.id === activeSkillId)) {
      setActiveSkillId(nextList[0].id);
    }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-medium tracking-wider text-violet-300 mb-3">
              Technical Skills
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Tools &amp; Technologies I Build With
            </h2>
          </motion.div>

          {/* Interactive Category Filter Segmented Bar */}
          <div
            role="tablist"
            aria-label="Filter technical skills by category"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-white/[0.08] bg-[#0a0d1a]/80"
          >
            {SKILL_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                    active
                      ? 'bg-gradient-to-r from-violet-600/90 to-blue-600/90 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Skill Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleSkills.map((skill, idx) => {
            const isSelected = activeSkill?.id === skill.id;
            return (
              <motion.button
                key={skill.id}
                type="button"
                onClick={() => setActiveSkillId(skill.id)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.2) }}
                className={`group text-left rounded-2xl p-5 border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  isSelected
                    ? 'border-violet-400/50 bg-gradient-to-br from-[#12162e]/95 to-[#0b0e1c]/95 shadow-[0_12px_36px_rgba(124,58,237,0.16)]'
                    : 'border-white/[0.08] bg-[#0a0d1a]/70 hover:border-white/20 hover:bg-[#0e1224]/85'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-violet-500/20 text-violet-300 border border-violet-400/30'
                        : 'bg-white/[0.04] text-slate-300 border border-white/[0.07] group-hover:text-violet-300'
                    }`}
                  >
                    <SkillIcon iconKey={skill.iconKey} />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
                    {skill.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {skill.summary}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Focused Skill Detail Strip */}
        {activeSkill && (
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#090c18]/80 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-400/25 flex items-center justify-center text-violet-300 shrink-0">
                <SkillIcon iconKey={activeSkill.iconKey} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {activeSkill.name}{' '}
                  <span className="text-slate-500 font-normal mx-1.5">·</span>
                  <span className="text-xs font-normal text-violet-300">
                    {activeSkill.category}
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{activeSkill.summary}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
