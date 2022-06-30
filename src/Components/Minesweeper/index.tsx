import React from "react";
import AppWrapper from "../UI/AppWrapper";
import styles from "./index.module.scss";
import minesweeperIcon from "../../assets/AppIcons/minesweeperIcon.webp";
import NumberDisplay from "./NumberDisplay";
import FaceEmoji from "./FaceEmoji";

const Minesweeper: React.FC = () => {
  return (
    <AppWrapper title='Minesweeper' icon={minesweeperIcon}>
      <div className={styles.container}>
        <div className={styles.header}>
          <NumberDisplay value={0} />
          <FaceEmoji />
          <NumberDisplay value={55} />
        </div>
        <div className={styles.body}>body</div>
      </div>
    </AppWrapper>
  );
};

export default Minesweeper;
