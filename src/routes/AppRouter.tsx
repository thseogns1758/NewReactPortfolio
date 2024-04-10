/** @format */

import React from "react";

import Window from "../layout/window/Window";
import { Route, Routes } from "react-router-dom";

import WeatherAppPage from "../components/weather/WeatherAppPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={null} />
      {/*주소가 /일때 디스플레이 값을 0으로? 해서 window를 없애자. */}
      <Route path="/window/*" element={<Window />}></Route>
      <Route path="/weather" element={<WeatherAppPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
