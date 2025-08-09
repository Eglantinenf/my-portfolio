// ProjectCard.tsx — Sleeker and More Professional
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "../../data/ProjectsData";
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
        scale: 1.03,
        y: -6,
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
      }}
      transition={{
        duration: 0.18,
        ease: [0.4, 0, 0.2, 1],
      }}
      role="group"
      aria-label={`Project: ${title}`}
      className="flex flex-col h-full rounded-xl shadow-md p-4 bg-white/70 dark:bg-[#1b112d]/90 backdrop-blur-md border border-white/10 dark:border-white/5 transition-all"
    >
      <div className="rounded-lg overflow-hidden aspect-video mb-3">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={600}
          height={400}
          className="w-full h-full object-cover"
          priority={false}
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="cursor-pointer bg-purple-100 dark:bg-purple-800/30 text-purple-700 dark:text-purple-200 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-transform transform hover:scale-105 hover:brightness-110 hover:shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="flex items-center gap-1.5 text-xs font-medium text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500 px-3 py-1.5 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800/30 transition"
        >
          <Github size={16} />
          GitHub
        </a>

        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live demo of ${title}`}
          className="flex items-center gap-1.5 text-xs font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-400 dark:hover:bg-purple-500 dark:text-black px-3 py-1.5 rounded-full transition"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
