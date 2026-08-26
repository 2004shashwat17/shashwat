import { Award, ExternalLink, Github, Star } from 'lucide-react';
import { achievements, certifications, repos, profile } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" heading="Achievements">
      <p className="reveal text-sm text-subtle mb-8">
        6 editable placeholders \u2014 replace with verified achievements.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((ach, i) => (
          <Reveal key={ach.id} delay={i * 60}>
            <div className="premium-card p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <Award size={18} />
                </div>
                <span className="text-xs font-mono text-subtle">{ach.date}</span>
              </div>
              <h3 className="text-base font-semibold mb-1">{ach.title}</h3>
              <p className="text-sm text-accent mb-3">{ach.organization}</p>
              <p className="text-sm text-muted leading-relaxed flex-1">{ach.description}</p>
              <a
                href={ach.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-accent hover:gap-2.5 transition-all"
              >
                Verify
                <ExternalLink size={12} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" heading="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 50}>
            <div className="premium-card p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <Star size={18} />
                </div>
                <span className="text-xs font-mono text-subtle">{cert.date}</span>
              </div>
              <h3 className="text-base font-semibold mb-1">{cert.name}</h3>
              <p className="text-sm text-accent mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted leading-relaxed flex-1">{cert.description}</p>
              <div className="mt-4 pt-4 border-t border-base space-y-1">
                <div className="text-xs text-subtle">
                  <span className="text-muted">Credential ID: </span>{cert.credentialId}
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:gap-2.5 transition-all"
                >
                  Verify Certificate
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function GitHub() {
  const featuredRepos = repos.filter((r) => r.featured);
  const otherRepos = repos.filter((r) => !r.featured);

  return (
    <Section id="github" eyebrow="GitHub" heading="Code, Experiments & Projects">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
          >
            <Github size={16} />
            View GitHub Profile
          </a>
          <p className="text-sm text-muted">
            Manually configured repositories \u2014 add real repos as they become available.
          </p>
        </div>
      </Reveal>

      {/* Featured repos */}
      {featuredRepos.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featuredRepos.map((repo, i) => (
            <Reveal key={repo.id} delay={i * 80}>
              <div className="premium-card p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Github size={18} className="text-accent" />
                    <h3 className="text-base font-semibold">{repo.name}</h3>
                  </div>
                  <Badge variant="accent">Featured</Badge>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">{repo.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{repo.technology}</Badge>
                  <span className="text-xs font-mono text-subtle">{repo.date}</span>
                </div>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent"
                >
                  View Repository
                  <ExternalLink size={13} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {/* Other repos */}
      {otherRepos.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherRepos.map((repo, i) => (
            <Reveal key={repo.id} delay={i * 60}>
              <div className="premium-card p-5 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Github size={16} className="text-muted" />
                  <h3 className="text-sm font-semibold">{repo.name}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-3">{repo.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{repo.technology}</Badge>
                  <span className="text-xs font-mono text-subtle">{repo.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {/* GitHub achievements placeholder */}
      <Reveal delay={200}>
        <div className="mt-8 premium-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
              <Award size={18} />
            </div>
            <h3 className="text-base font-semibold">GitHub Achievements</h3>
          </div>
          <p className="text-sm text-muted">
            GitHub achievements and contribution stats will appear here once the GitHub URL is configured.
            Add verified achievements manually to avoid displaying fake statistics.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
