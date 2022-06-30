import React, { useState } from "react";
import AppWrapper from "../UI/AppWrapper";
import styles from "./index.module.scss";
import minesweeperIcon from "../../assets/AppIcons/minesweeperIcon.webp";
import NumberDisplay from "./NumberDisplay";
import FaceEmoji from "./FaceEmoji";
import { generateCells } from "../../utils/Minesweeper";
import Cell from "./Cell";

const Minesweeper: React.FC = () => {
  const [cells, setCells] = useState(generateCells());
  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      cells.map((col, colIndex) => <Cell key={`${rowIndex} - ${colIndex}`} />)
    );
  };
  return (
    <AppWrapper title='Minesweeper' icon={minesweeperIcon}>
      <div className={styles.container}>
        <div className={styles.header}>
          <NumberDisplay value={0} />
          <FaceEmoji />
          <NumberDisplay value={55} />
        </div>
        <div className={styles.body}>{renderCells()}</div>
      </div>
    </AppWrapper>
  );
};

export default Minesweeper;
