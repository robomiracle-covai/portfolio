import React from 'react';
import { Bot, ExternalLink } from 'lucide-react';
import { ROBOTS, ROBOTS_SUMMARY, ROBOMIRACLE_URL } from '../data/portfolioData';
import { MediaImage } from './MediaImage';

const ProductLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="robot-link">
    <span>{label}</span>
    <ExternalLink size={12} />
  </a>
);

export const Work: React.FC = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        <div className="mb-10 pb-4 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5 font-semibold">
              <Bot size={14} />
              <span>Work</span>
            </div>
            <h2 className="section-title">Work at RoboMiracle</h2>
          </div>
          <a
            href={ROBOMIRACLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="company-logo"
            aria-label="RoboMiracle website"
            title="Visit robomiracle.com"
          >
            <img src="/robomiracle-logo.webp" alt="RoboMiracle" width={160} height={44} loading="lazy" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROBOTS.map((robot) => (
            <article key={robot.id} className="robot-card">
              {robot.secondaryImage ? (
                <div className="grid grid-cols-2 gap-2">
                  <MediaImage src={robot.image} alt="Nila" />
                  <MediaImage src={robot.secondaryImage} alt="Dine Bot" />
                </div>
              ) : (
                <MediaImage src={robot.image} alt={robot.name} />
              )}
              <div className="robot-card-body">
                <h3 className="experiment-title">{robot.name}</h3>
                <p className="experiment-desc font-sans">{robot.description}</p>
                {robot.role && (
                  <p className="robot-role">
                    <span>My role:</span> {robot.role}
                  </p>
                )}
                {robot.url && (
                  <div className="robot-links">
                    {robot.secondaryUrl ? (
                      <>
                        <ProductLink href={robot.url} label="Nila" />
                        <ProductLink href={robot.secondaryUrl} label="Dine Bot" />
                      </>
                    ) : (
                      <ProductLink href={robot.url} label="Product page" />
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-3xl">
          {ROBOTS_SUMMARY}
        </p>
      </div>
    </section>
  );
};
