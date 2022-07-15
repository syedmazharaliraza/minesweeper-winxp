import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Start.module.scss";

const Start: React.FC = () => {
  return (
    <div className={styles.start_button}>
      <img src={logo} alt='windows_logo' />
      start
    </div>
  );
};

export default Start;
