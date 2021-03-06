import React from "react";
import { CellState, CellValue, Face } from "../../constants/Minesweeper";
import styles from "./Cell.module.scss";

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
  hasLost: boolean;
  red: boolean;
  setFace: (face: Face) => any;
  onClick: (rowIndex: number, colIndex: number) => any;
  onContext: (e: any, row: number, col: number) => any;
}

const Cell: React.FC<ButtonProps> = ({
  row,
  col,
  state,
  value,
  hasLost,
  red,
  setFace,
  onClick,
  onContext,
}) => {
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
      } ${red && styles.red} ${
        hasLost &&
        state === CellState.flagged &&
        value !== CellValue.mine &&
        styles.wrongFlag
      }`}
      onClick={!hasLost ? onClick.bind(this, row, col) : undefined}
      onMouseDown={
        !hasLost
          ? () => {
              if (state === CellState.closed) {
                setFace(Face.scared);
              }
            }
          : undefined
      }
      onMouseUp={
        !hasLost
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
