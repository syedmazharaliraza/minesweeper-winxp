import styles from "./Command.module.scss";
type Props = {
  children: string;
};

const GeneralOutput: React.FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
export default GeneralOutput;
