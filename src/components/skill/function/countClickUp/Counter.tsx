/** @format */

import React from "react";
import styles from "./Counter.module.css";
import type { RootState } from "../../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../../features/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.full}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
