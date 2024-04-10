/** @format */

//날씨 정보가 보이게
//화씨 -> 섭시  App컴퍼넌트  주소값에 &units=metric 추가
import React from "react";
import styles from "./WeatherBox.module.css";
interface WeatherBoxProps {
  weather: any;
}
const WeatherBox = ({ weather }: WeatherBoxProps) => {
  //weather?.name  / weather && weather.name 동일함 - weather가 있을때만 보여줌
  return (
    <div className={styles.weatherInfo}>
      <div className={styles.textColor}>{weather?.name}</div>
      <h2 className={styles.textColor}>
        온도: {weather?.main.temp} ºC / 습도: {weather?.main.humidity} %
      </h2>
      <h2 className={styles.textColor}>
        {weather && weather.weather[0].description}
      </h2>
    </div>
  );
};

export default WeatherBox;
