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
        <div className="contact-card shadow-sm">
          {/* Subtle background decoration */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[var(--accent)]/5 pointer-events-none blur-2xl"></div>

          <div className="contact-icon-box">
            <MessageSquare size={22} />
          </div>

          <h2 className="section-title mb-4">Let's Connect</h2>

          <p className="contact-desc font-sans">
            I'm always interested in connecting with people working on AI, robotics, local intelligence, computer vision, and emerging technologies.
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

            <button
              onClick={handleCopyEmail}
              className="btn-secondary contact-btn cursor-pointer relative"
              title="Copy email address"
            >
              {copied ? <Check size={18} className="text-emerald-500" /> : <Mail size={18} />}
              <span>{copied ? 'Email Copied!' : 'Email Me'}</span>
            </button>
          </div>

          {/* Email Address Display */}
          <div className="contact-email-box">
            <span className="contact-email-label block">Direct Address:</span>
            <code className="contact-email-code select-all">
              {emailAddress}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};
