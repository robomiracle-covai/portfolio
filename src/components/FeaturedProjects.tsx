import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, Cpu } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

export const FeaturedProjects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('local-ai-edge-llms');

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  const getStatusBadgeClass = (status: Project['status']) => {
    switch (status) {
      case 'Active Development':
        return 'status-active';
      case 'Research & Experimentation':
        return 'status-research';
      case 'Experimental':
        return 'status-experimental';
      case 'Exploration':
        return 'status-exploration';
      default:
        return 'status-research';
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5">
              <Cpu size={14} />
              <span>Projects & Systems</span>
            </div>
            <h2 className="section-title">Featured Work</h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] font-mono max-w-sm mt-2 md:mt-0">
            Selected practical prototypes, edge models, and hardware integrations.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {FEATURED_PROJECTS.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <article
                key={project.id}
                className={`editorial-card relative transition-all duration-200 ${
                  project.isPrimary
                    ? 'border-[var(--accent)]/40 ring-1 ring-[var(--accent)]/20'
                    : 'border-[var(--border-subtle)]'
                }`}
              >
                {/* Primary Tag */}
                {project.isPrimary && (
                  <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-[var(--accent)] text-white shadow-sm flex items-center gap-1">
                    <Sparkles size={11} />
                    <span>Primary Focus</span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
                        {project.name}
                      </h3>
                      <span className={`status-badge ${getStatusBadgeClass(project.status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        <span>{project.status}</span>
                      </span>
                    </div>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-[var(--text-muted)] mb-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs py-1.5 px-3"
                        aria-label={`GitHub repo for ${project.name}`}
                      >
                        <GithubIcon size={14} />
                        <span>Source</span>
                      </a>
                    )}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1 py-1.5 px-2.5 rounded hover:bg-[var(--bg-subtle)] border border-transparent hover:border-[var(--border-subtle)] transition-all cursor-pointer"
                    >
                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5 font-sans">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-mono text-[var(--text-muted)] mr-2">Stack:</span>
                  <div className="flex flex-wrap items-center">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] space-y-4 animate-fade-in">
                    {project.fullDetails && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                          Architecture Overview
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {project.fullDetails}
                        </p>
                      </div>
                    )}

                    {/* Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                          Key Technical Characteristics
                        </h4>
                        <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Metrics / Specifications */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="pt-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {project.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)]"
                            >
                              <div className="text-[11px] font-mono text-[var(--text-muted)]">
                                {metric.label}
                              </div>
                              <div className="text-xs sm:text-sm font-mono font-semibold text-[var(--text-primary)] mt-0.5">
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
