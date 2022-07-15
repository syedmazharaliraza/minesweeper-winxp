import React from "react";
import styles from "./App.module.scss";
import Icons from "./Desktop/Icons";
import Minesweeper from "./Minesweeper";
import Taskbar from "./Taskbar";

const App: React.FC = () => {
  return (
    <>
      <Icons />
      <div className={styles.App}>
        <Minesweeper />
      </div>
      <Taskbar />
    </>
  );
};

export default App;
