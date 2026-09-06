import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
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
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="font-serif text-xl font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity flex items-center gap-1.5 shrink-0 mr-4"
        >
          <span>{PERSONAL_INFO.brandName}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="mr-1">
                <a
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1 px-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-[var(--border-strong)] mx-2 shrink-0"></div>

          {/* Social Icons & Theme Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1.5 rounded-md hover:bg-[var(--bg-subtle)]"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1.5 rounded-md hover:bg-[var(--bg-subtle)]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <button
              onClick={onToggleTheme}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1.5 rounded-md hover:bg-[var(--bg-subtle)] cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="text-[var(--text-secondary)] p-2 rounded-md hover:bg-[var(--bg-subtle)]"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--text-primary)] p-2 rounded-md hover:bg-[var(--bg-subtle)]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] px-6 py-4 animate-fade-in shadow-lg">
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
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
