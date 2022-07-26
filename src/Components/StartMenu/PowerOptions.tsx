import React from "react";
import styles from "./PowerOptions.module.scss";
import logOffIcon from "../../assets/StartMenu/logOffIcon.webp";
import shutDownIcon from "../../assets/StartMenu/shutDownIcon.webp";

const PowerOptions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.power_option}>
        <img src={logOffIcon} alt='logoff' />
        <span>Log off</span>
      </div>
      <div className={styles.power_option}>
        <img src={shutDownIcon} alt='shutdown' />
        <span>Turn Off Computer</span>
      </div>
    </div>
  );
};

export default PowerOptions;
