import React from "react";
import styles from "./Icons.module.scss";
import Icon from "./Icon";
import { desktopApps } from "../../constants/Desktop";

const Icons: React.FC = () => {
  return (
    <div className={styles.icons}>
      {desktopApps.map((app) => (
        <Icon icon={app.icon} appName={app.name} />
      ))}
    </div>
  );
};

export default Icons;
