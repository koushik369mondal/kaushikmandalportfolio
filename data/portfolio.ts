export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  purpose: string;
  features: string[];
  technologies: string[];
  status: "Completed" | "In Development" | "Concept";
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Kaushik Mandal",
  role: "CSE Student & Full-Stack Developer",
  university: "Assam down town University",
  degree: "B.Tech in Computer Science and Engineering (Industry Integrated)",
  email: "koushik369mondal@gmail.com",
  github: "https://github.com/koushik369mondal",
  leetcode: "https://leetcode.com/u/koushik369mondal/",
  linkedin: "https://www.linkedin.com/in/koushik369mondal",
  twitter: "https://twitter.com/koushik369m",
  leetcodeStats: {
    totalSolved: 167,
    easy: 125,
    medium: 38,
    hard: 4,
    acceptanceRate: "47.2%",
  },
  githubStats: {
    publicRepos: 39,
  },
  bio: "Computer Science and Engineering undergraduate focused on practical product development, distributed web backends, FinTech solutions, and data structures & algorithms.",
};

export const PROJECTS: Project[] = [
  {
    id: "book-my-local-service",
    title: "BookMyLocalService",
    tagline: "Local service marketplace platform",
    purpose: "Connects local service providers with customers through an intuitive scheduling and booking platform.",
    description: "A full-stack web application designed for discovering, booking, and managing verified local services with provider management dashboards.",
    features: [
      "Customer appointment booking workflow",
      "Provider dashboard for schedule and service management",
      "Categorized service discovery with search filtering",
      "Booking status tracking and customer notifications"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "JavaScript", "REST APIs"],
    status: "Completed",
    githubUrl: "https://github.com/koushik369mondal/BookMyLocalService",
    liveUrl: "https://bookmylocalservice-web.onrender.com/",
    image: "/BML.png",
    category: "Full-Stack Web App",
  },
  {
    id: "k-mondal-store",
    title: "K Mondal Store",
    tagline: "Full-stack grocery e-commerce platform",
    purpose: "Provides a responsive shopping storefront and cart management system for everyday groceries.",
    description: "A full-stack grocery e-commerce application with category-based browsing, persistent cart capabilities, and responsive checkout flows.",
    features: [
      "Product categorization and inventory browsing",
      "Shopping cart with real-time price calculations",
      "Responsive checkout and customer order summaries",
      "Mobile-friendly interface built with Tailwind CSS"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: "Completed",
    githubUrl: "https://github.com/koushik369mondal/k-mondal-store",
    liveUrl: "https://k-mondal-store-frontend.onrender.com/",
    image: "/kMondalStore.png",
    category: "E-Commerce",
  },
  {
    id: "wanderlust",
    title: "WanderLust",
    tagline: "Travel and accommodation listings application",
    purpose: "Enables travelers to discover unique stays and allows hosts to publish verified property listings.",
    description: "A full-stack travel and accommodation platform where users can explore destinations, view interactive maps, and manage property listings.",
    features: [
      "Destination exploration with location-based map views",
      "Property listing creation, editing, and photo uploads",
      "Review and rating system for community feedback",
      "Responsive UI built with Bootstrap and server-rendered views"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Map APIs"],
    status: "Completed",
    githubUrl: "https://github.com/koushik369mondal/WanderLust",
    liveUrl: "https://wanderlust-fofm.onrender.com/listings",
    image: "/wanderlust.png",
    category: "Full-Stack Web App",
  },
  {
    id: "bharat-portal",
    title: "BharatPortal",
    tagline: "Government-service discovery platform concept",
    purpose: "Simplifies how citizens search for and navigate relevant public welfare schemes and civic services.",
    description: "A digital service discovery concept designed to aggregate disparate government schemes and citizen services into a clean, unified portal.",
    features: [
      "Concept architecture for eligibility-based service discovery",
      "Categorized catalog covering central and state public benefits",
      "Simplified document requirement roadmaps",
      "Clean UI prototype designed for high accessibility"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Concept Design"],
    status: "Concept",
    category: "Civic Tech Concept",
  },
  {
    id: "pick-my-stock",
    title: "PickMyStock",
    tagline: "Stock research and analytics platform",
    purpose: "Helps retail investors analyze market metrics and screen stocks with structured data feeds.",
    description: "An analytics platform concept focused on fundamental stock screening, financial ratios, and automated market trend monitoring.",
    features: [
      "Financial ratio and fundamental screening algorithms",
      "Watchlist tracking with structured sector breakdowns",
      "FinTech architecture planned with secure API integrations"
    ],
    technologies: ["Python", "JavaScript", "FinTech APIs", "System Architecture"],
    status: "In Development",
    category: "FinTech Platform",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication & JWT", "MVC Architecture"],
  },
  {
    title: "Databases & Storage",
    skills: ["MongoDB & Mongoose", "MySQL", "Database Indexing", "Data Modeling"],
  },
  {
    title: "Programming Languages",
    skills: ["Java (Core & DSA)", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Render", "Vercel", "npm"],
  },
];
