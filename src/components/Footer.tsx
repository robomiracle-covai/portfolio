import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const githubLink = SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url || '#';
  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url || '#';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 sm:mt-24 py-12 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] text-sm font-sans text-[var(--text-secondary)]">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
        {/* Brand & Copy */}
        <div className="text-center md:text-left space-y-1.5 mt-2">
          <div className="font-sans text-xl font-bold text-[var(--text-primary)] tracking-tight">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            {PERSONAL_INFO.title}
          </div>
          <div className="text-xs text-[var(--text-muted)] pt-1">
            © 2026 Ragunath Periyasamy. All rights reserved.
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5 text-xs font-mono"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5 text-xs font-mono"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
