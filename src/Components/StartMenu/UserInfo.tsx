import React from "react";
import { userInfo } from "../../constants/Common";
import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <img src={userInfo.profilePic} alt='profile' />
      <span>{userInfo.name}</span>
    </div>
  );
};

export default UserInfo;
