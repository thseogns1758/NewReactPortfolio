/** @format */

import React from "react";
import { useClock } from "../../hooks/useClock";
import styles from "./TimeComponent.module.css";
const TimeComponent = () => {
  const [time, todayDate, aP] = useClock();

  return (
    <div className={styles.todayCover}>
      <div className={styles.timeCover}>
        {aP}
        {time}
      </div>
      <div className={styles.dateCover}>{todayDate}</div>
    </div>
  );
};

export default TimeComponent;
