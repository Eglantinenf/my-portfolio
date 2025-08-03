export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
};

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React.js and Next.js and Tailwind CSS to showcase my projects and skills.",
    technologies: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Eglantinenf/my-portfolio",
    liveDemo: "https://nothingfornow.com",
  },
  {
    title: "ToDo App",
    description:
      "A simple and intuitive ToDo application with filtering, persistence, and responsive UI.",
    technologies: ["React", "LocalStorage"],
    github: "https://github.com/Eglantinenf/TodoList-React.js-Tailwind.git",
    liveDemo: "https://nothingfornow.com",
  },
  {
    title: "Weather App",
    description: "Interactive React project using live API data.",
    technologies: ["React", "TailwindCSS", "live API"],
    github: "https://github.com/Eglantinenf/WeatherApp-React.js-Tailwind-.git",
    liveDemo: "https://nothing.com",
  },
];
