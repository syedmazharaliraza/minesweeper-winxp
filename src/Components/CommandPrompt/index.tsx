import { useEffect, useRef, useState, useCallback } from "react";
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
  const [inputCommand, setInputCommand] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [rerender, setRerender] = useState<boolean>(true);
  const cmdPointer = useRef<number>(1);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ block: "end" });
    }
  }, [rerender]);

  const handleArrowKeys = useCallback(
    (e: KeyboardEvent) => {
      ["ArrowUp", "ArrowDown"].includes(e.code) && e.preventDefault();
      if (e.code === "ArrowUp") {
        setInputCommand(cmdHistory[cmdHistory.length - cmdPointer.current]);
        if (cmdPointer.current < cmdHistory.length) {
          cmdPointer.current++;
        }
      } else if (e.code === "ArrowDown") {
        setInputCommand(cmdHistory[cmdHistory.length - cmdPointer.current + 1]);
        if (cmdPointer.current > 1) {
          cmdPointer.current--;
        }
      }
    },
    [cmdHistory, setInputCommand, cmdPointer]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKeys);
    return () => {
      window.removeEventListener("keydown", handleArrowKeys);
    };
  }, [handleArrowKeys]);

  const commandSubmitHandler = (cmd: string) => {
    setCmdHistory((prev) => [...prev, cmd.trim()]);
    setInputCommand("");
    cmdPointer.current = 1;
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
