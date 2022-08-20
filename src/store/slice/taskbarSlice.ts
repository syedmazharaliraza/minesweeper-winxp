import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface taskBarState {
  isStartMenuOpen: boolean;
  openApps: string[];
}

const initialState: taskBarState = {
  isStartMenuOpen: false,
  openApps: [],
};

const taskbarSlice = createSlice({
  name: "taskbar",
  initialState,
  reducers: {
    openApp: (state, action: PayloadAction<string>) => {
      if (!state.openApps.includes(action.payload)) {
        state.openApps.push(action.payload);
      }
    },
    closeApp: (state, action: PayloadAction<string>) => {
      state.openApps = state.openApps.filter((id) => id !== action.payload);
    },
    toggleStartMenu: (state) => {
      state.isStartMenuOpen = !state.isStartMenuOpen;
    },
  },
});

export const { openApp, closeApp, toggleStartMenu } = taskbarSlice.actions;
export default taskbarSlice.reducer;
