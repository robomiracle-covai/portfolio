import React from 'react';
import { User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-[var(--border-subtle)]">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5">
            <User size={14} />
            <span>Background & Vision</span>
          </div>
          <h2 className="section-title">About</h2>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
          {PERSONAL_INFO.about.paragraphs.map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? "text-[var(--text-primary)] font-medium text-lg sm:text-xl" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Experience & Education */}
        <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="about-focus-card">
            <div className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-3 font-semibold">
              Experience
            </div>
            <ul className="space-y-3">
              {PERSONAL_INFO.about.experience.map((job) => (
                <li key={job.role + job.org}>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{job.role}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{job.org}</div>
                  <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">{job.period}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-focus-card">
            <div className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-3 font-semibold">
              Education
            </div>
            <div className="text-sm font-semibold text-[var(--text-primary)]">{PERSONAL_INFO.about.education.degree}</div>
            <div className="text-sm text-[var(--text-secondary)]">{PERSONAL_INFO.about.education.school}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
