import React from "react";
import styles from "./WindowPage.module.css";
type BackgroundProps = {
  children: React.ReactNode;
};
const WindowPage = ({ children }: BackgroundProps) => {
  return <div className={styles.scroll}>{children}</div>;
};

export default WindowPage;
