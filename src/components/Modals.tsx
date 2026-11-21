import { useEffect, useState, type FormEvent } from 'react';
import { Check, ExternalLink, X } from 'lucide-react';
import type { PersonaItem, ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenInquiry: (topic: string) => void;
}

export function ProjectDetailModal({ project, onClose, onOpenInquiry }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyanGlow/30 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 text-xs font-mono text-cyanGlow mb-3">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-400">{project.year}</span>
        </div>

        <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 pr-8">
          {project.title}
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
          {project.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-space-900/75 border border-white/10 rounded-2xl p-4">
            <h4 className="font-mono text-xs text-cyanGlow uppercase tracking-wider mb-3">
              System Architecture
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-sans">
              {project.architecture.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-cyanGlow mt-0.5">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-space-900/75 border border-white/10 rounded-2xl p-4">
            <h4 className="font-mono text-xs text-cyanGlow uppercase tracking-wider mb-3">
              Measured Outcomes
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-sans">
              {project.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyanGlow mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-white/15 text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              const topic =
                project.actionType === 'dataset'
                  ? 'CNN Pest Dataset'
                  : project.actionType === 'client'
                    ? 'UCEABLE Agency'
                    : 'Kidilent Venture';
              onClose();
              onOpenInquiry(topic);
            }}
            className="px-6 py-2.5 rounded-full bg-white text-space-950 font-display font-semibold text-xs hover:bg-cyanGlow transition-colors cursor-pointer"
          >
            {project.actionType === 'dataset' ? 'Request Dataset & Code' : 'Inquire About Project'}
          </button>
        </div>
      </div>
    </div>
  );
}

interface PersonaModalProps {
  persona: PersonaItem | null;
  onClose: () => void;
  onOpenInquiry: (topic: string) => void;
}

export function PersonaDetailModal({ persona, onClose, onOpenInquiry }: PersonaModalProps) {
  useEffect(() => {
    if (!persona) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [persona, onClose]);

  if (!persona) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="persona-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyanGlow/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close persona details"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="inline-block font-mono text-xs px-2.5 py-1 rounded-full bg-cyanGlow/10 text-cyanGlow border border-cyanGlow/20 mb-3">
          {persona.badge}
        </span>

        <h3 id="persona-modal-title" className="text-2xl font-display font-bold text-white mb-1 pr-8">
          {persona.title}
        </h3>
        <div className="text-xs font-mono text-slate-400 mb-4">{persona.subtitle}</div>
        <p className="text-sm text-slate-300 leading-relaxed mb-5 font-sans">{persona.summary}</p>

        <div className="bg-space-900/80 border border-white/10 rounded-2xl p-4 mb-5">
          <div className="font-mono text-[11px] text-cyanGlow uppercase mb-2.5">
            Key Focus · {persona.focusMetric}
          </div>
          <ul className="space-y-2 text-xs text-slate-300 font-sans">
            {persona.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-cyanGlow mt-0.5">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-white/15 text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquiry(persona.badge);
            }}
            className="px-6 py-2.5 rounded-full bg-white text-space-950 font-display font-semibold text-xs hover:bg-cyanGlow transition-colors cursor-pointer"
          >
            Collaborate on {persona.badge}
          </button>
        </div>
      </div>
    </div>
  );
}

