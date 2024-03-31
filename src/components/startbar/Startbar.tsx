/** @format */

import React from "react";
import styles from "./Startbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcCursor } from "react-icons/fc";
import TimeComponent from "./TimeComponent";
import { useDispatch } from "react-redux";
import { number } from "../../features/windowSlice";
import Explanation from "./Explanation";
const Startbar = () => {
  const [display, setDisplay] = React.useState(false);
  const dispatch = useDispatch();
  const handleToggleInformation = () => {
    setDisplay(!display);
  };
  const handleChangeBackground = () => {
    let randomNumber = Math.random();
    randomNumber = randomNumber * 3;
    randomNumber = Math.floor(randomNumber);
    console.log(randomNumber, "랜덤넘버");
    dispatch(number(randomNumber));
  };
  return (
    <div className={styles.startBar}>
      <Explanation display={display} />
      <div className={styles.startMenuCover}>
        <div className={styles.buttonCover}>
          <button
            className={styles.startbutton}
            onClick={handleToggleInformation}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/background_image/windows-icon.png`}
              alt="시작버튼"
            />
          </button>{" "}
          <div className={styles.clickCover}>
            <div className={styles.curser}>
              <FcCursor />
            </div>
            <span>
              Click <br /> (포트폴리오 정보)
            </span>
          </div>
        </div>
        <div className={styles.search} onClick={handleChangeBackground}>
          <AiOutlineSearch />
          <div className={styles.searchText}>Change the background</div>
        </div>
      </div>

      <TimeComponent />
    </div>
  );
};

export default Startbar;
