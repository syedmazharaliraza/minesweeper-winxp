import React, { useEffect, useState } from "react";
import { CellInterface, CellState, Face } from "../../constants/Minesweeper";
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
  const [timer, setTimer] = useState<number>(0);
  const [live, setLive] = useState<boolean>(false);
  const [flags, setFlags] = useState<number>(10);

  useEffect(() => {
    if (live && timer < 999) {
      const timer = setInterval(() => {
        setTimer((prevVal) => prevVal + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [live, timer]);

  const cellClickHandler = (rowIndex: number, colIndex: number) => {
    if (!live) {
      setLive(true);
    }
  };

  const faceClickHandler = () => {
    if (live) {
      setLive(false);
      setTimer(0);
      setCells(generateCells());
      setFlags(10);
    }
  };

  const onContextHandler = (e: any, row: number, col: number) => {
    e.preventDefault();
    if (!live) {
      return;
    }
    const currentCells = cells.slice();
    const currentCell = cells[row][col];
    if (currentCell.state === CellState.open) {
      return;
    } else if (currentCell.state === CellState.closed) {
      setFlags((prevVal) => prevVal - 1);
      currentCells[row][col].state = CellState.flagged;
    } else {
      setFlags((prevVal) => prevVal + 1);
      currentCells[row][col].state = CellState.closed;
    }
    setCells(currentCells);
  };

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
          onClick={cellClickHandler}
          onContext={onContextHandler}
        />
      ))
    );
  };

  return (
    <AppWrapper title='Minesweeper' icon={minesweeperIcon}>
      <div className={styles.container}>
        <div className={styles.header}>
          <NumberDisplay value={flags} />
          <FaceEmoji faceEmoji={faceEmoji} onClick={faceClickHandler} />
          <NumberDisplay value={timer} />
        </div>
        <div className={styles.body}>{renderCells()}</div>
      </div>
    </AppWrapper>
  );
};

export default Minesweeper;
