type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  github,
  liveDemo,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
