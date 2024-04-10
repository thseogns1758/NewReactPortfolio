/** @format */

import React from "react";

import InfoBox from "./InfoBox";

import { BiMapAlt } from "react-icons/bi";
import MyHomeMap from "./myHomeMap/MyHomeMap";
import styles from "./InfoCover.module.css";
const InfoCover = () => {
  return (
    <div className={styles.flex}>
      <InfoBox />
      <h2>
        <span className={styles.margin}>
          <BiMapAlt />
        </span>
        MyHome
      </h2>
      <div className={styles.mapCover}>{<MyHomeMap />}</div>
    </div>
  );
};

export default InfoCover;
