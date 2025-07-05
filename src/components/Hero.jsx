import React from "react";
import heroImage from "../assets/profile.jpeg";
import styles from "./HeroStyles.module.css";
import { GoSun, GoMoon } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../ThemeContext.jsx";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon =
    theme === "dark" ? (
      <GoSun
        style={{ color: "yellow" }}
        size={40}
        className={styles.colorMode}
        onClick={toggleTheme}
      />
    ) : (
      <GoMoon
        style={{ color: "var(--btn-color)" }}
        size={40}
        className={styles.colorMode}
        onClick={toggleTheme}
      />
    );
  const githubIcon =
    theme === "light" ? (
      <FaGithub color="black" size="40" />
    ) : (
      <FiGithub color="white" size="40" />
    );
  const linkedInIcon =
    theme === "light" ? (
      <FaLinkedin color="black" size="40" />
    ) : (
      <FiLinkedin color="white" size="40" />
    );

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImage} alt="" />
        {themeIcon}
      </div>
      <div className={styles.info}>
        <h1>
          William <br /> Nygårds
        </h1>
        <h2>AI Developer</h2>
        <span>
          <a href="">{githubIcon}</a>
          <a href="">{linkedInIcon}</a>
        </span>
        <p>
          Bachelors's degree in Computer Science with a focus on AI, but eager
          to learn and grow in all areas of software development.
        </p>
        <a href="./CV.pdf" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
