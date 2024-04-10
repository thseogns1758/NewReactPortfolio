/** @format */

import { Link } from "react-router-dom";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import WeatherBoxCover from "./WeatherBoxCover";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./WeatherAppPage.module.css";

const WeatherAppPage = () => {
  const windowPageName = useSelector(
    (state: RootState) => state.window.windowPageName
  );
  return (
    <div className={styles.cover}>
      <div className={styles.header}>
        <div className={styles.pageName}>{windowPageName}</div>
        <Link to="/" className={styles.closeButton}>
          <AiOutlineClose />
        </Link>
      </div>

      <WeatherBoxCover />
    </div>
  );
};

export default WeatherAppPage;
