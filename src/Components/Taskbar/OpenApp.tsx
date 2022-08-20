import React, { useMemo } from "react";
import { allApps } from "../../constants/Apps";
import { useAppDispatch } from "../../store/hooks";
import { showApp } from "../../store/slice/taskbarSlice";
import styles from "./OpenApp.module.scss";

const OpenApp: React.FC<{ id: string }> = ({ id }) => {
  const appInfo = useMemo(() => allApps.find((app) => app.id == id), []);
  const dispatch = useAppDispatch();
  const showAppHandler = () => {
    dispatch(showApp(id));
  };
  return (
    <div className={styles.wrapper} onClick={showAppHandler}>
      <img src={appInfo?.icon} alt={`${appInfo?.name} icon`} />
      <span>{appInfo?.name}</span>
    </div>
  );
};

export default OpenApp;
