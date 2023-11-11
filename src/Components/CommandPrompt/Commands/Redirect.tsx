import { useEffect } from "react";
import styles from "./Command.module.scss";

interface IRedirectProps {
  children: React.ReactNode;
  link: string;
}

const Redirect: React.FC<IRedirectProps> = ({ children, link }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(link, "_blank");
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [link]);

  return (
    <div className={styles.container}>
      <p>{children}</p>
    </div>
  );
};

export default Redirect;
