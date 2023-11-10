import { projects } from "../../../constants/cmd";
import styles from "./Command.module.scss";

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      {projects.map((project, index) => (
        <div>
          <b>
            {index + 1}.{" "}
            <a href={project.link} target="_blank" className={styles.link}>
              {project.name}
            </a>
          </b>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
