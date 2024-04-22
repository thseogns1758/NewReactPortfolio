/** @format */

import React from "react";

import WindowHeader from "./WindowHeader";
import WindowPage from "./WindowPage";
import PageRouter from "../../routes/PageRouter";
import styles from "./Window.module.css";

const Window = () => {
  return (
    <div className={styles.window}>
      <WindowHeader />
      <WindowPage>
        <PageRouter />
      </WindowPage>
    </div>
  );
};

export default Window;
