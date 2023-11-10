import { commands } from "../../../constants/cmd";
import styles from "./Command.module.scss";

const Help: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkWrapper}>
        {commands.map(({ cmd, description }) => (
          <p>
            <b>{cmd}</b>- {description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Help;
