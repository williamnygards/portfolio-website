import styles from "./ProjectsStyles.module.css";
import projectImage from "../assets/project.svg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          imageURL={projectImage}
          link=""
          title="Project"
          desc="A project I made"
        />
        <ProjectCard
          imageURL={projectImage}
          link=""
          title="Project"
          desc="A project I made"
        />
        <ProjectCard
          imageURL={projectImage}
          link=""
          title="Project"
          desc="A project I made"
        />
        <ProjectCard
          imageURL={projectImage}
          link=""
          title="Project"
          desc="A project I made"
        />
      </div>
    </section>
  );
};

export default Projects;
