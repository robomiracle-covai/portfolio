import React from 'react';
import { Mail, ArrowDown, FileText } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, RESUME_URL } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const githubLink = SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url || '#';
  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url || '#';
  const emailLink = SOCIAL_LINKS.find((s) => s.platform === 'Email')?.url || '#';

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden py-14 md:py-20">
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center mb-6">
          {/* Headline + sub-line */}
          <div className="md:col-span-8">
            <p className="text-sm font-mono text-[var(--text-muted)] mb-3">{PERSONAL_INFO.name}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6 font-sans leading-tight">
              {PERSONAL_INFO.headline}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] font-sans max-w-2xl">
              {PERSONAL_INFO.subline}
            </p>
          </div>

          {/* Circular avatar */}
          <div className="md:col-span-4 flex justify-center md:justify-end items-center">
            <div className="hero-avatar-wrap">
              <img
                src="/profile.webp"
                alt="Ragunath Periyasamy"
                className="hero-avatar-img"
                width={260}
                height={260}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hero-button-group">
          <a href="#work" className="btn-sebastian-dark">
            <ArrowDown size={15} />
            <span>See my work</span>
          </a>

          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-sebastian-outline">
            <FileText size={15} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Connect Row */}
        <div className="hero-connect-row">
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <LinkedinIcon size={15} />
            <span className="group-hover:underline">LinkedIn</span>
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <GithubIcon size={15} />
            <span className="group-hover:underline">GitHub</span>
          </a>

          <a
            href={emailLink}
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <Mail size={15} />
            <span className="group-hover:underline">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
