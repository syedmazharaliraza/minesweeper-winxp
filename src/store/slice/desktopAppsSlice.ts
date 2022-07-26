import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import minesweeperIcon from "../../assets/AppIcons/minesweeperIcon.webp";
import { v4 as uuidv4 } from "uuid";

interface DesktopAppsState {
  id: string;
  name: string;
  icon: string;
}

const initialState: DesktopAppsState[] = [
  {
    id: uuidv4(),
    name: "Minesweeper",
    icon: minesweeperIcon,
  },
];

const desktopAppsSlice = createSlice({
  name: "desktopApps",
  initialState,
  reducers: {
    addDesktopApp: (state, action: PayloadAction<DesktopAppsState>) => {
      state.push(action.payload);
    },
    removeDesktopApp: (state, action: PayloadAction<string>) => {
      state = state.filter((app) => app.id !== action.payload);
    },
  },
});

export const { addDesktopApp, removeDesktopApp } = desktopAppsSlice.actions;
export default desktopAppsSlice.reducer;
