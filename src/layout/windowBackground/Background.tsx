/** @format */

import React from "react";
import styles from "./Background.module.css";
// import StartBar from "./windowInterface/startbar/Startbar";
// import FileCover from "./windowInterface/windowFile/FileCover";
// import Window from "./windowInterface/window/Window";
import File from "../../layout/file/File";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Startbar from "../../layout/startbar/Startbar";
import AppRouter from "../../routes/AppRouter";
const Background = () => {
  const number = useSelector(
    (state: RootState) => state.window.backgroundNumber
  );

  return (
    <div className={styles.main_back}>
      <BrowserRouter>
        {number === 0 && (
          <img
            src={`${process.env.PUBLIC_URL}/img/background_image/win.jpg`}
            alt="Background"
          />
        )}
        {number === 1 && (
          <img
            src={`${process.env.PUBLIC_URL}/img/background_image/win2.jpg`}
            alt="Background"
          />
        )}
        {number === 2 && (
          <img
            src={`${process.env.PUBLIC_URL}/img/background_image/win3.jpg`}
            alt="Background"
          />
        )}
        <File />
        <AppRouter />
      </BrowserRouter>
      <Startbar />
    </div>
  );
};

export default Background;
