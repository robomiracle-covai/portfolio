export interface Project {
  id: string;
  name: string;
  subtitle?: string;
  image?: string;
  description: string;
  technologies: string[];
  context?: string;
  githubUrl?: string;
  githubLabel?: string;
}

export interface Robot {
  id: string;
  name: string;
  image?: string;
  secondaryImage?: string;
  description: string;
  role?: string;
}

export interface BuildLogEntry {
  id: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  content: {
    overview: string;
    keyLearnings: string[];
    technicalArchitecture?: string;
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
    nextSteps?: string[];
  };
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  handle: string;
}
