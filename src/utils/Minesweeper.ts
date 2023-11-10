import { MAX_COLS, MAX_MINES, MAX_ROWS } from "../constants/minesweeper";
import { CellValue, CellState, CellInterface } from "../types/minesweeper";

const getAdjascentCells = (
  cells: CellInterface[][],
  rowIndex: number,
  colIndex: number
): [
  topCell: CellInterface | null,
  topRightCell: CellInterface | null,
  topLeftCell: CellInterface | null,
  leftCell: CellInterface | null,
  rightCell: CellInterface | null,
  bottomCell: CellInterface | null,
  bottomLeftCell: CellInterface | null,
  bottomRightCell: CellInterface | null
] => {
  const topLeftCell: CellInterface | null =
    rowIndex > 0 && colIndex > 0 ? cells[rowIndex - 1][colIndex - 1] : null;
  const topCell: CellInterface | null =
    rowIndex > 0 ? cells[rowIndex - 1][colIndex] : null;
  const topRightCell: CellInterface | null =
    rowIndex > 0 && colIndex < MAX_COLS - 1
      ? cells[rowIndex - 1][colIndex + 1]
      : null;
  const leftCell: CellInterface | null =
    colIndex > 0 ? cells[rowIndex][colIndex - 1] : null;
  const rightCell: CellInterface | null =
    colIndex < MAX_COLS - 1 ? cells[rowIndex][colIndex + 1] : null;
  const bottomLeftCell: CellInterface | null =
    rowIndex < MAX_ROWS - 1 && colIndex > 0
      ? cells[rowIndex + 1][colIndex - 1]
      : null;
  const bottomCell: CellInterface | null =
    rowIndex < MAX_ROWS - 1 ? cells[rowIndex + 1][colIndex] : null;
  const bottomRightCell: CellInterface | null =
    rowIndex < MAX_ROWS - 1 && colIndex < MAX_COLS - 1
      ? cells[rowIndex + 1][colIndex + 1]
      : null;

  return [
    topCell,
    topRightCell,
    topLeftCell,
    leftCell,
    rightCell,
    bottomCell,
    bottomLeftCell,
    bottomRightCell,
  ];
};

export const generateCells = () => {
  let cells: CellInterface[][] = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({
        value: CellValue.none,
        state: CellState.closed,
        red: false,
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
      const adjascentCells = getAdjascentCells(cells, rowIndex, colIndex);

      adjascentCells.forEach((cell) => {
        if (cell?.value === CellValue.mine) {
          numberOfMines++;
        }
      });

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

export const openMultipleCells = (
  cells: CellInterface[][],
  rowIndex: number,
  colIndex: number
): CellInterface[][] => {
  let currentCell = cells[rowIndex][colIndex];
  currentCell.state = CellState.open;

  const [
    topCell,
    topRightCell,
    topLeftCell,
    leftCell,
    rightCell,
    bottomCell,
    bottomLeftCell,
    bottomRightCell,
  ] = getAdjascentCells(cells, rowIndex, colIndex);

  if (topCell?.state === CellState.closed && topCell.value !== CellValue.mine) {
    if (topCell.value === CellValue.none) {
      cells = openMultipleCells(cells, rowIndex - 1, colIndex);
    } else {
      topCell.state = CellState.open;
    }
  }
  if (
    topRightCell?.state === CellState.closed &&
    topRightCell.value !== CellValue.mine
  ) {
    if (topRightCell.value === CellValue.none) {
      cells = openMultipleCells(cells, rowIndex - 1, colIndex + 1);
    } else {
      topRightCell.state = CellState.open;
    }
  }
  if (
    topLeftCell?.state === CellState.closed &&
    topLeftCell.value !== CellValue.mine
  ) {
    if (topLeftCell.value === CellValue.none) {
      cells = openMultipleCells(cells, rowIndex - 1, colIndex - 1);
    } else {
      topLeftCell.state = CellState.open;
    }
  }
  if (
    leftCell?.state === CellState.closed &&
    leftCell.value !== CellValue.mine
  ) {
    if (leftCell.value === CellValue.none) {
      cells = openMultipleCells(cells, rowIndex, colIndex - 1);
    } else {
      leftCell.state = CellState.open;
    }
  }
  if (
    rightCell?.state === CellState.closed &&
    rightCell.value !== CellValue.mine
  ) {
    if (rightCell.value === CellValue.none) {
      cells = openMultipleCells(cells, rowIndex, colIndex + 1);
    } else {
      rightCell.state = CellState.open;
    }
  }
  if (
    bottomCell?.state === CellState.closed &&
    bottomCell.value !== CellValue.mine
  ) {
    if (bottomCell.value === CellValue.none) {
      cells = openMultipleCells(cells, rowIndex + 1, colIndex);
    } else {
      bottomCell.state = CellState.open;
    }
  }
  if (
    bottomRightCell?.state === CellState.closed &&
    bottomRightCell.value !== CellValue.mine
  ) {
    if (bottomRightCell.value === CellValue.none) {
      cells = openMultipleCells(cells, rowIndex + 1, colIndex + 1);
    } else {
      bottomRightCell.state = CellState.open;
    }
  }
  if (
    bottomLeftCell?.state === CellState.closed &&
    bottomLeftCell.value !== CellValue.mine
  ) {
    if (bottomLeftCell.value === CellValue.none) {
      cells = openMultipleCells(cells, rowIndex + 1, colIndex - 1);
    } else {
      bottomLeftCell.state = CellState.open;
    }
  }

  return cells;
};

export const showAllMines = (cells: CellInterface[][]): CellInterface[][] => {
  const newCells = cells.map((row) =>
    row.map((col) => {
      if (col.value === CellValue.mine && col.state !== CellState.flagged) {
        col.state = CellState.open;
        return col;
      }
      return col;
    })
  );
  return newCells;
};

export const checkIfWon = (cells: CellInterface[][]): boolean => {
  let won = true;
  cells.forEach((row) => {
    row.forEach((col) => {
      if (col.value !== CellValue.mine && col.state === CellState.closed) {
        won = false;
      }
    });
  });
  return won;
};
