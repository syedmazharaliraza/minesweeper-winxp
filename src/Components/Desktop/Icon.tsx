import React from "react";
import { appInterface } from "../../constants/Apps";
import { useAppDispatch } from "../../store/hooks";
import { openApp } from "../../store/slice/taskbarSlice";
import styles from "./Icon.module.scss";

const Icon: React.FC<{ app: appInterface }> = ({ app }) => {
  const dispatch = useAppDispatch();
  const openAppHandler = () => {
    if (!app.disabled) {
      dispatch(openApp(app.id));
    }
  };
  return (
    <div
      className={styles.icon + ` ${app.disabled && styles.disabled}`}
      onDoubleClick={openAppHandler}
    >
      <img src={app.icon} alt={app.name} />
      <span>{app.name}</span>
    </div>
  );
};

export default Icon;
