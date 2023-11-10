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
  red: boolean;
}

export enum Face {
  smile = "🙂",
  lost = "😵",
  won = "😎",
  scared = "😦",
}
