import {
  MAX_ROWS,
  MAX_COLS,
  CellValue,
  CellState,
  CellInterface,
  MAX_MINES,
} from "../constants/Minesweeper";

export const generateCells = () => {
  let cells: CellInterface[][] = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({
        value: CellValue.none,
        state: CellState.closed,
      });
    }
  }
  let minesPlaced = 0;
  while (minesPlaced < MAX_MINES) {
    const randomRow = Math.floor(Math.random() * MAX_ROWS);
    const randomCol = Math.floor(Math.random() * MAX_COLS);
    if (cells[randomRow][randomCol].value !== CellValue.mine) {
      cells[randomRow][randomCol] = {
        ...cells[randomRow][randomCol],
        value: CellValue.mine,
      };
      minesPlaced++;
    }
  }

  for (let rowIndex = 0; rowIndex < MAX_ROWS; rowIndex++) {
    for (let colIndex = 0; colIndex < MAX_COLS; colIndex++) {
      const currentCell = cells[rowIndex][colIndex];
      if (currentCell.value === CellValue.mine) {
        continue;
      }
      let numberOfMines = 0;
      const topCell: CellInterface | null =
        rowIndex > 0 ? cells[rowIndex - 1][colIndex] : null;
      const topRightCell: CellInterface | null =
        rowIndex > 0 && colIndex < MAX_COLS - 1
          ? cells[rowIndex - 1][colIndex + 1]
          : null;
      const topLeftCell: CellInterface | null =
        rowIndex > 0 && colIndex > 0 ? cells[rowIndex - 1][colIndex - 1] : null;
      const leftCell: CellInterface | null =
        colIndex > 0 ? cells[rowIndex][colIndex - 1] : null;
      const rightCell: CellInterface | null =
        colIndex > 0 ? cells[rowIndex][colIndex + 1] : null;
      const bottomCell: CellInterface | null =
        rowIndex < MAX_ROWS - 1 ? cells[rowIndex + 1][colIndex] : null;
      const bottomLeftCell: CellInterface | null =
        rowIndex < MAX_ROWS - 1 && colIndex > 0
          ? cells[rowIndex + 1][colIndex - 1]
          : null;
      const bottomRightCell: CellInterface | null =
        rowIndex < MAX_ROWS - 1 && colIndex < MAX_COLS - 1
          ? cells[rowIndex + 1][colIndex + 1]
          : null;

      if (topLeftCell?.value === CellValue.mine) {
        numberOfMines++;
      }
      if (topCell?.value === CellValue.mine) {
        numberOfMines++;
      }
      if (topRightCell?.value === CellValue.mine) {
        numberOfMines++;
      }
      if (leftCell?.value === CellValue.mine) {
        numberOfMines++;
      }
      if (rightCell?.value === CellValue.mine) {
        numberOfMines++;
      }
      if (bottomLeftCell?.value === CellValue.mine) {
        numberOfMines++;
      }
      if (bottomCell?.value === CellValue.mine) {
        numberOfMines++;
      }
      if (bottomRightCell?.value === CellValue.mine) {
        numberOfMines++;
      }
      if (numberOfMines > 0) {
        cells[rowIndex][colIndex] = {
          ...currentCell,
          value: numberOfMines,
        };
      }
    }
  }
  return cells;
};
