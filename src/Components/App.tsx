import React from "react";
import { useAppSelector } from "../store/hooks";
import styles from "./App.module.scss";
import Icons from "./Desktop/Icons";
import Taskbar from "./Taskbar";
import { allApps } from "../constants/apps";

const App: React.FC = () => {
  const { openApps, minimisedApps } = useAppSelector((state) => state.taskbar);

  return (
    <>
      <Icons />
      {allApps.map((app) => {
        const { component: Component, id, icon, name } = app;
        return (
          openApps.includes(id) &&
          !minimisedApps.includes(id) && (
            <div className={styles.App}>
              <Component key={id} appName={name} appIcon={icon} appId={id} />
            </div>
          )
        );
      })}
      <Taskbar />
    </>
  );
};

export default App;
