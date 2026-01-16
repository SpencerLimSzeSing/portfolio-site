
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  category: 'Machine Learning' | 'Deep Learning' | 'Data Visualization' | 'Statistical Analysis';
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
