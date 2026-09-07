import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import type { Theme } from '../utils/theme';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Build Log', href: '#build-log' },
    { name: 'Experiments', href: '#experiments' },
    { name: 'Exploring', href: '#exploring' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const githubLink = SOCIAL_LINKS.find(s => s.platform === 'GitHub')?.url || '#';
  const linkedinLink = SOCIAL_LINKS.find(s => s.platform === 'LinkedIn')?.url || '#';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[var(--border-subtle)] ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-[var(--bg-primary)] py-3 sm:py-4'
      }`}
    >
      <div className="container-custom">
        {/* Top Header Row: Brand + Social Icons + Theme Switch */}
        <div className="flex items-center justify-between gap-4 pb-2.5">
          {/* Brand Name */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity font-sans flex items-baseline gap-1.5"
            >
              <span>Ragunath</span>
              <span className="text-[var(--accent)] font-bold">Periyasamy</span>
            </a>

            {/* Social Icons Inline next to brand on desktop */}
            <div className="hidden sm:flex items-center gap-2 ml-3 pl-3 border-l border-[var(--border-subtle)]">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          {/* Right Side: Theme Switch Pill + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Sebastian Raschka Style Pill Switch */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs font-mono text-[var(--text-muted)]">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
              <button
                onClick={onToggleTheme}
                className="theme-switch-pill"
                role="switch"
                aria-checked={theme === 'dark'}
                aria-label="Toggle dark mode"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <span className="theme-switch-thumb">
                  {theme === 'dark' ? (
                    <Moon size={11} className="text-[#1f6feb]" />
                  ) : (
                    <Sun size={11} className="text-amber-500" />
                  )}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[var(--text-primary)] p-1.5 rounded-md hover:bg-[var(--bg-subtle)] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Sub-Navigation Row: Horizontal category links */}
        <nav className="hidden md:flex items-center pt-1 border-t border-[var(--border-subtle)]/60">
          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium py-1">
            {navLinks.map((link, idx) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-0.5 relative group ${
                    idx === 0 ? 'text-[var(--accent)] font-semibold' : ''
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] px-6 py-4 animate-fade-in shadow-lg">
          <ul className="flex flex-col gap-3 font-medium text-base mb-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] block py-1.5"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)]">Ragunath Periyasamy</span>
            <div className="flex items-center gap-4">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
