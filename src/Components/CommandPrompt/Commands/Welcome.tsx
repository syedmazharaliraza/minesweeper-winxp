import { portrait } from "../../../constants/cmd";
import styles from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <pre>{portrait}</pre>
      <div className={styles.description}>
        <p>Welcome to my terminal themed portfolio.</p>
        <p>----</p>
        <p>To view a list of available commands, type `list -a`.</p>
      </div>
    </div>
  );
};

export default Welcome;
