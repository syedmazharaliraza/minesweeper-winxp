import { Face } from "../../constants/Minesweeper";
import styles from "./FaceEmoji.module.scss";

const FaceEmoji: React.FC<{ faceEmoji: Face; onClick: () => any }> = ({
  faceEmoji,
  onClick,
}) => {
  return (
    <span className={styles.face} aria-label='face' onClick={onClick}>
      {faceEmoji}
    </span>
  );
};

export default FaceEmoji;
