import { ArrowLeft, ArrowUpRight, ExternalLink, Play } from 'lucide-react';
import { products, type Product } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

type CaseStudyProps = {
  product: Product;
  onBack: () => void;
};

const sectionLabels = [
  '01 \u2014 Overview',
  '02 \u2014 Problem',
  '03 \u2014 Users / Business Context',
  '04 \u2014 My Role',
  '05 \u2014 Requirements',
  '06 \u2014 Product Thinking',
  '07 \u2014 User Workflow',
  '08 \u2014 Design / UX',
  '09 \u2014 Engineering Collaboration',
  '10 \u2014 Technical Implementation',
  '11 \u2014 Challenges',
  '12 \u2014 Decisions & Trade-offs',
  '13 \u2014 Product Screens',
  '14 \u2014 Product Demo / Video',
  '15 \u2014 Outcome',
  '16 \u2014 What I Learned',
  '17 \u2014 Related Content',
  '18 \u2014 Product Link',
];

export function CaseStudy({ product, onBack }: CaseStudyProps) {
  const cs = product.caseStudy;

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Hero header */}
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={onBack}
          className="reveal inline-flex items-center gap-2 text-sm text-muted hover:text-base transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to all products
        </button>

        <Reveal>
          <Badge variant="accent">{product.category}</Badge>
        </Reveal>
        <Reveal delay={50}>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">{product.name}</h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-3 text-lg text-muted">{product.tagline}</p>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-4 text-base text-muted leading-relaxed max-w-2xl">{product.description}</p>
        </Reveal>

        {product.website && (
          <Reveal delay={200}>
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              Visit {product.name}
              <ExternalLink size={14} />
            </a>
          </Reveal>
        )}

        {/* Accent line */}
        <div className="mt-8 h-px w-full bg-base" />
      </div>

      {/* Section nav */}
      <div className="sticky top-16 z-30 glass-nav border-y border-base py-3 my-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto no-scrollbar text-xs font-mono text-muted">
            {sectionLabels.map((label, i) => (
              <a
                key={i}
                href={`#cs-${i + 1}`}
                className="whitespace-nowrap hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <CSSection id="cs-1" label="01 \u2014 Overview">
          <p className="text-lg text-muted leading-relaxed">{cs.overview}</p>
        </CSSection>

        <CSSection id="cs-2" label="02 \u2014 Problem">
          <p className="text-lg text-muted leading-relaxed">{cs.problem}</p>
        </CSSection>

        <CSSection id="cs-3" label="03 \u2014 Users / Business Context">
          <p className="text-lg text-muted leading-relaxed">{cs.usersContext}</p>
        </CSSection>

        <CSSection id="cs-4" label="04 \u2014 My Role">
          <p className="text-lg text-muted leading-relaxed">{cs.myRole}</p>
        </CSSection>

        <CSSection id="cs-5" label="05 \u2014 Requirements">
          <List items={cs.requirements} />
        </CSSection>

        <CSSection id="cs-6" label="06 \u2014 Product Thinking">
          <List items={cs.productThinking} />
        </CSSection>

        <CSSection id="cs-7" label="07 \u2014 User Workflow">
          <div className="space-y-3">
            {cs.userWorkflow.map((step, i) => (
              <div key={i} className="flex items-start gap-4 premium-card p-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent text-xs font-mono font-bold shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base text-muted pt-1">{step}</p>
              </div>
            ))}
          </div>
        </CSSection>

        <CSSection id="cs-8" label="08 \u2014 Design / UX">
          <List items={cs.designUx} />
        </CSSection>

        <CSSection id="cs-9" label="09 \u2014 Engineering Collaboration">
          <List items={cs.engineeringCollab} />
        </CSSection>

        <CSSection id="cs-10" label="10 \u2014 Technical Implementation">
          <List items={cs.technicalImpl} />
        </CSSection>

        <CSSection id="cs-11" label="11 \u2014 Challenges">
          <List items={cs.challenges} />
        </CSSection>

        <CSSection id="cs-12" label="12 \u2014 Decisions & Trade-offs">
          <List items={cs.decisions} />
        </CSSection>

        <CSSection id="cs-13" label="13 \u2014 Product Screens">
          <div className="grid sm:grid-cols-2 gap-4">
            {cs.screens.map((screen, i) => (
              <div key={i} className="premium-card aspect-video flex items-center justify-center p-6 text-center">
                <span className="text-sm text-subtle">{screen}</span>
              </div>
            ))}
          </div>
        </CSSection>

        <CSSection id="cs-14" label="14 \u2014 Product Demo / Video">
          <div className="premium-card aspect-video flex items-center justify-center p-6 text-center cursor-pointer hover:border-accent transition-colors">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                <Play size={24} />
              </div>
              <span className="text-sm text-subtle">{cs.demo}</span>
            </div>
          </div>
        </CSSection>

        <CSSection id="cs-15" label="15 \u2014 Outcome">
          <div className="premium-card p-6">
            <p className="text-lg text-muted leading-relaxed">{cs.outcome}</p>
          </div>
        </CSSection>

        <CSSection id="cs-16" label="16 \u2014 What I Learned">
          <List items={cs.learned} />
        </CSSection>

        <CSSection id="cs-17" label="17 \u2014 Related Content">
          <div className="flex flex-wrap gap-2">
            {cs.relatedContent.map((content, i) => (
              <Badge key={i} variant="outline">{content}</Badge>
            ))}
          </div>
        </CSSection>

        <CSSection id="cs-18" label="18 \u2014 Product Link">
          {cs.productLink ? (
            <a
              href={cs.productLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              {cs.productLink}
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <p className="text-sm text-subtle">[No standalone product link \u2014 domain case study]</p>
          )}
        </CSSection>
      </div>
    </div>
  );
}

function CSSection({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div id={id} className="reveal scroll-mt-32">
      <h2 className="text-sm font-mono uppercase tracking-widest text-subtle mb-4">{label}</h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
          <span className="text-base text-muted leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
