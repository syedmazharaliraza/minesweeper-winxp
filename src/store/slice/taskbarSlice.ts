import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface taskBarState {
  isStartMenuOpen: boolean;
  openApps: string[];
  minimisedApps: string[];
}

const initialState: taskBarState = {
  isStartMenuOpen: false,
  openApps: [],
  minimisedApps: [],
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
    minimiseApp: (state, action: PayloadAction<string>) => {
      if (!state.minimisedApps.includes(action.payload)) {
        state.minimisedApps.push(action.payload);
      }
    },
    closeApp: (state, action: PayloadAction<string>) => {
      state.openApps = state.openApps.filter((id) => id !== action.payload);
    },
    showApp: (state, action: PayloadAction<string>) => {
      state.minimisedApps = state.minimisedApps.filter(
        (id) => id !== action.payload
      );
    },
    toggleStartMenu: (state) => {
      state.isStartMenuOpen = !state.isStartMenuOpen;
    },
  },
});

export const { openApp, minimiseApp, closeApp, showApp, toggleStartMenu } =
  taskbarSlice.actions;
export default taskbarSlice.reducer;
