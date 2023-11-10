import React, { Ref } from "react";
import styles from "./Search.module.scss";

interface ISearchProps
  extends Partial<{
    command: string;
    inputCommand: string;
    setInputCommand: React.Dispatch<React.SetStateAction<string>>;
    submitHandler: (cmd: string) => void;
  }> {}

const Search = React.forwardRef(
  (props: ISearchProps, ref: Ref<HTMLInputElement>) => {
    const { command, inputCommand, setInputCommand, submitHandler } = props;
    return (
      <form
        className={styles.search}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler?.(inputCommand ?? "");
        }}
      >
        <span className={styles.path}>C:\Syed's Portfolio\&gt;</span>
        <div className={styles.command}>
          {command ?? (
            <input
              onBlur={(e) => e.target.focus()}
              autoFocus
              value={inputCommand}
              onChange={(e) => setInputCommand?.(e.target.value)}
              ref={ref}
            />
          )}
        </div>
      </form>
    );
  }
);

export default Search;
