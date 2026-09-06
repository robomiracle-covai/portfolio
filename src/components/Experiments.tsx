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
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5 font-semibold">
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
          <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5 mr-4 mb-2 shrink-0">
            <Filter size={12} />
            Filter:
          </span>
          <div className="flex flex-wrap items-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredExperiments.map((exp) => (
            <div
              key={exp.id}
              className="experiment-card"
            >
              <div>
                <div className="experiment-header">
                  <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
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

                <h3 className="experiment-title">
                  {exp.title}
                </h3>

                <p className="experiment-desc font-sans">
                  {exp.description}
                </p>
              </div>

              {/* Takeaway Box */}
              <div>
                <div className="experiment-takeaway-box">
                  <span className="font-mono font-semibold text-[var(--text-primary)] block mb-1">
                    Key Finding:
                  </span>
                  <span className="text-[var(--text-secondary)] italic">
                    "{exp.takeaway}"
                  </span>
                </div>

                <div className="experiment-footer">
                  <div className="flex flex-wrap items-center">
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
                      className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1 shrink-0 ml-2 mb-2"
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