interface InquiryModalProps {
  open: boolean;
  initialTopic: string;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export function InquiryModal({ open, initialTopic, onClose, onNotify }: InquiryModalProps) {
  const [topic, setTopic] = useState(initialTopic);
  const [datasetTier, setDatasetTier] = useState<'standard' | 'complete'>('complete');
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setTopic(initialTopic);
    setSent(false);
  }, [initialTopic, open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const isDataset = topic === 'CNN Pest Dataset';
  const tierLabel =
    datasetTier === 'standard'
      ? 'Template Codebase Only (IDR 80K)'
      : 'Full Codebase + Labeled Dataset + Walkthrough (IDR 150K)';

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    isDataset
      ? `Hi Juhairi, I'm ${senderName || 'a researcher'} interested in the CNN Pest Classification ${tierLabel}. ${notes}`
      : `Hi Juhairi, I'm ${senderName || 'reaching out'} regarding ${topic}. ${notes}`,
  )}`;

  const mailtoUrl = `mailto:juhairiqushay1548@email.com?subject=${encodeURIComponent(
    `[${topic}] Inquiry from ${senderName || 'Portfolio Visitor'}`,
  )}&body=${encodeURIComponent(
    `Name: ${senderName}\nContact: ${senderContact}\nTopic: ${topic}${isDataset ? `\nPackage: ${tierLabel}` : ''}\n\nNotes:\n${notes}`,
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    onNotify('Inquiry ready — choose WhatsApp or Email handoff.');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyanGlow/30 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close inquiry modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-xs font-mono text-cyanGlow uppercase tracking-wider mb-2">
          DIRECT TRANSMISSION
        </div>
        <h3 id="inquiry-modal-title" className="text-2xl font-display font-bold text-white mb-2 pr-8">
          {isDataset ? 'CNN Pest Codebase & Dataset' : 'Start a Conversation'}
        </h3>
        <p className="text-xs text-slate-400 font-sans mb-6">
          Configure your inquiry below to launch a pre-filled WhatsApp message or email brief directly
          to Juhairi Qushay.
        </p>

        {sent ? (
          <div className="bg-space-900/85 border border-cyanGlow/30 rounded-2xl p-5 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyanGlow/15 text-cyanGlow">
              <Check className="w-5 h-5" />
            </div>
            <div className="text-sm font-display font-semibold text-white">
              Inquiry Prepared Successfully
            </div>
            <p className="text-xs text-slate-300 font-sans">
              Select your preferred channel below to complete delivery:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-cyanGlow text-space-950 font-display font-semibold text-xs inline-flex items-center justify-center gap-1.5 hover:bg-white transition-colors"
              >
                <span>Continue on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={mailtoUrl}
                className="px-5 py-2.5 rounded-full border border-white/20 text-white font-mono text-xs inline-flex items-center justify-center gap-1.5 hover:border-cyanGlow hover:text-cyanGlow transition-colors"
              >
                <span>Send via Email</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="modal-topic"
                className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5"
              >
                Topic
              </label>
              <select
                id="modal-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-space-950 border border-white/15 text-sm text-white focus:outline-none focus:border-cyanGlow"
              >
                <option value="General Collaboration">General Collaboration</option>
                <option value="Enterprise PMO">Enterprise PMO &amp; Governance</option>
                <option value="Speaking & Brand Partnership">
                  Keynote Speaking / Brand Partnership
                </option>
                <option value="CNN Pest Dataset">CNN Pest Codebase &amp; Dataset</option>
                <option value="UCEABLE Agency">UCEABLE Custom Software / LMS</option>
                <option value="Kidilent Venture">Kidilent EdTech Partnership</option>
              </select>
            </div>

            {isDataset && (
              <div>
                <div className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5">
                  Select Bundle Tier
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDatasetTier('standard')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      datasetTier === 'standard'
                        ? 'border-cyanGlow bg-cyanGlow/10 text-white'
                        : 'border-white/10 bg-space-900 text-slate-300'
                    }`}
                  >
                    <div className="font-mono text-xs text-cyanGlow">IDR 80K</div>
                    <div className="text-xs font-medium mt-0.5">CNN Notebook Template</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDatasetTier('complete')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      datasetTier === 'complete'
                        ? 'border-cyanGlow bg-cyanGlow/10 text-white'
                        : 'border-white/10 bg-space-900 text-slate-300'
                    }`}
                  >
                    <div className="font-mono text-xs text-cyanGlow">IDR 150K</div>
                    <div className="text-xs font-medium mt-0.5">Full Code + Dataset + Notes</div>
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-name"
                  className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow"
                />
              </div>
              <div>
                <label
                  htmlFor="modal-contact"
                  className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5"
                >
                  Email / WhatsApp
                </label>
                <input
                  id="modal-contact"
                  type="text"
                  required
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-notes"
                className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5"
              >
                Brief / Notes
              </label>
              <textarea
                id="modal-notes"
                rows={3}
                required
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell Juhairi about your event, project, or dataset request..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-white text-space-950 font-display font-semibold text-xs uppercase tracking-wider hover:bg-cyanGlow transition-colors cursor-pointer"
            >
              Prepare Transmission
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
