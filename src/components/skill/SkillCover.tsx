/** @format */

import React from "react";
import styles from "./SkillCover.module.css";
interface SkillCoeverProps {
  children: React.ReactNode;
}
const SkillCover = ({ children }: SkillCoeverProps) => {
  return <div className={styles.flex}>{children}</div>;
};

export default SkillCover;
