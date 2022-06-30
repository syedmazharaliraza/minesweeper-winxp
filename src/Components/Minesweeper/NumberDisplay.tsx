import React from "react";
import styles from "./NumberDisplay.module.scss";

interface Props {
  value: number;
}
const NumberDisplay: React.FC<Props> = ({ value }) => {
  return (
    <div className={styles.numberDisplay}>
      {value.toString().padStart(3, "0")}
    </div>
  );
};

export default NumberDisplay;
