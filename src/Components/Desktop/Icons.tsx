import React from "react";
import styles from "./Icons.module.scss";
import Icon from "./Icon";
import { useAppSelector } from "../../store/hooks";

const Icons: React.FC = () => {
  const { apps: desktopApps } = useAppSelector((state) => state.desktop);
  return (
    <div className={styles.icons}>
      {desktopApps.map((app) => (
        <Icon key={app.id} app={app} />
      ))}
    </div>
  );
};

export default Icons;
