import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';

type NavbarProps = {
  onNavigate: (id: string) => void;
};

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav border-b border-base' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left: Name */}
          <button
            onClick={() => handleNav('home')}
            className="text-lg font-bold tracking-tight hover:text-accent transition-colors"
          >
            {profile.name}
          </button>

          {/* Center: Nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="px-3 py-2 text-sm text-muted hover:text-base transition-colors rounded-lg hover:bg-subtle"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Social + CTA */}
          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex p-2 text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex p-2 text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hidden md:flex p-2 text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <MailIcon />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 text-muted hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-600 transition-colors"
            >
              Let&rsquo;s Connect
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-base"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-base/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 glass-nav border-b border-base p-6 transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="px-4 py-3 text-left text-base text-muted hover:text-base hover:bg-subtle rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-base">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-accent">
                <LinkedInIcon />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-accent">
                <GitHubIcon />
              </a>
              <a href={`mailto:${profile.email}`} className="p-2 text-muted hover:text-accent">
                <MailIcon />
              </a>
              <button
                onClick={() => handleNav('contact')}
                className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg"
              >
                Let&rsquo;s Connect
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.08 1.83 2.81 1.3 3.5.99.1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
