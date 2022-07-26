import React from "react";
import logo from "../../assets/logo.png";
import { useAppDispatch } from "../../store/hooks";
import { toggleStartMenu } from "../../store/slice/taskbarSlice";
import styles from "./Start.module.scss";

const Start: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleStartMenu());
  };
  return (
    <div className={styles.start_button} onClick={handleMenuToggle}>
      <img src={logo} alt='windows_logo' />
      start
    </div>
  );
};

export default Start;
