import React from "react";
import styles from "./Icon.module.scss";

interface IconProps {
  icon: string;
  appName: string;
}

const Icon: React.FC<IconProps> = ({ icon, appName }) => {
  return (
    <div className={styles.icon}>
      <img src={icon} alt={appName} />
      <span>{appName}</span>
    </div>
  );
};

export default Icon;
