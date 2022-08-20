import React, { useMemo } from "react";
import { allApps } from "../../constants/Apps";
import styles from "./OpenApp.module.scss";

const OpenApp: React.FC<{ appName: string }> = ({ appName }) => {
  const appInfo = useMemo(() => allApps.find((app) => app.name == appName), []);
  return (
    <div className={styles.wrapper}>
      <img src={appInfo?.icon} alt={`${appInfo?.name} icon`} />
      <span>{appInfo?.name}</span>
    </div>
  );
};

export default OpenApp;
