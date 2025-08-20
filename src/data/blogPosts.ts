import {
  blogPost001Text,
  blogPost002Text,
  blogPost003Text,
  blogPost004Text,
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
    image: "/images/1.jpg",
    readTime: "12 min",
  },
  {
    id: "post-002",
    slug: "react-love-story",
    title: "React.js learning story",
    summary: "React love story...",
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
];
