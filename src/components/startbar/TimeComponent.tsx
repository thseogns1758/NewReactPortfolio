/** @format */

import React from "react";
import styles from "./TimeComponent.module.css";
import { useClock } from "../../hooks/useClock";
const TimeComponent = () => {
  const { time, todayDate, hourOfTime } = useClock();

  return (
    <div className={styles.todayCover}>
      <div className={styles.timeCover}>
        {hourOfTime > 11 ? <span>오후</span> : <span>오전</span>}
        {time}
      </div>
      <div className={styles.dateCover}>{todayDate}</div>
    </div>
  );
};

export default TimeComponent;
