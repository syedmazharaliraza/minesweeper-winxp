export const MAX_ROWS = 9;
export const MAX_COLS = 9;

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
  bomb,
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
