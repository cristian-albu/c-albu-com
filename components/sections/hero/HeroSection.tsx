import React from "react";
import styles from "./HeroSection.module.css";
import Button from "@/components/layout/button/Button";

const heroData = {
  preTitle: "Hello",
  title: "I'm asdsa",
  subtitle: "Text",
  cta: "Schedule meeting",
};

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgAnimation}></div>
      <div className={styles.heroPlanetContainer}>
        <div className={styles.heroPlanetRing}>
          <div className={styles.heroPlanetRing}>
            <div className={styles.heroPlanetRing}>
              <div className={styles.heroPlanetRing}>
                <div className={styles.heroPlanetRing} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroPlanet}></div>
      </div>
      <div className={styles.heroContainer}>
        <span>{heroData.preTitle}</span>
        <h1>{heroData.title}</h1>
        <p>{heroData.subtitle}</p>
        <Button>{heroData.cta}</Button>
      </div>
    </section>
  );
};

export default HeroSection;
