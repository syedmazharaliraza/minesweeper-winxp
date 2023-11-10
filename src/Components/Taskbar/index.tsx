import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { formatAMPM } from "../../utils/Taskbar";
import StartMenu from "../StartMenu";
import styles from "./index.module.scss";
import OpenApp from "./OpenApp";
import Start from "./Start";
import { openApp } from "../../store/slice/taskbarSlice";
import { allApps } from "../../constants/apps";
import { AppNamesEnum } from "../../types/apps";

const Taskbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isStartMenuOpen } = useAppSelector((state) => state.taskbar);
  const [time, setTime] = useState<string>(formatAMPM(new Date()));
  const openApps = useAppSelector((state) => state.taskbar.openApps);

  useEffect(() => {
    dispatch(
      openApp(allApps.find((app) => app.name === AppNamesEnum.Portfolio)!.id)
    );
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
