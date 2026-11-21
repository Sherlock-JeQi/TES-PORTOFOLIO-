import { useState } from 'react';
import { CAPABILITY_CATEGORIES, type SkillEntry } from '../data/portfolioData';

export function CapabilitiesToolkit() {
  const [selectedSkill, setSelectedSkill] = useState<SkillEntry | null>(null);

  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-widest text-cyanGlow uppercase mb-2">
              // 04. CAPABILITIES &amp; TOOLKIT
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Structured Technical Competency
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-sans">
              A comprehensive toolset bridging leadership frameworks, content distribution engines,
              and software development pipelines. Select any node below to inspect operational usage.
            </p>
          </div>

          {selectedSkill && (
            <div className="lg:max-w-sm rounded-xl bg-space-900/90 border border-cyanGlow/30 px-4 py-3">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-mono text-xs text-cyanGlow">{selectedSkill.name}</span>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="font-mono text-[10px] text-slate-400 hover:text-white cursor-pointer"
                >
                  CLEAR
                </button>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {selectedSkill.context}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPABILITY_CATEGORIES.map((category) => (
            <div key={category.id}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-cyanGlow mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyanGlow" aria-hidden="true" />
                <span>{category.title}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() =>
                        setSelectedSkill(isSelected ? null : skill)
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyanGlow/15 border border-cyanGlow text-cyanGlow shadow-[0_0_12px_-4px_rgba(0,229,255,0.4)]'
                          : 'bg-space-900 border border-white/10 text-slate-200 hover:border-cyanGlow/40 hover:text-white'
                      }`}
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
