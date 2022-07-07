import React from "react";
import { CellState, CellValue, Face } from "../../constants/Minesweeper";
import styles from "./Cell.module.scss";

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
  setFace: (face: Face) => any;
}

const Cell: React.FC<ButtonProps> = ({ row, col, state, value, setFace }) => {
  function renderContent(): React.ReactNode {
    if (state === CellState.open) {
      if (value === CellValue.mine) {
        return <span aria-label='mine'>💣</span>;
      }
      if (value === CellValue.none) {
        return null;
      } else {
        return value;
      }
    } else if (state === CellState.flagged) {
      return <span aria-label='flag'>🚩</span>;
    }
    return null;
  }
  return (
    <div
      className={`${styles.cell} ${state === CellState.open && styles.open} ${
        styles["value_" + value]
      }`}
      onMouseDown={() => {
        setFace(Face.scared);
      }}
      onMouseUp={() => {
        setFace(Face.smile);
      }}
    >
      {renderContent()}
    </div>
  );
};

export default Cell;
