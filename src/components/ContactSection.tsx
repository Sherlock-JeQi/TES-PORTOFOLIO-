import { useState, type FormEvent } from 'react';
import { Check, Copy, Mail, Send } from 'lucide-react';

interface ContactSectionProps {
  onNotify: (message: string) => void;
}

export function ContactSection({ onNotify }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Enterprise PMO Advisory');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'juhairiqushay1548@email.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      onNotify('Email address copied to clipboard.');
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      onNotify('Copy unavailable — use direct email link.');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    onNotify('Transmission logged! Opening draft confirmation.');
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center"
    >
      <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/15 relative overflow-hidden">
        <div className="text-xs font-mono tracking-widest text-cyanGlow uppercase mb-3">
          // 07. TRANSMISSION TERMINAL
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
          Ready to build something extraordinary?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10 font-sans">
          Whether you are looking for an enterprise Project Management Officer, a keynote speaker
          for your tech summit, or a content partnership — my inbox is open.
        </p>

        {/* Communication Channels */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          <div className="inline-flex items-center rounded-full bg-white text-space-950 overflow-hidden shadow-lg">
            <a
              href={`mailto:${emailAddress}`}
              className="pl-5 pr-3 py-3 font-display font-semibold text-xs tracking-wide hover:bg-cyanGlow transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{emailAddress}</span>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="pr-4 pl-2.5 py-3 border-l border-space-950/15 hover:bg-cyanGlow transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <a
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
            className="px-6 py-3 rounded-full glass-panel text-white font-mono text-xs tracking-wider border border-white/20 hover:border-cyanGlow hover:text-cyanGlow transition-all duration-200 flex items-center gap-2"
          >
            <span>LinkedIn Profile</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://instagram.com/luthfieta"
            rel="noopener noreferrer"
            target="_blank"
            className="px-6 py-3 rounded-full glass-panel text-white font-mono text-xs tracking-wider border border-white/20 hover:border-cyanGlow hover:text-cyanGlow transition-all duration-200 flex items-center gap-2"
          >
            <span>Instagram @luthfieta</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Toggleable Interactive Direct Message Terminal */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => setTerminalOpen((prev) => !prev)}
            className="font-mono text-xs text-cyanGlow hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
          >
            {terminalOpen ? 'Hide Direct Message Terminal' : 'Or send a direct brief here ↓'}
          </button>
        </div>

        {terminalOpen && (
          <div className="max-w-xl mx-auto text-left bg-space-900/80 border border-white/10 rounded-2xl p-6 mb-8">
            {submitted ? (
              <div className="text-center py-4 space-y-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyanGlow/15 border border-cyanGlow/40 text-cyanGlow">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">
                  Message Prepared for {topic}
                </h3>
                <p className="text-xs text-slate-300 font-sans">
                  Thank you, <span className="text-white font-medium">{name}</span>. Click below to
                  launch your email client with this structured brief, or send another message.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${emailAddress}?subject=${encodeURIComponent(`[Portfolio] ${topic} — ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nReply Email: ${email}\nTopic: ${topic}\n\n${message}`)}`}
                    className="px-5 py-2.5 rounded-full bg-cyanGlow text-space-950 font-display font-semibold text-xs hover:bg-white transition-colors"
                  >
                    Open in Email App ↗
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full border border-white/20 text-slate-300 font-mono text-xs hover:text-white cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Pratama"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5"
                  >
                    Collaboration Scope
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-space-950 border border-white/15 text-sm text-white focus:outline-none focus:border-cyanGlow"
                  >
                    <option value="Enterprise PMO Advisory">Enterprise PMO Advisory</option>
                    <option value="Keynote Speaking / Tech Workshop">
                      Keynote Speaking / Tech Workshop
                    </option>
                    <option value="Edu Tech Brand Partnership">Edu Tech Brand Partnership</option>
                    <option value="UCEABLE Software Development">
                      UCEABLE Software Development
                    </option>
                    <option value="CNN Pest Dataset Inquiry">CNN Pest Dataset Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5"
                  >
                    Project / Event Brief
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share timeline, goals, or event details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyanGlow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white text-space-950 font-display font-semibold text-xs uppercase tracking-wider hover:bg-cyanGlow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Brief</span>
                </button>
              </form>
            )}
          </div>
        )}

        <div className="font-mono text-xs text-slate-500">
          STATUS: ACTIVELY ACCEPTING SELECT PROJECTS FOR 2026 / 2027
        </div>
      </div>
    </section>
  );
}
