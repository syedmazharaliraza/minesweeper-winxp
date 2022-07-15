import React, { useEffect, useState } from "react";
import { formatAMPM } from "../../utils/Taskbar";
import styles from "./index.module.scss";
import Start from "./Start";

const Taskbar: React.FC = () => {
  const [time, setTime] = useState<string>(formatAMPM(new Date()));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatAMPM(new Date()));
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.taskbar}>
      <div className={styles.left_cont}>
        <Start />
      </div>
      <div className={styles.right_cont}>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default Taskbar;
