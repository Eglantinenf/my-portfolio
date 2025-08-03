import { projectsData } from "./ProjectsData";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <section className="section-bg" id="projects">
      <h2>My Projects</h2>
      <div className="flex">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
