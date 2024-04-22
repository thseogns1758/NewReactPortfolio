/** @format */

import React from "react";

import WindowHeader from "./WindowHeader";
import WindowPage from "./WindowPage";
import PageRouter from "../../routes/PageRouter";
import "../../css/styles.css";

const Window = () => {
  return (
    <div className="window">
      <WindowHeader />
      <WindowPage>
        <PageRouter />
      </WindowPage>
    </div>
  );
};

export default Window;
