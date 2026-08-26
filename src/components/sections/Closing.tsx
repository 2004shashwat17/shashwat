import { Download, FileText, ArrowUpRight, Mail, Globe } from 'lucide-react';
import { whatsNext, resume, contact, profile, clientalioSocial } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function WhatsNext() {
  return (
    <Section id="whats-next" eyebrow="What&rsquo;s Next" heading={whatsNext.heading}>
      <Reveal>
        <div className="premium-card p-8 md:p-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
              <Globe size={22} />
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted leading-relaxed text-balance">
            {whatsNext.content}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" heading="Resume">
      <Reveal>
        <div className="premium-card p-8 md:p-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">My Resume</h3>
              <p className="text-sm text-muted">{resume.note}</p>
            </div>
          </div>
          <p className="text-sm text-subtle mb-6">
            The website provides richer proof than the resume \u2014 but the resume is available as a supporting document.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-base text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              <FileText size={16} />
              View Resume
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" heading={contact.heading}>
      <Reveal>
        <p className="text-lg text-muted max-w-2xl mb-8 text-balance leading-relaxed">
          {contact.supporting}
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Reveal delay={0}>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-6 h-full flex flex-col group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
              <LinkedInIcon />
            </div>
            <h3 className="text-base font-semibold mb-1">LinkedIn</h3>
            <p className="text-sm text-muted mb-4 flex-1">Connect with me on LinkedIn</p>
            <span className="inline-flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all">
              Connect <ArrowUpRight size={14} />
            </span>
          </a>
        </Reveal>

        <Reveal delay={80}>
          <a
            href={`mailto:${profile.email}`}
            className="premium-card p-6 h-full flex flex-col group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
              <Mail size={22} />
            </div>
            <h3 className="text-base font-semibold mb-1">Email</h3>
            <p className="text-sm text-muted mb-4 flex-1">Send me an email directly</p>
            <span className="inline-flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all">
              Email <ArrowUpRight size={14} />
            </span>
          </a>
        </Reveal>

        <Reveal delay={160}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-6 h-full flex flex-col group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
              <GitHubIcon />
            </div>
            <h3 className="text-base font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-muted mb-4 flex-1">See my code and projects</p>
            <span className="inline-flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all">
              View <ArrowUpRight size={14} />
            </span>
          </a>
        </Reveal>

        <Reveal delay={240}>
          <a
            href={resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-6 h-full flex flex-col group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
              <FileText size={22} />
            </div>
            <h3 className="text-base font-semibold mb-1">Resume</h3>
            <p className="text-sm text-muted mb-4 flex-1">Download my latest resume</p>
            <span className="inline-flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all">
              Download <ArrowUpRight size={14} />
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Product Thinking', id: 'thinking' },
    { label: 'Skills', id: 'skills' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="border-t border-base bg-subtle">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-2">{profile.name}</h2>
            <p className="text-sm text-muted mb-4">{profile.title}</p>
            <div className="flex items-center gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-accent transition-colors" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href={`mailto:${profile.email}`} className="p-2 text-muted hover:text-accent transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-subtle mb-4">Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-muted hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clientalio */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-subtle mb-4">Clientalio</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://clientalio.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">
                  Website
                </a>
              </li>
              {clientalioSocial.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-base flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-subtle">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-subtle font-mono">
            Product Manager &bull; Product Builder
          </p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.08 1.83 2.81 1.3 3.5.99.1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3" />
    </svg>
  );
}
