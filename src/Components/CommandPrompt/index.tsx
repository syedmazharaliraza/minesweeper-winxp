import { useState } from "react";
import { IDesktopAppProps } from "../../types/apps";
import AppWrapper from "../UI/AppWrapper";
import styles from "./index.module.scss";
import { Command } from "../../types/cmd";
import { portrait } from "../../constants/portfolio";

const CommandPrompt: React.FC<IDesktopAppProps> = ({
  appIcon,
  appId,
  appName,
}) => {
  const [cmdHistory, setCmdHistory] = useState<Command[]>(["welcome"]);
  return (
    <AppWrapper icon={appIcon} id={appId} title={appName}>
      <div className={styles.container}>
        <pre>{portrait}</pre>
        <p>Welcome</p>
      </div>
    </AppWrapper>
  );
};

export default CommandPrompt;
