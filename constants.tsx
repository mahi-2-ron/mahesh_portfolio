import { SkillCategory, Achievement, NavItem, Project } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/mahi-2-ron",
  linkedin: "https://www.linkedin.com/in/mahesh-r-madiwalar-9a468b345/",
  leetcode: "https://leetcode.com/u/Mahesh_R_Madiwalar/",
  email: "maheshrmadiwalar@gmail.com", 
  phone: "7022842812",
  resume: "https://drive.google.com/file/d/1tw0jCz5B8NGwNe6GpkWPvjBpDcvDpJ2-/view?usp=drive_link" 
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'Python', 'C'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Firebase'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Netlify', 'VS Code'],
  },
  {
    title: 'Core CS',
    skills: ['DSA', 'OOP', 'Computer Networks'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Vijnana Lab',
    description: 'Award-winning AI-powered virtual laboratory platform. Enables practical science learning through simulations and AI assistance. Awarded First Prize in inter-college hackathon.',
    stack: [],
    githubUrl: 'https://github.com/mahi-2-ron/vijnanalab_by_supra',
    liveUrl: 'https://vijnanalabbyteamsupra.netlify.app/#/home',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', 
  },
  {
    id: 'p2',
    name: 'Rakhta Setu',
    description: 'A real-time blood donation management system designed to connect donors with recipients instantly. Features location-based donor discovery and emergency request tracking to save lives in critical situations.',
    stack: [], 
    githubUrl: 'https://github.com/mahi-2-ron',
    liveUrl: 'https://rakthasetu.netlify.app/',
    imageUrl: 'https://images.unsplash.com/photo-1615461066841-6116ecaaba7f?auto=format&fit=crop&q=80&w=800', 
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Technical Co-Lead',
    organization: 'E-Cell',
    date: '2024 - Present',
    description: 'Leading technical initiatives, supporting event execution, and contributing to the development of tech-driven solutions and platforms for entrepreneurship-focused activities.',
    icon: 'code'
  },
  {
    id: 'a2',
    title: 'DSA Co-Lead',
    organization: 'Google Developer Groups (GDG)',
    date: '2024 - Present',
    description: 'Mentoring peers in Data Structures and Algorithms, organizing problem-solving sessions, and helping build a strong coding culture within the student community.',
    icon: 'star'
  },
  {
    id: 'a3',
    title: 'NEC 2025 – Rank 164',
    organization: 'E-Cell IIT Bombay',
    date: '2025',
    description: 'Secured Rank 164 in the Basic Track of National Entrepreneurship Challenge (NEC), a nationwide competition organized by E-Cell IIT Bombay.',
    icon: 'trophy'
  },
  {
    id: 'a4',
    title: 'Active Hackathon Participant',
    organization: 'Technical Events',
    date: 'Ongoing',
    description: 'Participated in multiple hackathons and technical events, gaining hands-on experience in building real-world solutions under time constraints.',
    icon: 'medal'
  },
  {
    id: 'a5',
    title: 'Backend & DSA Project Development',
    organization: 'Software Development',
    date: 'Ongoing',
    description: 'Successfully built and contributed to projects emphasizing backend development, clean architecture, and strong problem-solving fundamentals.',
    icon: 'code'
  }
];