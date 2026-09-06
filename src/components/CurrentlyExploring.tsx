import React from 'react';
import { Compass, Bot, Brain, Smartphone, Eye, Box, Cog } from 'lucide-react';
import { EXPLORING_TOPICS } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'humanoid-robotics':
        return <Bot size={22} className="text-[var(--accent)]" />;
      case 'local-edge-llms':
        return <Brain size={22} className="text-[var(--accent)]" />;
      case 'ai-on-mobile':
        return <Smartphone size={22} className="text-[var(--accent)]" />;
      case 'computer-vision':
        return <Eye size={22} className="text-[var(--accent)]" />;
      case '3d-printing':
        return <Box size={22} className="text-[var(--accent)]" />;
      case 'intelligent-automation':
        return <Cog size={22} className="text-[var(--accent)]" />;
      default:
        return <Compass size={22} className="text-[var(--accent)]" />;
    }
  };

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
                {/* Header with Technical SVG Icon and Titles */}
                <div className="exploring-header">
                  <span className="exploring-icon-box">
                    {getTopicIcon(topic.id)}
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
