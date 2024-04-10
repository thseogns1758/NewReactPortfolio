/** @format */

import React from "react";
import styles from "./MemoBox.module.css";
interface MemoProps {
  title: string;
  releaseDate: string;
  memoText: string;
}
const MemoBox: React.FC<MemoProps> = (props) => {
  return (
    <li className={styles.memo}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.memoText}</p>
    </li>
  );
};

export default MemoBox;
