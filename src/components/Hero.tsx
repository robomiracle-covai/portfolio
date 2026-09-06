import React from 'react';
import { ArrowRight, BookOpen, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { NodeNetworkCanvas } from './NodeNetworkCanvas';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const githubLink = SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url || '#';
  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url || '#';
  const emailLink = SOCIAL_LINKS.find((s) => s.platform === 'Email')?.url || '#';

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 md:py-28">
      {/* Subtle Node Canvas Backdrop */}
      <NodeNetworkCanvas />

      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-start">
          
          {/* Status / Identity Pill */}
          <div className="hero-status-pill px-3.5 py-1.5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span>On-device AI · Local LLMs · Robotics</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--text-primary)] leading-[1.15]">
            {PERSONAL_INFO.headline}
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle text-xl sm:text-2xl font-normal text-[var(--accent)] font-sans tracking-tight">
            {PERSONAL_INFO.subtitle}
          </h2>

          {/* Description */}
          <p className="hero-description text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl font-sans">
            {PERSONAL_INFO.description}
          </p>

          {/* Action Buttons */}
          <div className="hero-button-group">
            <a href="#projects" className="btn-primary hero-btn">
              <span>View My Projects</span>
              <ArrowRight size={16} />
            </a>

            <a href="#build-log" className="btn-secondary hero-btn">
              <BookOpen size={16} />
              <span>Read My Build Log</span>
            </a>
          </div>

          {/* Identity Statement Banner */}
          <div className="hero-ethos-banner w-full rounded-lg bg-[var(--bg-subtle)]/70 border border-[var(--border-subtle)] flex items-start gap-3.5">
            <Terminal size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] leading-relaxed">
              <span className="text-[var(--text-primary)] font-semibold">Ethos: </span>
              "{PERSONAL_INFO.identityStatement}"
            </p>
          </div>

          {/* Social Links */}
          <div className="hero-connect-row text-sm font-medium text-[var(--text-secondary)] w-full">
            <span className="hero-connect-label text-xs uppercase tracking-wider text-[var(--text-muted)] font-mono">
              Connect:
            </span>
            
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-connect-link hover:text-[var(--text-primary)] transition-colors group"
            >
              <GithubIcon size={16} />
              <span className="underline decoration-[var(--border-strong)] group-hover:decoration-[var(--text-primary)] underline-offset-4">
                GitHub
              </span>
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-connect-link hover:text-[var(--text-primary)] transition-colors group"
            >
              <LinkedinIcon size={16} />
              <span className="underline decoration-[var(--border-strong)] group-hover:decoration-[var(--text-primary)] underline-offset-4">
                LinkedIn
              </span>
            </a>

            <a
              href={emailLink}
              className="hero-connect-link hover:text-[var(--text-primary)] transition-colors group"
            >
              <Mail size={16} />
              <span className="underline decoration-[var(--border-strong)] group-hover:decoration-[var(--text-primary)] underline-offset-4">
                Email
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
