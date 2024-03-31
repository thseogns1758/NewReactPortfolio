/** @format */

import React from "react";
import styles from "./CountUp.module.css";
const CountUp = () => {
  const [countNumber, setCountNumber] = React.useState(1);
  const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout | null>(
    null
  );

  const mouseEnterHandler = () => {
    const newIntervalId = setInterval(
      () => setCountNumber((prev) => prev + 1),
      1000
    );
    setIntervalId(newIntervalId);
  };

  const mouseLeaveHandler = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div
      className={styles.flex}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      마우스를 올리면 증가 = {countNumber}
    </div>
  );
};

export default CountUp;
