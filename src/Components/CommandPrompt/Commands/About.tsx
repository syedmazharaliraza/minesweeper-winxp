import styles from "./Command.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>
        Hey there! My name is <b>Syed Mazhar Ali Raza</b>.
      </p>
      <p>I'm a frontend focussed full-stack developer.</p>
      <p>
        I am highly passionate about programming, computer science and
        technology.
      </p>
    </div>
  );
};

export default About;
