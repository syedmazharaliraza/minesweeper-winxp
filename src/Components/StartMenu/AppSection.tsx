import React from "react";
import {
  startMenuLeftPinnedApps,
  startMenuRightBottomApps,
  startMenuRightMiddleApps,
  startMenuRightTopApps,
} from "../../constants/Apps";
import { useAppSelector } from "../../store/hooks";
import styles from "./AppSection.module.scss";
import StartMenuApp from "./StartMenuApp";

const AppSection: React.FC = () => {
  const { startMenuApps } = useAppSelector((state) => state.taskbar);
  return (
    <div className={styles.container}>
      <div className={styles.left_cont}>
        {startMenuLeftPinnedApps.map((app) => {
          return <StartMenuApp key={app.id} app={app} />;
        })}
        <hr />
        {startMenuApps.map((app) => {
          return <StartMenuApp key={app.id} app={app} />;
        })}
      </div>
      <div className={styles.right_cont}>
        {startMenuRightTopApps.map((app) => {
          return <StartMenuApp key={app.id} app={app} />;
        })}
        <hr />
        {startMenuRightMiddleApps.map((app) => {
          return <StartMenuApp key={app.id} app={app} />;
        })}
        <hr />
        {startMenuRightBottomApps.map((app) => {
          return <StartMenuApp key={app.id} app={app} />;
        })}
      </div>
    </div>
  );
};

export default AppSection;
