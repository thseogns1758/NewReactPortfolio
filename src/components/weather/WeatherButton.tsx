/** @format */

import React from "react";
import styles from "./WeatherButton.module.css";
interface WeatherButtonProps {
  cities: string[];
  setCity: (city: string) => void;
  selectedCity: string;
}

const WeatherButton = ({
  cities,
  setCity,
  selectedCity,
}: WeatherButtonProps) => {
  return (
    <div className={styles.buttonStyle}>
      <button className={styles.buttonStyleCurrent} onClick={() => setCity("")}>
        Current Location
      </button>
      {cities.map((city, index) => (
        <button
          className={styles.buttonStyleCity}
          key={index}
          onClick={() => setCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
