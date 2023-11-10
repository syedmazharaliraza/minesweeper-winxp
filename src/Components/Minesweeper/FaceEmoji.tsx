import { Face } from "../../types/minesweeper";
import styles from "./FaceEmoji.module.scss";

const FaceEmoji: React.FC<{ faceEmoji: Face; onClick: () => void }> = ({
  faceEmoji,
  onClick,
}) => {
  return (
    <span className={styles.face} aria-label="face" onClick={onClick}>
      {faceEmoji}
    </span>
  );
};

export default FaceEmoji;
