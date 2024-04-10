import React from "react";
import styles from "./WeatherBoxCover.module.css";
import MoonLoader from "react-spinners/MoonLoader";
import WeatherBox from "./WeatherBox";
import WeatherButton from "./WeatherButton";
import { useWeather } from "../../hooks/useWeather";
const WeatherBoxCover = () => {
  const [city, setCity] = React.useState(""); //버튼에서 선택한 도시

  const cities = ["London", "New york", "hong kong", "seoul"]; // 버튼, 도시들을 배열로
  const [loading, weather] = useWeather(city);

  return (
    <div className="">
      <img
        className={styles.weatherImage}
        src={`${process.env.PUBLIC_URL}/img/weather_image/sky.jpg`}
        alt="sky"
      />
      <div className={styles.weatherButtons}>
        {loading !== true ? <WeatherBox weather={weather} /> : <MoonLoader />}
        <WeatherButton cities={cities} setCity={setCity} selectedCity={city} />
      </div>
    </div>
  );
};

export default WeatherBoxCover;
