
export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon?: 'trophy' | 'medal' | 'code' | 'star';
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
