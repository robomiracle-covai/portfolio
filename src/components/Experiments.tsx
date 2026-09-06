import React, { useState } from 'react';
import { FlaskConical, Filter, ExternalLink } from 'lucide-react';
import { EXPERIMENTS } from '../data/portfolioData';

export const Experiments: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'LLMs', 'Computer Vision', 'Android & Mobile', 'Robotics & Hardware', 'Voice & Audio'];

  const filteredExperiments = activeCategory === 'All'
    ? EXPERIMENTS
    : EXPERIMENTS.filter(e => e.category === activeCategory);

  return (
    <section id="experiments" className="section-padding bg-[var(--bg-subtle)]/30 border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5">
            <FlaskConical size={14} />
            <span>Micro-Prototypes</span>
          </div>
          <h2 className="section-title">Experiments</h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-2">
            Small ideas, prototypes, tests, and technical explorations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center mb-8 pb-4 border-b border-[var(--border-subtle)]">
          <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5 mr-4 mb-2">
            <Filter size={12} />
            Filter:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-pill ${
                  activeCategory === category
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExperiments.map((exp) => (
            <div
              key={exp.id}
              className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg p-6 hover:border-[var(--border-strong)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-wider">
                    {exp.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {exp.date}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        exp.status === 'Completed'
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                          : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {exp.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {exp.description}
                </p>
              </div>

              {/* Takeaway Box */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
                <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-xs">
                  <span className="font-mono font-semibold text-[var(--text-primary)] block mb-1">
                    Key Finding:
                  </span>
                  <span className="text-[var(--text-secondary)] italic">
                    "{exp.takeaway}"
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {exp.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="tech-tag text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1 shrink-0 ml-2"
                    >
                      <span>Code</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
