import dayjs from "dayjs";
import { experience } from "../../../constants/cmd";
import styles from "./Command.module.scss";

const Experience: React.FC = () => {
  return (
    <div className={styles.container}>
      {experience.map((exp, index) => (
        <div>
          <b>{exp.position}</b>
          <p className={styles.subheading}>
            {dayjs(exp.startDate).format("MMM YYYY")} -{" "}
            {exp.endDate === "present"
              ? "Present"
              : dayjs(exp.endDate).format("MMM YYYY")}{" "}
            |{" "}
            <a href={exp.companyLink} target="_blank" className={styles.link}>
              {exp.company}
            </a>
          </p>
          <ul>
            {exp.description.map((each, index) => (
              <li key={index}>- {each}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
