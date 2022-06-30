import {
  MAX_ROWS,
  MAX_COLS,
  CellValue,
  CellState,
  CellInterface,
} from "../constants/Minesweeper";

export const generateCells = () => {
  const cells: CellInterface[][] = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({
        value: CellValue.none,
        state: CellState.closed,
      });
    }
  }
  return cells;
};
