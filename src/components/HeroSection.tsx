interface HeroSectionProps {
  onStartConversation: () => void;
  onExplorePortfolio: () => void;
  onSelectDiscipline: (personaId: string) => void;
}

export function HeroSection({
  onStartConversation,
  onExplorePortfolio,
  onSelectDiscipline,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden hero-space-glow"
    >
      {/* Curved Sci-Fi Frame Overlay Lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30"
      >
        <svg
          className="w-full h-full max-w-6xl max-h-[750px]"
          fill="none"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 150 L 250 150 C 320 150 350 80 420 80 L 1150 80"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.2"
          />
          <path
            d="M 50 650 L 250 650 C 320 650 350 720 420 720 L 1150 720"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.2"
          />
          <line
            stroke="rgba(0,229,255,0.12)"
            strokeDasharray="4 6"
            strokeWidth="1"
            x1="600"
            x2="600"
            y1="200"
            y2="600"
          />
          <circle cx="250" cy="150" fill="#00e5ff" r="3" />
          <circle cx="950" cy="80" fill="#00e5ff" r="3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center pt-8 pb-12">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyanGlow/25 text-slate-300 text-xs font-mono tracking-wider mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyanGlow animate-pulse" aria-hidden="true" />
          <span>AVAILABLE FOR PMO &amp; EDU TECH COLLABORATIONS</span>
        </div>

        {/* Main Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-[1.12]">
          PORTOFOLIO
        </h1>

        {/* Hero Subheadline / Persona Pitch */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          We back visionaries and craft ventures that define what comes next. Juhairi Qushay —
          Enterprise PMO at PLN Icon Plus, IT Edu Content Creator (36.9K+), and Informatics
          Engineering Student.
        </p>

        {/* Dual Primary / Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            type="button"
            onClick={onStartConversation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-space-950 font-display font-semibold text-sm tracking-wide hover:bg-cyanGlow hover:text-space-950 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
          >
            Start a Conversation
          </button>
          <button
            type="button"
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel text-white font-display font-medium text-sm tracking-wide border border-white/20 hover:border-cyanGlow hover:text-cyanGlow transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
          >
            Explore Portfolio
          </button>
        </div>

        {/* Bottom Futuristic Status Bar Pill */}
        <div className="inline-flex flex-wrap items-center justify-center px-6 py-2.5 rounded-full glass-panel border border-white/10 text-slate-300 text-xs sm:text-sm font-sans tracking-wide shadow-lg gap-y-1">
          <button
            type="button"
            onClick={() => onSelectDiscipline('pmo')}
            className="hover:text-cyanGlow transition-colors cursor-pointer"
          >
            Project Management
          </button>
          <span className="mx-3 text-cyanGlow" aria-hidden="true">
            ·
          </span>
          <button
            type="button"
            onClick={() => onSelectDiscipline('creator')}
            className="hover:text-cyanGlow transition-colors cursor-pointer"
          >
            IT Edu Content
          </button>
          <span className="mx-3 text-cyanGlow" aria-hidden="true">
            ·
          </span>
          <button
            type="button"
            onClick={() => onSelectDiscipline('engineer')}
            className="hover:text-cyanGlow transition-colors cursor-pointer"
          >
            Software Architecture
          </button>
        </div>
      </div>

      {/* Corner Geometric Sci-Fi Coordinates */}
      <div className="absolute bottom-6 left-8 font-mono text-[10px] text-slate-600 hidden md:block">
        SYS.LOC: IDN_JKT // LAT. -6.2088 // LONG. 106.8456
      </div>
      <div className="absolute bottom-6 right-8 font-mono text-[10px] text-slate-600 hidden md:block">
        ENGINE: HIGH-FIDELITY // PORTFOLIO V2.6
      </div>
    </section>
  );
}
