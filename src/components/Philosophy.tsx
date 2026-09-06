import React from 'react';
import { Quote } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-16 bg-[var(--bg-subtle)]/60 border-y border-[var(--border-subtle)]">
      <div className="container-narrow text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--accent)] mb-6 shadow-sm">
          <Quote size={24} />
        </div>

        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[var(--text-primary)] leading-tight mb-4 max-w-2xl mx-auto">
          "{PERSONAL_INFO.philosophy.quote}"
        </blockquote>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] font-sans max-w-lg mx-auto italic">
          {PERSONAL_INFO.philosophy.subtext}
        </p>
      </div>
    </section>
  );
};
