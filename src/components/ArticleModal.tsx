import React, { useEffect } from 'react';
import { X, Calendar, Clock, ArrowLeft, Tag, Copy, Check } from 'lucide-react';
import type { BuildLogEntry } from '../types';

interface ArticleModalProps {
  log: BuildLogEntry | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ log, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (log) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [log, onClose]);

  if (!log) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Content */}
      <div className="relative z-10 w-full max-w-2xl bg-[var(--bg-primary)] h-full overflow-y-auto border-l border-[var(--border-subtle)] shadow-2xl p-6 sm:p-10 flex flex-col">
        {/* Header Navigation */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-8">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to Build Logs</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Article Meta Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {log.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {log.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
            {log.title}
          </h1>

          <p className="text-base text-[var(--text-secondary)] font-sans leading-relaxed italic">
            "{log.summary}"
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {log.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                <Tag size={10} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-sm sm:text-base font-sans text-[var(--text-primary)] leading-relaxed flex-grow">
          {/* Overview */}
          <div>
            <h2 className="font-serif text-xl font-medium text-[var(--text-primary)] mb-3 pb-1 border-b border-[var(--border-subtle)]">
              1. Executive Overview
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {log.content.overview}
            </p>
          </div>

          {/* Key Learnings */}
          <div>
            <h2 className="font-serif text-xl font-medium text-[var(--text-primary)] mb-3 pb-1 border-b border-[var(--border-subtle)]">
              2. Technical Findings & Insights
            </h2>
            <ul className="space-y-2.5">
              {log.content.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className="font-mono text-xs text-[var(--accent)] font-semibold mt-1">
                    0{idx + 1}.
                  </span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Architecture */}
          {log.content.technicalArchitecture && (
            <div>
              <h2 className="font-serif text-xl font-medium text-[var(--text-primary)] mb-3 pb-1 border-b border-[var(--border-subtle)]">
                3. System Design & Implementation
              </h2>
              <div className="p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {log.content.technicalArchitecture}
              </div>
            </div>
          )}

          {/* Code Snippet */}
          {log.content.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-serif text-xl font-medium text-[var(--text-primary)]">
                  4. Code Highlight
                </h2>
                <button
                  onClick={() => handleCopyCode(log.content.codeSnippet!.code)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              {log.content.codeSnippet.caption && (
                <p className="text-xs font-mono text-[var(--text-muted)] mb-2">
                  // {log.content.codeSnippet.caption}
                </p>
              )}

              <div className="relative rounded-lg overflow-hidden border border-[var(--border-strong)] bg-[var(--code-bg)] text-[var(--code-text)]">
                <pre className="p-4 overflow-x-auto">
                  <code>{log.content.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Next Steps */}
          {log.content.nextSteps && (
            <div>
              <h2 className="font-serif text-xl font-medium text-[var(--text-primary)] mb-3 pb-1 border-b border-[var(--border-subtle)]">
                5. Next Iterations
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                {log.content.nextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-8 mt-10 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] flex items-center justify-between">
          <span>Technical Journal Entry</span>
          <span>Ragunath Periyasamy Lab</span>
        </div>
      </div>
    </div>
  );
};
