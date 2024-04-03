"use client";
import React from "react";
import styles from "./Nav.module.css";
import useScrolldata from "@/lib/hooks/useScrolldata";

const Nav = () => {
  const { scrollValue } = useScrolldata();

  return (
    <div
      className={styles.nav}
      style={{
        backgroundColor: scrollValue < 50 ? "transparent" : "#252228",
      }}
    >
      Nav
    </div>
  );
};

export default Nav;
