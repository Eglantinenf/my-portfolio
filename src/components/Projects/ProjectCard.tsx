"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "./ProjectsData";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, github, liveDemo, image } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      role="group"
      aria-label={`Project: ${title}`}
      className="rounded-3xl shadow-xl p-6 bg-gradient-to-br from-white/80 to-gray-100/90 backdrop-blur-md dark:from-[#1f1235]/90 dark:to-[#2a1742]/80 border border-white/10 dark:border-white/5"
    >
      <div className="mb-4 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-xl"
          priority={false}
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-purple-100 dark:bg-purple-800/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:scale-105 transition-transform"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`view ${title} project on Github`}
          className="flex items-center gap-2 text-sm text-purple-50 bg-purple-700 hover:bg-purple-800 px-3 py-1.5 rounded-md shadow-sm transition-colors"
        >
          <Github size={16} />
          GitHub
        </a>

        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`open live demo for ${title} project`}
          className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300 border border-purple-400 px-3 py-1.5 rounded-md hover:bg-purple-200/20 transition-colors"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
