import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { BuildLog } from './components/BuildLog';
import { Experiments } from './components/Experiments';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { getInitialTheme, setTheme } from './utils/theme';
import type { Theme } from './utils/theme';

export function App() {
  const [theme, setCurrentTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setCurrentTheme(nextTheme);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-200">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <Hero />
        <div className="section-divider"></div>
        <FeaturedProjects />
        <CurrentlyExploring />
        <BuildLog />
        <Experiments />
        <Philosophy />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
