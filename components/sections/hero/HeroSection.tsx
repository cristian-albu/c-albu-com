import React from "react";
import styles from "./HeroSection.module.css";
import Button from "@/components/layout/button/Button";

const heroData = {
  preTitle: "Hello there. I'm Cristian",
  title: "Full stack developer focused on bespoke web applications space",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cta: "Let's talk",
};

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.blob} />
        <div className={styles.blob} />
        <div className={styles.blob} />
      </div>
      <div className={styles.planetSystem}>
        <div className={styles.ringsContainer}>
          <div className={styles.ringsSpinner}>
            <div className={styles.ring}>
              <div className={styles.ringMoon} />
              <div className={styles.ring}>
                <div className={styles.ringMoon} />
                <div className={styles.ring}>
                  <div className={styles.ringMoon} />
                  <div className={styles.ring}>
                    <div className={styles.ringMoon} />
                    <div className={styles.ring}>
                      <div className={styles.ringMoon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.planet}></div>
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.heroContainer}>
          <span>{heroData.preTitle}</span>
          <h1>{heroData.title}</h1>
          <p>{heroData.subtitle}</p>
          <Button>{heroData.cta}</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
