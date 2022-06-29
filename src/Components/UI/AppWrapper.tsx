import React from "react";
import {
  FaRegWindowMinimize,
  FaRegWindowMaximize,
  FaTimes,
} from "react-icons/fa";

import styles from "./AppWrapper.module.scss";

type Props = {
  title: string;
  icon: string;
  children: JSX.Element;
};

const AppWrapper: React.FC<Props> = ({ title, icon, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src={icon} alt={`${title} icon`} />
          {title}
        </div>
        <div className={styles.buttons}>
          <button className={styles.resize}>
            <FaRegWindowMinimize />
          </button>
          <button className={styles.resize}>
            <FaRegWindowMaximize />
          </button>
          <button className={styles.close}>
            <FaTimes size={26} />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AppWrapper;
