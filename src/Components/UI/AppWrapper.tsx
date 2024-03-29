import React from "react";
import {
  FaRegWindowMinimize,
  FaRegWindowMaximize,
  FaTimes,
} from "react-icons/fa";
import { useAppDispatch } from "../../store/hooks";
import { closeApp, minimiseApp } from "../../store/slice/taskbarSlice";

import styles from "./AppWrapper.module.scss";

interface Props {
  title: string;
  icon: string;
  id: string;
  children: React.ReactNode;
}

const AppWrapper: React.FC<Props> = ({ title, icon, id, children }) => {
  const dispatch = useAppDispatch();
  const closeAppHandler = () => {
    dispatch(closeApp(id));
  };
  const minimiseAppHandler = () => {
    dispatch(minimiseApp(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src={icon} alt={`${title} icon`} />
          {title}
        </div>
        <div className={styles.buttons}>
          <button className={styles.resize} onClick={minimiseAppHandler}>
            <FaRegWindowMinimize />
          </button>
          <button className={styles.resize}>
            <FaRegWindowMaximize />
          </button>
          <button className={styles.close} onClick={closeAppHandler}>
            <FaTimes size={26} />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AppWrapper;
