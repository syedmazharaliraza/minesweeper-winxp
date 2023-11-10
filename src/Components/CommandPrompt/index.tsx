import { useEffect, useRef, useState } from "react";
import { IDesktopAppProps } from "../../types/apps";
import AppWrapper from "../UI/AppWrapper";
import styles from "./index.module.scss";
import Search from "./Search";
import Output from "./Output";
import { commands } from "../../constants/cmd";

const CommandPrompt: React.FC<IDesktopAppProps> = ({
  appIcon,
  appId,
  appName,
}) => {
  const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
  const [inputCommand, setInputCommand] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [rerender, setRerender] = useState<boolean>(true);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ block: "end" });
    }
  }, [rerender]);

  const commandSubmitHandler = (cmd: string) => {
    setCmdHistory((prev) => [...prev, cmd.trim()]);
    setInputCommand("");
    setRerender(!rerender);
  };
  return (
    <AppWrapper icon={appIcon} id={appId} title={appName}>
      <div className={styles.container}>
        {cmdHistory.map((cmd, index) => (
          <div>
            <Search key={index} command={cmd} />
            <Output
              cmd={cmd}
              setCmdHistory={setCmdHistory}
              cmdHistory={cmdHistory}
            />
          </div>
        ))}
        <Search
          setInputCommand={setInputCommand}
          inputCommand={inputCommand}
          submitHandler={commandSubmitHandler}
          ref={inputRef}
        />
      </div>
    </AppWrapper>
  );
};

export default CommandPrompt;
