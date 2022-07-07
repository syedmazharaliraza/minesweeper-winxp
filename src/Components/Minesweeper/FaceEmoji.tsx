import { Face } from "../../constants/Minesweeper";
import styles from "./FaceEmoji.module.scss";

const FaceEmoji: React.FC<{ faceEmoji: Face }> = ({ faceEmoji }) => {
  return (
    <span className={styles.face} aria-label='face'>
      {faceEmoji}
    </span>
  );
};

export default FaceEmoji;
