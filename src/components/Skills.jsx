import styles from "./SkillsStyles.module.css";
import pythonLogo from "../assets/python.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import javascriptLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind.svg";
import csharpLogo from "../assets/csharp.png";
import sqlLogo from "../assets/sql.png";
import mongodbLogo from "../assets/mongodb.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import dockerLogo from "../assets/docker.png";
import agileLogo from "../assets/agile.png";
import uiuxLogo from "../assets/ui_ux.png";
import windowsLogo from "../assets/windows.png";
import linuxLogo from "../assets/linux.png";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillCard}>
          <img src={pythonLogo} />
          <p>Python</p>
        </div>
        <div className={styles.skillCard}>
          <img src={htmlLogo} />
          <p>HTML</p>
        </div>
        <div className={styles.skillCard}>
          <img src={cssLogo} />
          <p>CSS</p>
        </div>
        <div className={styles.skillCard}>
          <img src={javascriptLogo} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skillCard}>
          <img src={reactLogo} />
          <p>React</p>
        </div>
        <div className={styles.skillCard}>
          <img src={tailwindLogo} />
          <p>Tailwind</p>
        </div>
        <div className={styles.skillCard}>
          <img src={csharpLogo} />
          <p>C#</p>
        </div>
        <div className={styles.skillCard}>
          <img src={sqlLogo} />
          <p>SQL</p>
        </div>
        <div className={styles.skillCard}>
          <img src={mongodbLogo} />
          <p>MongoDB</p>
        </div>
        <div className={styles.skillCard}>
          <img src={gitLogo} />
          <p>Git</p>
        </div>
        <div className={styles.skillCard}>
          <img src={githubLogo} />
          <p>GitHub</p>
        </div>
        <div className={styles.skillCard}>
          <img src={dockerLogo} />
          <p>Docker</p>
        </div>
        <div className={styles.skillCard}>
          <img src={agileLogo} />
          <p>Agile</p>
        </div>
        <div className={styles.skillCard}>
          <img src={uiuxLogo} />
          <p>UI/UX</p>
        </div>
        <div className={styles.skillCard}>
          <img src={windowsLogo} />
          <p>Windows</p>
        </div>
        <div className={styles.skillCard}>
          <img src={linuxLogo} />
          <p>Linux</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
