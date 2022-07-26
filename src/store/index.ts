import { configureStore } from "@reduxjs/toolkit";
import desktopReducer from "./slice/desktopSlice";
import userInfoReducer from "./slice/userInfoSlice";
import taskbarReducer from "./slice/taskbarSlice";

export const store = configureStore({
  reducer: {
    desktop: desktopReducer,
    taskbar: taskbarReducer,
    userInfo: userInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
