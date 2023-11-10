import { socials } from "../../../constants/cmd";
import styles from "./Command.module.scss";

const Socials: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkWrapper}>
        {socials.map(({ name, link }, index) => (
          <p>
            <b>
              {index + 1}. {name}
            </b>
            <a
              href={name === "Email" ? `mailto:${link}` : link}
              target="_blank"
              className={styles.link}
            >
              {link}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Socials;
