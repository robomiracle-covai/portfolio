import React from 'react';
import { Mail, Terminal, Star, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const githubLink = SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url || '#';
  const linkedinLink = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url || '#';
  const emailLink = SOCIAL_LINKS.find((s) => s.platform === 'Email')?.url || '#';

  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-14 md:py-20">
      <div className="container-custom relative z-10 w-full">
        {/* Main Heading - Sebastian Raschka Style */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-8 font-sans">
          Hello, I'm Ragunath Periyasamy
        </h1>

        {/* Bio Text & Circular Avatar 2-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center mb-6">
          {/* Left Column: Bio Paragraphs */}
          <div className="md:col-span-8 space-y-4 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] font-sans">
            <p>
              I am an AI Developer and Technology Experimenter with a focus on practical artificial intelligence, local language models, computer vision applications, and intelligent systems for real-world devices.
            </p>

            <p>
              My work bridges software engineering and emerging edge technologies, exploring how intelligent systems can run efficiently on consumer hardware, interact with the physical world, and eventually become part of robotics and humanoid systems.
            </p>

            <p>
              I explore open-source architectures, build hands-on prototypes, and document benchmarks and engineering insights in my{' '}
              <a href="#build-log" className="text-link">
                research build log
              </a>.
            </p>

            <p>
              My expertise lies in local LLM deployment, computer vision pipelines, and code-driven implementations. (For my most up-to-date background and details, please visit my{' '}
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-0.5"
              >
                <span>LinkedIn profile</span>
                <ExternalLink size={12} className="inline opacity-70" />
              </a>.)
            </p>
          </div>

          {/* Right Column: Circular Avatar Image (On mobile, positioned right after the paragraphs) */}
          <div className="md:col-span-4 flex justify-center md:justify-end items-center my-6 md:my-0">
            <div className="hero-avatar-wrap">
              <img
                src="/RAGU.png"
                alt="Ragunath Periyasamy"
                className="hero-avatar-img"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons - Sebastian Raschka Style Pill Buttons */}
        <div className="hero-button-group">
          <a href="#projects" className="btn-sebastian-dark">
            <Terminal size={15} />
            <span>Start Here</span>
          </a>

          <a href="#build-log" className="btn-sebastian-outline">
            <Star size={15} className="text-amber-500 fill-amber-500" />
            <span>Best Articles & Logs</span>
          </a>
        </div>

        {/* Quick Connect & Links Row */}
        <div className="hero-connect-row">
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <LinkedinIcon size={15} />
            <span className="group-hover:underline">LinkedIn Profile</span>
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <GithubIcon size={15} />
            <span className="group-hover:underline">GitHub Profile</span>
          </a>

          <a
            href={emailLink}
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <Mail size={15} />
            <span className="group-hover:underline">Contact via Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
