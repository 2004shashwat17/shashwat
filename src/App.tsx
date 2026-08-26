import { useState, useEffect, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProofStrip, About, WhatIBuild } from '@/components/sections/About';
import { Products } from '@/components/sections/Products';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { ProductThinking } from '@/components/sections/ProductThinking';
import { ProductVideos } from '@/components/sections/ProductVideos';
import { Skills } from '@/components/sections/Skills';
import { Experience, Education, JourneyTimeline } from '@/components/sections/Experience';
import { Achievements, Certifications, GitHub } from '@/components/sections/Achievements';
import { WhatsNext, Resume, Contact, Footer } from '@/components/sections/Closing';
import { products, profile } from '@/data/portfolio';

function App() {
  const [caseStudyId, setCaseStudyId] = useState<string | null>(null);

  const handleNavigate = useCallback((id: string) => {
    if (caseStudyId) {
      setCaseStudyId(null);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [caseStudyId]);

  const handleCaseStudy = useCallback((id: string) => {
    setCaseStudyId(id);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const handleBack = useCallback(() => {
    setCaseStudyId(null);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // Re-run reveal observer when view changes
  useEffect(() => {
    if (!caseStudyId) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
      );
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      // For case study view, reveal all immediately
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    }
  }, [caseStudyId]);

  // Update document title and meta
  useEffect(() => {
    if (caseStudyId) {
      const product = products.find((p) => p.id === caseStudyId);
      if (product) {
        document.title = `${product.name} \u2014 Case Study | ${profile.name}`;
      }
    } else {
      document.title = `${profile.name} \u2014 Product Manager & Product Builder`;
    }
  }, [caseStudyId]);

  const activeProduct = caseStudyId ? products.find((p) => p.id === caseStudyId) : null;

  return (
    <div className="min-h-screen bg-base text-base">
      <Navbar onNavigate={handleNavigate} />

      {activeProduct ? (
        <CaseStudy product={activeProduct} onBack={handleBack} />
      ) : (
        <main>
          <Hero onNavigate={handleNavigate} />
          <ProofStrip />
          <About />
          <WhatIBuild />
          <Products onCaseStudy={handleCaseStudy} />
          <ProductThinking />
          <ProductVideos />
          <Skills />
          <Experience />
          <Education />
          <JourneyTimeline />
          <Achievements />
          <Certifications />
          <GitHub />
          <WhatsNext />
          <Resume />
          <Contact />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
