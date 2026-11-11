import React, { useState } from 'react';
import { Mail, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url || '#';
  const githubLink = SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url || '#';
  const emailAddress = PERSONAL_INFO.email;

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(emailAddress).then(() => setCopied(true)).catch(() => {});
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="contact-card shadow-sm">
          {/* Subtle background decoration */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[var(--accent)]/5 pointer-events-none blur-2xl"></div>

          <div className="contact-icon-box">
            <MessageSquare size={22} />
          </div>

          <h2 className="section-title mb-4">Let's Connect</h2>

          <p className="contact-desc font-sans">
            I'm always happy to talk with people working on robotics, on-device AI, LLMs and computer vision.
          </p>

          {/* Action Buttons */}
          <div className="contact-button-row">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary contact-btn"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} className="opacity-70 ml-1" />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary contact-btn"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
              <ArrowUpRight size={14} className="opacity-70 ml-1" />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="btn-secondary contact-btn"
            >
              <Mail size={18} />
              <span>Email Me</span>
            </a>
          </div>

          {/* Email & Contact Details Display */}
          <div className="contact-email-box">
            <span className="contact-email-label block">Direct Details:</span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a href={`mailto:${emailAddress}`} className="contact-email-code select-all hover:border-[var(--border-strong)] transition-colors">
                {emailAddress}
              </a>
              <button
                onClick={handleCopyEmail}
                className="contact-email-code cursor-pointer hover:border-[var(--border-strong)] transition-colors flex items-center gap-1.5"
                title="Copy email address"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
