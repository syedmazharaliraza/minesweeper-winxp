import React from "react";
import AppSection from "./AppSection";
import styles from "./index.module.scss";
import PowerOptions from "./PowerOptions";
import UserInfo from "./UserInfo";
const StartMenu: React.FC = () => {
  return (
    <div className={styles.container}>
      <UserInfo />
      <AppSection />
      <PowerOptions />
    </div>
  );
};

export default StartMenu;
