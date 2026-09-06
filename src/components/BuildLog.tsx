import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Calendar } from 'lucide-react';
import { BUILD_LOGS } from '../data/portfolioData';
import type { BuildLogEntry } from '../types';
import { ArticleModal } from './ArticleModal';

export const BuildLog: React.FC = () => {
  const [selectedLog, setSelectedLog] = useState<BuildLogEntry | null>(null);

  return (
    <section id="build-log" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5 font-semibold">
              <BookOpen size={14} />
              <span>Research Journal</span>
            </div>
            <h2 className="section-title">Build Log</h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] font-mono max-w-sm mt-2 md:mt-0">
            Notes, benchmarks, and engineering insights from active development.
          </p>
        </div>

        {/* Journal Entries List */}
        <div className="divide-y divide-[var(--border-subtle)]">
          {BUILD_LOGS.map((entry) => (
            <article
              key={entry.id}
              onClick={() => setSelectedLog(entry)}
              className="buildlog-entry group px-3 sm:px-4 rounded-lg -mx-3 sm:-mx-4 flex flex-col md:flex-row md:items-baseline justify-between gap-4"
            >
              {/* Date & Tags Column */}
              <div className="md:w-52 shrink-0 flex flex-col gap-2 buildlog-date-col">
                <div className="buildlog-date">
                  <Calendar size={13} />
                  <span>{entry.date}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {entry.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tech-tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Summary */}
              <div className="flex-grow space-y-2">
                <h3 className="buildlog-title-text group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
                  <span>{entry.title}</span>
                  <ArrowUpRight
                    size={20}
                    className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-3"
                  />
                </h3>
                <p className="buildlog-summary-text font-sans">
                  {entry.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Slide-over Reader Modal */}
      <ArticleModal log={selectedLog} onClose={() => setSelectedLog(null)} />
    </section>
  );
};
