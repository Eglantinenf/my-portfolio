"use client";
import { motion } from "framer-motion";
import type { Project } from "./ProjectsData";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, github, liveDemo } = project;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-2xl shadow-xl p-6 bg-gradient-to-br from-white to-gray-100 dark:from-[#1f1235] dark:to-[#120c23] "
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-purple-100 dark:bg-purple-800/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
        >
          <Github size={16} />
          GitHub
        </a>

        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-300 border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-100/30 transition-colors"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
