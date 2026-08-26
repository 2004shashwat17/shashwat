import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { products, type Product } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

type ProductsProps = {
  onCaseStudy: (id: string) => void;
};

export function Products({ onCaseStudy }: ProductsProps) {
  return (
    <Section id="work" eyebrow="Work" heading="Products I&rsquo;ve helped build">
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 100}>
            <ProductCard product={product} onCaseStudy={onCaseStudy} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProductCard({ product, onCaseStudy, index }: { product: Product; onCaseStudy: (id: string) => void; index: number }) {
  const isLarge = index === 0 || index === 1;
  return (
    <div
      className={`premium-card p-6 md:p-8 h-full flex flex-col group cursor-pointer ${isLarge ? 'md:col-span-1' : ''}`}
      onClick={() => onCaseStudy(product.id)}
    >
      {/* Top: number + category */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-xs font-mono text-subtle">
          {String(index + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
        </span>
        <Badge variant="accent">{product.category}</Badge>
      </div>

      {/* Product name */}
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
        {product.name}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-muted mb-4">{product.tagline}</p>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
        {product.description}
      </p>

      {/* Social links */}
      {product.social && product.social.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {product.social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors"
            >
              {s.label}
              <ExternalLink size={11} />
            </a>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-base">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCaseStudy(product.id);
          }}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
        >
          View Case Study
          <ArrowUpRight size={14} />
        </button>
        {product.website && (
          <a
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-base transition-colors ml-auto"
          >
            Visit
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      {/* Accent line */}
      <div
        className="mt-6 h-1 rounded-full transition-all duration-500 group-hover:w-full w-12"
        style={{ backgroundColor: product.accent }}
      />
    </div>
  );
}
