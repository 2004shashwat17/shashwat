import { heroProofStrip, about, whatIBuild } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function ProofStrip() {
  return (
    <section className="border-y border-base bg-subtle py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="reveal text-center text-xs font-mono uppercase tracking-widest text-subtle mb-8">
          {heroProofStrip.heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {heroProofStrip.items.map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <span className="text-lg md:text-xl font-semibold text-muted hover:text-base transition-colors cursor-default">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About" heading={about.heading}>
      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-lg text-muted leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="premium-card p-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-subtle">Currently</div>
            <div>
              <div className="text-sm text-muted">Role</div>
              <div className="text-base font-semibold">Product Manager</div>
            </div>
            <div>
              <div className="text-sm text-muted">Company</div>
              <div className="text-base font-semibold">BWays Techno Solution</div>
            </div>
            <div>
              <div className="text-sm text-muted">Education</div>
              <div className="text-base font-semibold">MBA Candidate, Golden Gate University</div>
            </div>
            <div>
              <div className="text-sm text-muted">Previously</div>
              <div className="text-base font-semibold">Ex-Enalytechs</div>
            </div>
            <div>
              <div className="text-sm text-muted">Certification</div>
              <div className="text-base font-semibold">Infosys Certified</div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function WhatIBuild() {
  return (
    <Section id="what-i-build" eyebrow="Scope" heading={whatIBuild.heading}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {whatIBuild.areas.map((area, i) => (
          <Reveal key={area.title} delay={i * 80}>
            <div className="premium-card p-6 h-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent text-xs font-mono font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold">{area.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{area.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
