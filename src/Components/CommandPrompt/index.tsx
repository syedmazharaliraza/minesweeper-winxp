import { useState } from "react";
import { IDesktopAppProps } from "../../types/apps";
import AppWrapper from "../UI/AppWrapper";
import styles from "./index.module.scss";
import Search from "./Search";
import Output from "./Output";

const CommandPrompt: React.FC<IDesktopAppProps> = ({
  appIcon,
  appId,
  appName,
}) => {
  const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
  return (
    <AppWrapper icon={appIcon} id={appId} title={appName}>
      <div className={styles.container}>
        {cmdHistory.map((cmd, index) => (
          <div>
            <Search key={index} command={cmd} />
            <Output cmd={cmd} />
          </div>
        ))}
        <Search />
      </div>
    </AppWrapper>
  );
};

export default CommandPrompt;
