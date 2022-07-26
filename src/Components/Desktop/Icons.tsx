import React from "react";
import styles from "./Icons.module.scss";
import Icon from "./Icon";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Icons: React.FC = () => {
  const desktopApps = useSelector((state: RootState) => state.desktopApps);
  return (
    <div className={styles.icons}>
      {desktopApps.map((app) => (
        <Icon icon={app.icon} appName={app.name} />
      ))}
    </div>
  );
};

export default Icons;
