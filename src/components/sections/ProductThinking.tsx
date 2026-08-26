import { ArrowUpRight, BookOpen } from 'lucide-react';
import { articles } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

export function ProductThinking() {
  return (
    <Section id="thinking" eyebrow="Product Thinking" heading="How I think about products">
      <div className="grid md:grid-cols-2 gap-4">
        {articles.map((article, i) => (
          <Reveal key={article.id} delay={i * 60}>
            <article className="premium-card p-6 h-full flex flex-col group cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={14} className="text-accent" />
                <Badge variant="outline">{article.category}</Badge>
                <span className="text-xs text-subtle ml-auto font-mono">{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1">{article.summary}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
                Read Article
                <ArrowUpRight size={14} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
