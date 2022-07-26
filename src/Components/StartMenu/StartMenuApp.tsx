import React from "react";
import styles from "./StartMenuApp.module.scss";
import { appInterface } from "../../constants/Apps";

const StartMenuApp: React.FC<{ app: appInterface }> = ({ app }) => {
  return (
    <div className={styles.section + ` ${app.disabled && styles.disabled}`}>
      <img src={app.icon} alt={app.name} />
      <span>{app.name}</span>
    </div>
  );
};

export default StartMenuApp;
