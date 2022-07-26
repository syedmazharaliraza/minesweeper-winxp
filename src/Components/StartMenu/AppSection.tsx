import React from "react";
import styles from "./AppSection.module.scss";

const AppSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_cont}></div>
      <div className={styles.right_cont}></div>
    </div>
  );
};

export default AppSection;
