export const MAX_ROWS = 9;
export const MAX_COLS = 9;
export const MAX_MINES = 10;

export enum CellValue {
  none,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  mine,
}

export enum CellState {
  closed,
  open,
  flagged,
}

export interface CellInterface {
  value: CellValue;
  state: CellState;
}

export enum Face {
  smile = "🙂",
  lost = "😵",
  won = "😎",
  scared = "😦",
}
