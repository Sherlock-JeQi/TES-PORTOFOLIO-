import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onStartChat: () => void;
}

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'SKILLS', href: '#capabilities', id: 'capabilities' },
  { label: 'SERVICES', href: '#services', id: 'services' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export function Header({ activeSection, onStartChat }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 transition-all duration-300 ${
        scrolled
          ? 'bg-space-950/85 backdrop-blur-md py-3 border-b border-white/5'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Availability Indicator */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-cyanGlow/40 transition-colors group shrink-0"
        >
          <span className="relative flex items-center justify-center" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-cyanGlow opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyanGlow" />
          </span>
          <span className="font-display font-bold tracking-widest text-sm text-white group-hover:text-cyanGlow transition-colors whitespace-nowrap">
            JUHAIRI Q.
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-slate-400 uppercase tracking-wider pl-2 border-l border-white/10 whitespace-nowrap">
            AVAILABLE
          </span>
        </a>

        {/* Desktop Navigation Matrix */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-white/10 shadow-2xl"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider rounded-full transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow ${
                  isActive
                    ? 'text-cyanGlow bg-cyanGlow/10'
                    : 'text-slate-300 hover:text-cyanGlow'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Call to Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onStartChat}
            className="px-5 py-2.5 rounded-full text-xs tracking-wide bg-white text-space-950 font-display font-semibold hover:bg-cyanGlow hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
          >
            Start a Chat
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2.5 rounded-full glass-panel border border-white/15 text-slate-200 hover:text-cyanGlow hover:border-cyanGlow/40 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-auto max-w-7xl glass-panel rounded-2xl border border-white/15 p-3 shadow-2xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-colors ${
                    isActive
                      ? 'bg-cyanGlow/10 text-cyanGlow border border-cyanGlow/25'
                      : 'text-slate-300 hover:bg-white/5 hover:text-cyanGlow'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
