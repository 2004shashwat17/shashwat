import { experience, education, journey } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" heading="Where I&rsquo;ve worked">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-base" />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 100}>
              <div className={`relative flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-base" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                  <div className="premium-card p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm text-accent">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-subtle">{exp.duration}</span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-4">
                      {exp.responsibilities.map((r, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                          <span className="text-xs text-muted">{r}</span>
                        </div>
                      ))}
                    </div>

                    {/* Products */}
                    {exp.products.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {exp.products.map((p) => (
                          <Badge key={p} variant="outline">{p}</Badge>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((s) => (
                          <span key={s} className="text-xs text-subtle">{s}</span>
                        )).reduce((acc: React.ReactNode[], el, idx) => {
                          if (idx > 0) acc.push(<span key={`sep-${idx}`} className="text-subtle">&bull;</span>);
                          acc.push(el);
                          return acc;
                        }, [])}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" heading="Education">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <Reveal key={edu.id} delay={i * 100}>
            <div className="premium-card p-6 h-full">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.university}</h3>
                  <p className="text-sm text-accent">{edu.program}</p>
                </div>
                <Badge variant={i === 0 ? 'accent' : 'outline'}>{edu.status}</Badge>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-subtle">Location: </span>
                  <span className="text-muted">{edu.location}</span>
                </div>
                <div>
                  <span className="text-subtle">Start: </span>
                  <span className="text-muted">{edu.startYear}</span>
                </div>
                <div>
                  <span className="text-subtle">Expected: </span>
                  <span className="text-muted">{edu.expectedCompletion}</span>
                </div>
              </div>

              {edu.subjects.length > 0 && (
                <div className="mt-4 pt-4 border-t border-base">
                  <p className="text-xs font-mono uppercase tracking-widest text-subtle mb-2">Relevant Subjects</p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.subjects.map((s) => (
                      <Badge key={s} variant="outline">{s}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {edu.highlights.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-subtle mb-2">Highlights</p>
                  <ul className="space-y-1">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-muted flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function JourneyTimeline() {
  return (
    <Section id="journey" eyebrow="Journey" heading="Product Journey">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />
        <div className="space-y-6">
          {journey.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="relative flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-accent bg-base text-accent text-xs font-mono font-bold shrink-0 z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-base font-semibold">{item.label}</h3>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
