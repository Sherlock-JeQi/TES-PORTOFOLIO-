import { Code2, ShieldCheck, Video } from 'lucide-react';
import { PERSONAS, type PersonaItem } from '../data/portfolioData';

interface IdentityMatrixProps {
  highlightedPersonaId: string | null;
  onInspectPersona: (persona: PersonaItem) => void;
}

export function IdentityMatrix({
  highlightedPersonaId,
  onInspectPersona,
}: IdentityMatrixProps) {
  const renderIcon = (icon: PersonaItem['icon']) => {
    switch (icon) {
      case 'shield':
        return <ShieldCheck className="w-6 h-6" />;
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'code':
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-6">
        <div>
          <div className="text-xs font-mono tracking-widest text-cyanGlow uppercase mb-2">
            // 01. CORE IDENTITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            The Tri-Persona Matrix
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-sans">
          Operating at the intersection of enterprise tech governance, viral digital education, and
          software development engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PERSONAS.map((persona) => {
          const isHighlighted = highlightedPersonaId === persona.id;
          return (
            <button
              key={persona.id}
              type="button"
              onClick={() => onInspectPersona(persona)}
              className={`text-left glass-panel glass-panel-interactive hud-brackets p-8 rounded-2xl relative group hover:-translate-y-1 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow ${
                isHighlighted
                  ? 'border-cyanGlow/50 shadow-[0_0_30px_-8px_rgba(0,229,255,0.3)] hud-brackets-active'
                  : ''
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyanGlow/10 border border-cyanGlow/20 flex items-center justify-center text-cyanGlow shrink-0">
                    {renderIcon(persona.icon)}
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-cyanGlow/10 text-cyanGlow border border-cyanGlow/20 whitespace-nowrap">
                    {persona.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyanGlow transition-colors mb-2">
                  {persona.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-4">{persona.subtitle}</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  {persona.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 w-full">
                <div className="flex flex-wrap gap-2">
                  {persona.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-cyanGlow opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                  INSPECT ↗
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
