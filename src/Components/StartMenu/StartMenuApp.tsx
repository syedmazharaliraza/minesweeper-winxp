import React from "react";
import styles from "./StartMenuApp.module.scss";
import { appInterface } from "../../constants/apps";
import { useAppDispatch } from "../../store/hooks";
import { openApp, toggleStartMenu } from "../../store/slice/taskbarSlice";

const StartMenuApp: React.FC<{ app: appInterface }> = ({ app }) => {
  const dispatch = useAppDispatch();
  const openAppHandler = () => {
    if (!app.disabled) {
      dispatch(toggleStartMenu());
      dispatch(openApp(app.id));
    }
  };
  return (
    <div
      className={styles.section + ` ${app.disabled && styles.disabled}`}
      onDoubleClick={openAppHandler}
    >
      <img src={app.icon} alt={app.name} />
      <span>{app.name}</span>
    </div>
  );
};

export default StartMenuApp;
