import React from "react";
import styles from "./App.module.scss";
import Minesweeper from "./Minesweeper";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Minesweeper />
    </div>
  );
};

export default App;
