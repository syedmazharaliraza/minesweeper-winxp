import React, { useState } from "react";
import { CellInterface, Face } from "../../constants/Minesweeper";
import AppWrapper from "../UI/AppWrapper";
import styles from "./index.module.scss";
import minesweeperIcon from "../../assets/AppIcons/minesweeperIcon.webp";
import NumberDisplay from "./NumberDisplay";
import FaceEmoji from "./FaceEmoji";
import { generateCells } from "../../utils/Minesweeper";
import Cell from "./Cell";

const Minesweeper: React.FC = () => {
  const [cells, setCells] = useState<CellInterface[][]>(generateCells());
  const [faceEmoji, setFaceEmoji] = useState<Face>(Face.smile);

  console.log(cells);
  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((col, colIndex) => (
        <Cell
          key={`${rowIndex} - ${colIndex}`}
          row={rowIndex}
          col={colIndex}
          state={col.state}
          value={col.value}
          setFace={setFaceEmoji}
        />
      ))
    );
  };
  return (
    <AppWrapper title='Minesweeper' icon={minesweeperIcon}>
      <div className={styles.container}>
        <div className={styles.header}>
          <NumberDisplay value={0} />
          <FaceEmoji faceEmoji={faceEmoji} />
          <NumberDisplay value={55} />
        </div>
        <div className={styles.body}>{renderCells()}</div>
      </div>
    </AppWrapper>
  );
};

export default Minesweeper;
