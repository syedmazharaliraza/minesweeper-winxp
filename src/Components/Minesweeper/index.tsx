import React from "react";
import AppWrapper from "../UI/AppWrapper";
import styles from "./index.module.scss";
import minesweeperIcon from "../../assets/AppIcons/minesweeperIcon.webp";

const Minesweeper: React.FC = () => {
  return (
    <AppWrapper title='Minesweeper' icon={minesweeperIcon}>
      <div className={styles.container}>
        <div className={styles.header}></div>
        <div className={styles.body}>body</div>
      </div>
    </AppWrapper>
  );
};

export default Minesweeper;
