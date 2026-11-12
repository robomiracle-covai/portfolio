import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { MediaImage } from './MediaImage';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-[var(--bg-subtle)]/30 border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5 font-semibold">
              <Sparkles size={14} />
              <span>Personal</span>
            </div>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] font-mono max-w-sm mt-2 md:mt-0">
            Things I've built outside my day job.
          </p>
        </div>

        <div>
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              <div className={`project-layout ${project.image ? 'has-media' : ''}`}>
                {project.image && <MediaImage src={project.image} alt={project.name} />}

                <div>
                  {project.context && (
                    <div className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-wider font-semibold mb-2">
                      {project.context}
                    </div>
                  )}
                  <h3 className="project-title">{project.name}</h3>
                  {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}

                  <p className="project-desc font-sans">{project.description}</p>

                  <div className="project-stack-row">
                    <span className="project-stack-label">Stack:</span>
                    <div className="flex flex-wrap items-center">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(project.githubUrl || project.postUrl) && (
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      {project.postUrl && (
                        <a
                          href={project.postUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
                        >
                          <LinkedinIcon size={13} />
                          <span>{project.postLabel ?? 'Post'}</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
                        >
                          <GithubIcon size={13} />
                          <span>{project.githubLabel ?? 'Code'}</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
