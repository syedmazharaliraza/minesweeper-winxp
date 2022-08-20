import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { formatAMPM } from "../../utils/Taskbar";
import StartMenu from "../StartMenu";
import styles from "./index.module.scss";
import OpenApp from "./OpenApp";
import Start from "./Start";

const Taskbar: React.FC = () => {
  const { isStartMenuOpen } = useAppSelector((state) => state.taskbar);
  const [time, setTime] = useState<string>(formatAMPM(new Date()));
  const openApps = useAppSelector((state) => state.taskbar.openApps);

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
        {isStartMenuOpen && <StartMenu />}
        <Start />
        {openApps.map((app) => (
          <OpenApp id={app} />
        ))}
      </div>
      <div className={styles.right_cont}>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default Taskbar;
