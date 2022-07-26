import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allApps, appInterface } from "../../constants/Apps";

interface taskBarState {
  startMenuApps: appInterface[];
  isStartMenuOpen: boolean;
  openApps: string[];
}

const initialState: taskBarState = {
  startMenuApps: allApps,
  isStartMenuOpen: false,
  openApps: [],
};

const taskbarSlice = createSlice({
  name: "taskbar",
  initialState,
  reducers: {
    closeApp: (state, action: PayloadAction<string>) => {
      state.openApps = state.openApps.filter((id) => id !== action.payload);
    },
    toggleStartMenu: (state) => {
      state.isStartMenuOpen = !state.isStartMenuOpen;
    },
  },
});

export const { closeApp, toggleStartMenu } = taskbarSlice.actions;
export default taskbarSlice.reducer;
