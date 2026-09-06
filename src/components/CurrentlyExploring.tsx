import React from 'react';
import { Compass } from 'lucide-react';
import { EXPLORING_TOPICS } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section id="exploring" className="section-padding bg-[var(--bg-subtle)]/40 border-y border-[var(--border-subtle)]">
      <div className="container-custom">
        {/* Section Title */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5">
            <Compass size={14} />
            <span>Active Directions</span>
          </div>
          <h2 className="section-title">Currently Exploring</h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-3">
            I believe some of the most interesting technology comes from experimentation. This space documents the technologies, ideas, and systems I'm currently exploring.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPLORING_TOPICS.map((topic) => (
            <div
              key={topic.id}
              className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg p-5 hover:border-[var(--border-strong)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl p-2 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-subtle)] shrink-0">
                    {topic.icon}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)]">
                      {topic.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[var(--text-muted)]">
                      {topic.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {topic.description}
                </p>
              </div>

              {/* Sub-Focus bullets */}
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Focus Vectors
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {topic.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
