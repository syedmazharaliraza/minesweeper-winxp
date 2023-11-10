import styles from "./Search.module.scss";

interface ISearchProps {
  command?: string;
}
const Search = ({ command }: ISearchProps) => {
  return (
    <form className={styles.search}>
      <span className={styles.path}>C:\Syed's Portfolio\&gt;</span>
      <div className={styles.command}> {command ?? <input autoFocus />}</div>
    </form>
  );
};

export default Search;
