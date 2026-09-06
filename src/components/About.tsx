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

        {/* Tech Focus Highlights Grid */}
        <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
            <div className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-1 font-semibold">
              Primary Objective
            </div>
            <div className="text-sm text-[var(--text-primary)]">
              Bridging local on-device AI models with real-world physical hardware and mobile devices.
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
            <div className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-1 font-semibold">
              Methodology
            </div>
            <div className="text-sm text-[var(--text-primary)]">
              Hands-on practical prototyping, continuous benchmarking, and open technical journal documentation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
