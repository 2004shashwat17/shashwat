import { skills, tools } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const categories = [
  { key: 'product', label: 'Product', items: skills.product },
  { key: 'business', label: 'Business', items: skills.business },
  { key: 'technical', label: 'Technical', items: skills.technical },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" heading="What I work with">
      <div className="grid lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <Reveal key={cat.key} delay={i * 100}>
            <div className="premium-card p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent text-xs font-mono font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-subtle border border-base text-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Tools */}
      <Reveal delay={300}>
        <div className="mt-8 premium-card p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent text-xs font-mono font-bold">
              04
            </span>
            <h3 className="text-lg font-semibold">Tools & Workflow</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-subtle border border-base text-muted hover:border-accent hover:text-accent transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
