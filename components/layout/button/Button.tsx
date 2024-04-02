import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "../Layout.module.css";

type T_Button = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<T_Button> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
