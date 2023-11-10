import { useEffect } from "react";
import { portfolioLink } from "../../../constants/cmd";
import styles from "./Command.module.scss";

const Gui: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(portfolioLink, "_blank");
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <p>Redirecting to {portfolioLink.split("//")[1]}</p>
    </div>
  );
};

export default Gui;
