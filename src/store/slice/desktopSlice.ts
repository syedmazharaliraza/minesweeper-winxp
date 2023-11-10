import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allApps, appInterface } from "../../constants/apps";

interface DesktopState {
  apps: appInterface[];
}

const initialState: DesktopState = {
  apps: allApps,
};

const desktopSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {
    addDesktopApp: (state, action: PayloadAction<appInterface>) => {
      state.apps.push(action.payload);
    },
    removeDesktopApp: (state, action: PayloadAction<string>) => {
      state.apps = state.apps.filter((app) => app.id !== action.payload);
    },
  },
});

export const { addDesktopApp, removeDesktopApp } = desktopSlice.actions;
export default desktopSlice.reducer;
