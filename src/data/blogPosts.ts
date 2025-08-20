import {
  blogPost001Text,
  blogPost002Text,
  blogPost003Text,
  blogPost004Text,
  blogPost005Text,
  blogPost006Text,
} from "./blogTexts";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  text: string;
  date: string;
  tags: string[];
  author: string;
  image: string;
  readTime: string;
  url?: string;
}

export const BlogPosts: BlogPost[] = [
  {
    id: "post-001",
    slug: "my-journey-to-finding-my-love-for-coding",
    title: "My Journey to Finding My Love for Coding",
    summary: "a story about how an HTML course change my whole carrer path",
    text: blogPost001Text,
    date: "2025-08-15",
    tags: ["Story", "JavaScript", "Frontend"],
    author: "Nastaran Farjami",
    image: "/images/1.png",
    readTime: "12 min",
  },
  {
    id: "post-002",
    slug: "react-love-story",
    title: "React.js learning story",
    summary:
      "I learned React through real projects and practice, and my love for it never let me switch frameworks.",
    text: blogPost003Text,
    date: "2025-08-07",
    tags: ["cleancode", "React", "Javascript"],
    author: "Nastaran Farjami",
    image: "/images/3.jpg",
    readTime: "7 min",
  },

  {
    id: "post-003",
    slug: "learning-ts",
    title: "How i started to learn Typescripts",
    summary: "Why TypeScript changed my coding style and productivity...",
    text: blogPost002Text,
    date: "2025-08-09",
    tags: ["TypeScript", "JavaScript"],
    author: "Nastaran Farjami",
    image: "/images/2.png",
    readTime: "10 min",
  },
  {
    id: "post-004",
    slug: "how-tailwind-works",
    title: "Why I Use TailwindCSS",
    summary:
      "How TailwindCSS makes styling faster and more fun — my thoughts and experience with it.",
    text: blogPost004Text,
    date: "2025-08-12",
    tags: ["CSS", "TailwindCSS", "UI"],
    author: "Nastaran Farjami",
    image: "/images/4.png",
    readTime: "5 min",
  },
  {
    id: "post-005",
    slug: "my-journey-to-backend",
    title: "My Journey Into the Backend World",
    summary:
      "A summer internship that didn’t go as planned became the moment I discovered I could learn Node.js, Git, databases, and much more in just a few weeks—and gain the confidence to tackle anything.",
    text: blogPost005Text,
    date: "2025-08-12",
    tags: ["Backend", "Node js", "Github", "Git", "MongoDB", "SQL", "NPM"],
    author: "Nastaran Farjami",
    image: "/images/5(1).jpg",
    readTime: "5 min",
  },
  {
    id: "post-006",
    slug: "nextjs-story",
    title: "Next.js and Me: A Beginner’s Story",
    summary:
      "I started learning Next.js by jumping straight into real projects like this portfolio. I’m still a beginner, but working hands-on with the framework and its docs has been the best way for me to grow.",
    text: blogPost006Text,
    date: "2025-08-12",
    tags: ["Next js", "React", "Documents"],
    author: "Nastaran Farjami",
    image: "/images/6.webp",
    readTime: "5 min",
  },
];
