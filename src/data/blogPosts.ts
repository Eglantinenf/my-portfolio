export interface BlogPost {
  id: string;
  title: string;
  slug: string;
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
    slug: "my-journey-in-frontend-developer-road",
    title: "my journey in Frontend developer road",
    text: "from learning cpp and py to fall in love with js",
    date: "2025-08-08",
    tags: ["Story", "Python", "Javascript"],
    author: "Nastaran Farjami",
    image: "/images/1.jpg",
    readTime: "10 min",
  },
  {
    id: "post-002",
    slug: "learning-ts",
    title: "learning ts",
    text: "Why TypeScript changed my coding style and productivity...",
    date: "2025-08-09",
    tags: ["TypeScript", "JavaScript"],
    author: "Nastaran Farjami",
    image: "/images/2.png",
    readTime: "5 min",
  },
  {
    id: "post-003",
    slug: "some-points-about-clean-coding",
    title: "some points about clean coding",
    text: "i will add the text later",
    date: "2025-08-10",
    tags: ["cleancode", "React", "Javascript"],
    author: "Nastaran Farjami",
    image: "/images/3.png",
    readTime: "7 min",
  },
];
