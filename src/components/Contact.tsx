import React, { useState } from 'react';
import { Mail, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url || '#';
  const githubLink = SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url || '#';
  const emailAddress = PERSONAL_INFO.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-8 sm:p-12 shadow-sm text-center relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[var(--accent)]/5 pointer-events-none blur-2xl"></div>

          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[var(--bg-subtle)] text-[var(--accent)] mb-6">
            <MessageSquare size={22} />
          </div>

          <h2 className="section-title mb-4">Let's Connect</h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-8 font-sans">
            I'm always interested in connecting with people working on AI, robotics, local intelligence, computer vision, and emerging technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-w-[140px] justify-center"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} className="opacity-70" />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-w-[140px] justify-center"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
              <ArrowUpRight size={14} className="opacity-70" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-secondary min-w-[140px] justify-center cursor-pointer relative"
              title="Copy email address"
            >
              {copied ? <Check size={18} className="text-emerald-500" /> : <Mail size={18} />}
              <span>{copied ? 'Email Copied!' : 'Email Me'}</span>
            </button>
          </div>

          {/* Email Address Display */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
            <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">Direct Address:</span>
            <code className="text-xs sm:text-sm font-mono text-[var(--text-primary)] px-3 py-1 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] select-all">
              {emailAddress}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};
