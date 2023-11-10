import React, { useEffect, useState } from "react";
import {
  CellInterface,
  CellState,
  CellValue,
  Face,
} from "../../types/minesweeper";
import AppWrapper from "../UI/AppWrapper";
import styles from "./index.module.scss";
import NumberDisplay from "./NumberDisplay";
import FaceEmoji from "./FaceEmoji";
import {
  checkIfWon,
  generateCells,
  openMultipleCells,
  showAllMines,
} from "../../utils/Minesweeper";
import Cell from "./Cell";
import { IDesktopAppProps } from "../../types/apps";

const Minesweeper: React.FC<IDesktopAppProps> = ({
  appName,
  appIcon,
  appId,
}) => {
  const [cells, setCells] = useState<CellInterface[][]>(generateCells());
  const [faceEmoji, setFaceEmoji] = useState<Face>(Face.smile);
  const [timer, setTimer] = useState<number>(0);
  const [live, setLive] = useState<boolean>(false);
  const [flags, setFlags] = useState<number>(10);
  const [lost, setLost] = useState<boolean>(false);
  const [won, setWon] = useState<boolean>(false);

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

  useEffect(() => {
    if (lost) {
      setLive(false);
      setFaceEmoji(Face.lost);
    } else {
      setFaceEmoji(Face.smile);
    }
  }, [lost]);
  useEffect(() => {
    if (won) {
      setLive(false);
      setFaceEmoji(Face.won);
    } else {
      setFaceEmoji(Face.smile);
    }
  }, [won]);

  const cellClickHandler = (rowIndex: number, colIndex: number) => {
    let currentCells = cells.slice();
    let currentCell = currentCells[rowIndex][colIndex];
    if (won) {
      return;
    }
    if (!live && !won) {
      setLive(true);
      if (currentCell.value === CellValue.mine) {
        while (currentCell.value === CellValue.mine) {
          currentCells = generateCells();
          currentCell = currentCells[rowIndex][colIndex];
          setCells(currentCells);
        }
      }
      setLive(true);
    }

    if (currentCell.state === (CellState.flagged || CellState.open)) {
      return;
    } else if (currentCell.value === CellValue.mine) {
      setLost(true);
      currentCell.red = true;
      currentCells = showAllMines(currentCells);
    } else if (currentCell.value === CellValue.none) {
      const newCells = openMultipleCells(currentCells, rowIndex, colIndex);
      setCells(newCells);
    } else {
      currentCell.state = CellState.open;
    }
    setCells(currentCells);
    if (checkIfWon(currentCells)) {
      setWon(true);
    }
  };

  const faceClickHandler = () => {
    setLost(false);
    setLive(false);
    setTimer(0);
    setCells(generateCells());
    setFlags(10);
    setWon(false);
  };

  const onContextHandler = (e: any, row: number, col: number) => {
    e.preventDefault();
    if (!live) {
      return;
    }
    const currentCells = cells.slice();
    const currentCell = currentCells[row][col];
    if (currentCell.state === CellState.open) {
      return;
    } else if (currentCell.state === CellState.closed) {
      setFlags((prevVal) => prevVal - 1);
      currentCells[row][col].state = CellState.flagged;
    } else {
      setFlags((prevVal) => prevVal + 1);
      currentCell.state = CellState.closed;
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
          hasLost={lost}
          hasWon={won}
          red={col.red}
          setFace={setFaceEmoji}
          onClick={cellClickHandler}
          onContext={onContextHandler}
        />
      ))
    );
  };

  return (
    <AppWrapper title={appName} icon={appIcon} id={appId}>
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
