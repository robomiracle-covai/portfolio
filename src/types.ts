export interface Project {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  fullDetails?: string;
  technologies: string[];
  status: 'Active Development' | 'Research & Experimentation' | 'Experimental' | 'Exploration';
  statusColor?: string;
  githubUrl?: string;
  demoUrl?: string;
  isPrimary?: boolean;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
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

export interface Experiment {
  id: string;
  title: string;
  category: 'LLMs' | 'Computer Vision' | 'Android & Mobile' | 'Robotics & Hardware' | 'Voice & Audio';
  description: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
  date: string;
  technologies: string[];
  takeaway: string;
  codeSnippet?: string;
  githubUrl?: string;
}

export interface ExploringTopic {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  handle: string;
}
