import React from 'react';
import { Compass } from 'lucide-react';
import { EXPLORING_TOPICS } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section id="exploring" className="section-padding bg-[var(--bg-subtle)]/40 border-y border-[var(--border-subtle)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5 font-semibold">
            <Compass size={14} />
            <span>Active Directions</span>
          </div>
          <h2 className="section-title">Currently Exploring</h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-3">
            I believe some of the most interesting technology comes from experimentation. This space documents the technologies, ideas, and systems I'm currently exploring.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPLORING_TOPICS.map((topic) => (
            <div
              key={topic.id}
              className="exploring-card"
            >
              <div>
                {/* Header with Icon and Titles */}
                <div className="exploring-header">
                  <span className="exploring-icon-box">
                    {topic.icon}
                  </span>
                  <div>
                    <h3 className="exploring-item-title">
                      {topic.title}
                    </h3>
                    <p className="exploring-item-subtitle">
                      {topic.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="exploring-desc">
                  {topic.description}
                </p>
              </div>

              {/* Sub-Focus Vectors */}
              <div className="exploring-vectors-section">
                <div className="exploring-vectors-label">
                  Focus Vectors
                </div>
                <div className="exploring-tags-container">
                  {topic.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="exploring-tag"
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
