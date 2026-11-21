import { EXPERIENCES, METRICS } from '../data/portfolioData';

export function MetricsAndExperience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* High-Tech Metrics Counter Band */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="glass-panel glass-panel-interactive p-6 rounded-xl border border-white/10 text-center"
          >
            <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight tabular-nums">
              {metric.value}
              <span className="text-cyanGlow">{metric.suffix}</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <div className="text-xs font-mono tracking-widest text-cyanGlow uppercase mb-2">
            // 02. CAREER TRAJECTORY
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight mb-4">
            Enterprise &amp; Venture Experience
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed font-sans">
            Demonstrated track record of directing complex digital transformation projects at
            state-owned enterprises while simultaneously driving EdTech entrepreneurship.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="glass-panel glass-panel-interactive p-6 sm:p-8 rounded-2xl relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                  <div className="text-cyanGlow font-mono text-sm">{exp.organization}</div>
                </div>
                <div className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 self-start sm:self-auto whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-slate-300 font-sans mb-5">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-cyanGlow mt-0.5 shrink-0" aria-hidden="true">
                      ▹
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5 font-mono text-xs text-slate-400">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-space-900 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
