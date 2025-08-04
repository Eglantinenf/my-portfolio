import { projectsData } from "./ProjectsData";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <section className="section-bg px-4 sm:px-8 md:px-16 py-16" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
