import { useAppSelector } from "../../store/hooks";
import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  const userInfo = useAppSelector((state) => state.userInfo);
  return (
    <div className={styles.container}>
      <img src={userInfo.profilePic} alt='profile' />
      <span>{userInfo.name}</span>
    </div>
  );
};

export default UserInfo;
