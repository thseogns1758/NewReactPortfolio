/** @format */

import React from "react";
import styles from "./Window.module.css";
import WindowHeader from "./WindowHeader";
import WindowPage from "./WindowPage";
import PageRouter from "../../routes/PageRouter";

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
