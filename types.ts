
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  stars: number;
  forks: number;
  language: string;
  color: string;
  detailedInsights: string;
  repoUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Languages' | 'ML/DL' | 'Tools' | 'Statistics';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
