import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';

type HeroProps = {
  onNavigate: (id: string) => void;
};

const flowSteps = [
  { label: 'Business', desc: 'Problem' },
  { label: 'Product', desc: 'Thinking' },
  { label: 'Design', desc: 'UX' },
  { label: 'Engineering', desc: 'Build' },
  { label: 'Users', desc: 'Ship' },
];

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="reveal flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                Product Manager &bull; Product Builder
              </span>
            </div>

            <h1 className="reveal text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
              Product Manager.
              <br />
              <span className="text-accent">Product Builder.</span>
            </h1>

            <p className="reveal mt-6 text-lg md:text-xl text-muted max-w-xl text-balance leading-relaxed">
              I build and work on real-world products across SaaS, logistics, WMS, web, mobile and emerging technology.
            </p>

            <p className="reveal mt-4 text-base text-subtle max-w-xl">
              Currently building products at {profile.currentRole.split('@')[1]?.trim() || 'BWays Techno Solution'} while pursuing my MBA at Golden Gate University.
            </p>

            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('work')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-all hover:gap-3"
              >
                Explore My Work
                <ArrowRight size={16} />
              </button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-base text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                Connect on LinkedIn
              </a>
              <button
                onClick={() => onNavigate('resume')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-muted hover:text-base transition-colors"
              >
                <FileText size={16} />
                View Resume
              </button>
            </div>
          </div>

          {/* Right: Flow visual */}
          <div className="reveal hidden lg:block">
            <div className="relative">
              {/* Vertical flow */}
              <div className="flex flex-col gap-3">
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-base bg-card text-sm font-mono text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1 premium-card px-5 py-4">
                      <div className="text-sm font-semibold">{step.label}</div>
                      <div className="text-xs text-muted">{step.desc}</div>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-px bg-base" style={{ height: 'calc(100% - 48px)' }} />
                    )}
                  </div>
                ))}
              </div>

              {/* Arrow connectors */}
              <div className="absolute left-[22px] top-12 w-px h-[calc(100%-96px)] bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

              {/* Floating accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-2xl rotate-6 border border-accent/10" />
              <div className="absolute -bottom-4 -left-8 w-20 h-20 bg-accent/5 rounded-full border border-accent/10" />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="reveal mt-16 flex items-center gap-2 text-xs text-subtle font-mono">
          <Sparkles size={12} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
