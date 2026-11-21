import { useState } from 'react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterOption = 'all' | 'edtech' | 'agency' | 'ai';

const FILTERS: { key: FilterOption; label: string }[] = [
  { key: 'all', label: 'All Systems' },
  { key: 'edtech', label: 'EdTech Venture' },
  { key: 'agency', label: 'Software Agency' },
  { key: 'ai', label: 'AI & Vision' },
];

export function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filterKey === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-white/10 pb-6 gap-4">
        <div>
          <div className="text-xs font-mono tracking-widest text-cyanGlow uppercase mb-2">
            // 03. VENTURES &amp; SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-sans">
          A selection of software platforms, EdTech initiatives, and deep learning algorithms built
          for scale.
        </p>
      </div>

      {/* Interactive Filter Segmented Control */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {FILTERS.map((f) => {
          const active = activeFilter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                active
                  ? 'bg-cyanGlow/15 text-cyanGlow border border-cyanGlow/40 shadow-[0_0_15px_-5px_rgba(0,229,255,0.4)]'
                  : 'bg-space-900/70 text-slate-400 border border-white/10 hover:text-white hover:border-white/25'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="glass-panel glass-panel-interactive hud-brackets rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-cyanGlow/40"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 gap-2">
                <span>{project.category}</span>
                <span className="text-cyanGlow">{project.status}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white group-hover:text-cyanGlow transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-2 text-xs font-mono text-cyanGlow hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow rounded"
              >
                <span>{project.ctaLabel}</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
