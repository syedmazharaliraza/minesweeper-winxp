import React from "react";
import styles from "./Cell.module.scss";
import { CellState, CellValue, Face } from "../../types/minesweeper";

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
  hasLost: boolean;
  hasWon: boolean;
  red: boolean;
  setFace: (face: Face) => void;
  onClick: (rowIndex: number, colIndex: number) => void;
  onContext: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    row: number,
    col: number
  ) => void;
}

const Cell: React.FC<ButtonProps> = ({
  row,
  col,
  state,
  value,
  hasLost,
  hasWon,
  red,
  setFace,
  onClick,
  onContext,
}) => {
  function renderContent(): React.ReactNode {
    if (state === CellState.open) {
      if (value === CellValue.mine) {
        return <span aria-label="mine">💣</span>;
      }
      if (value === CellValue.none) {
        return null;
      } else {
        return value;
      }
    } else if (state === CellState.flagged) {
      return <span aria-label="flag">🚩</span>;
    }
    return null;
  }
  return (
    <div
      className={`${styles.cell} ${state === CellState.open && styles.open} ${
        styles["value_" + value]
      } ${red && styles.red} ${
        hasLost &&
        state === CellState.flagged &&
        value !== CellValue.mine &&
        styles.wrongFlag
      }`}
      onClick={!hasLost && !hasWon ? onClick.bind(this, row, col) : undefined}
      onMouseDown={
        !hasLost && !hasWon
          ? () => {
              if (state === CellState.closed) {
                setFace(Face.scared);
              }
            }
          : undefined
      }
      onMouseUp={
        !hasLost && !hasWon
          ? () => {
              setFace(Face.smile);
            }
          : undefined
      }
      onContextMenu={(e) => onContext(e, row, col)}
    >
      {renderContent()}
    </div>
  );
};

export default Cell;
