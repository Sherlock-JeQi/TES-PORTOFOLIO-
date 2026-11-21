import { ECOSYSTEM_PARTNERS, RECOGNITIONS } from '../data/portfolioData';

export function RecognitionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs font-mono tracking-widest text-cyanGlow uppercase mb-2">
          // 05. RECOGNITION &amp; DELEGATIONS
        </div>
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">
          Honors &amp; Global Summits
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RECOGNITIONS.map((item) => (
          <article
            key={item.id}
            className="glass-panel glass-panel-interactive p-6 rounded-2xl border border-white/10 hover:border-cyanGlow/30"
          >
            <div className="text-xs font-mono text-cyanGlow mb-2">{item.category}</div>
            <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs font-mono text-slate-400 mb-3">{item.subtitle}</p>
            <p className="text-slate-300 text-xs leading-relaxed font-sans">{item.description}</p>
          </article>
        ))}
      </div>

      {/* Ecosystem Partners Strip */}
      <div className="mt-16 pt-10 border-t border-white/10">
        <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
          Recognized &amp; Supported By Tech Ecosystems
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
          {ECOSYSTEM_PARTNERS.map((partner) => (
            <span
              key={partner}
              className="font-display font-bold tracking-wider text-slate-300 text-base sm:text-lg hover:text-cyanGlow transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
