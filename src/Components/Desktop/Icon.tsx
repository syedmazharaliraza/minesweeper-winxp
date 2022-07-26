import React from "react";
import { appInterface } from "../../constants/Apps";
import styles from "./Icon.module.scss";

const Icon: React.FC<{ app: appInterface }> = ({ app }) => {
  return (
    <div className={styles.icon + ` ${app.disabled && styles.disabled}`}>
      <img src={app.icon} alt={app.name} />
      <span>{app.name}</span>
    </div>
  );
};

export default Icon;
