import { configureStore } from "@reduxjs/toolkit";
import desktopAppsReducer from "./slice/desktopAppsSlice";

export const store = configureStore({
  reducer: {
    desktopApps: desktopAppsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
