import styles from "./Command.module.scss";

const History: React.FC<{ commands: string[] }> = ({ commands }) => {
  return (
    <div className={styles.container}>
      {commands.filter(Boolean).map((cmd) => (
        <p>{cmd}</p>
      ))}
    </div>
  );
};

export default History;
