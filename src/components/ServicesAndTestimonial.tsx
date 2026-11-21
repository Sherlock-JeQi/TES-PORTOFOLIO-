import { TESTIMONIAL } from '../data/portfolioData';

interface ServicesAndTestimonialProps {
  onOpenDatasetModal: () => void;
  onBookSpeaking: () => void;
}

export function ServicesAndTestimonial({
  onOpenDatasetModal,
  onBookSpeaking,
}: ServicesAndTestimonialProps) {
  return (
    <>
      {/* Digital Products & Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-cyanGlow uppercase mb-2">
              // 06. SERVICES &amp; DIGITAL ASSETS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Collaboration &amp; Products
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-sans">
            Verified turnkey datasets, technical advisory, and high-impact tech event speaking
            packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Card: CNN Thesis Code & Dataset */}
          <article className="glass-panel glass-panel-interactive p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyanGlow/10 text-cyanGlow border border-cyanGlow/20">
                  DIGITAL CODEBASE
                </span>
                <span className="font-mono text-lg font-bold text-white tabular-nums">
                  IDR 80K — 150K
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                CNN Pest Classification Template &amp; Dataset
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                Full research-ready Jupyter notebook containing CNN pipeline, dataset preprocessing
                scripts, hyperparameter configuration, and confusion matrix visualizer. Ideal for
                Informatics theses and machine learning coursework.
              </p>
              <ul className="text-xs font-mono text-slate-400 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-cyanGlow" aria-hidden="true">
                    ✓
                  </span>
                  <span>Clean Python Code with Markdown Documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyanGlow" aria-hidden="true">
                    ✓
                  </span>
                  <span>Pre-labeled Agricultural Pest Image Dataset</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyanGlow" aria-hidden="true">
                    ✓
                  </span>
                  <span>Instant Google Drive Access &amp; Support Notes</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenDatasetModal}
              className="w-full text-center px-6 py-3 rounded-full bg-cyanGlow/10 border border-cyanGlow text-cyanGlow font-mono text-xs uppercase tracking-wider hover:bg-cyanGlow hover:text-space-950 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
            >
              Inquire / Purchase via WhatsApp
            </button>
          </article>

          {/* Service Card: Keynote Speaking & Content Collaboration */}
          <article className="glass-panel glass-panel-interactive p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyanGlow/10 text-cyanGlow border border-cyanGlow/20">
                  TALKS &amp; CAMPAIGNS
                </span>
                <span className="font-mono text-xs text-slate-400">CUSTOM SCOPE</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Tech Keynote, Workshop &amp; Brand Partnership
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                Delivering high-energy tech sessions on IT Project Management, Edu Tech content
                mastery, and beginner coding tracks. Open for university seminars, tech conferences,
                and sponsored tech creator campaigns.
              </p>
              <ul className="text-xs font-mono text-slate-400 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-cyanGlow" aria-hidden="true">
                    ✓
                  </span>
                  <span>Keynote Speaking &amp; Interactive Workshop Facilitation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyanGlow" aria-hidden="true">
                    ✓
                  </span>
                  <span>Tech Product Promotion (36.9K+ Followers Multi-platform)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyanGlow" aria-hidden="true">
                    ✓
                  </span>
                  <span>Tech Hackathon / Event MC &amp; Moderation</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onBookSpeaking}
              className="w-full text-center px-6 py-3 rounded-full bg-white text-space-950 font-display font-semibold text-xs uppercase tracking-wider hover:bg-cyanGlow transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
            >
              Book Speaking / Creator Slot
            </button>
          </article>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 relative text-center">
          <div
            aria-hidden="true"
            className="w-12 h-12 rounded-full bg-cyanGlow/10 border border-cyanGlow/20 mx-auto mb-6 flex items-center justify-center text-cyanGlow"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-base sm:text-xl font-display font-medium text-white leading-relaxed mb-6">
            {TESTIMONIAL.quote}
          </blockquote>
          <div>
            <div className="font-display font-bold text-white text-sm">{TESTIMONIAL.author}</div>
            <div className="font-mono text-xs text-cyanGlow">{TESTIMONIAL.role}</div>
          </div>
        </div>
      </section>
    </>
  );
}
