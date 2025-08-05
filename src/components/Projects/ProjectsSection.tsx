"use client";
import React, { useState } from "react";
import { projectsData } from "./ProjectsData";
import ProjectCard from "./ProjectCard";

const filters = [
  "All",
  "React",
  "TypeScript",
  "Vanilla",
  "Tailwind",
  "Backend",
  "HTML and CSS",
];

const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filteredProjects = projectsData.filter((project) =>
    selectedFilter === "All"
      ? true
      : project.technologies.some((tech) =>
          tech.toLowerCase().includes(selectedFilter.toLowerCase())
        )
  );
  return (
    <section className="section-bg px-4 sm:px-8 md:px-16 py-16" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-10">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium
    ${
      selectedFilter === filter
        ? "bg-purple-700 text-white dark:bg-purple-400 dark:text-black shadow-lg"
        : "bg-white/60 text-purple-800 dark:bg-white/10 dark:text-purple-200 border-purple-300 dark:border-purple-600 hover:bg-purple-100 dark:hover:bg-white/20"
    }
  `}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
