/** @format */

import React from "react";

import DetailInfo from "./DetailInfo";
import { MdOutlineMedicalInformation } from "react-icons/md";
import styles from "./InfoBox.module.css";
const InfoBox = () => {
  return (
    <div>
      <h2>
        <span className={styles.margin}>
          <MdOutlineMedicalInformation />
        </span>
        MyInformation
      </h2>
      <div className={styles.infoFlex}>
        <div className={styles.pictureCover}>
          <div className={styles.picture}>
            <img
              src={`${process.env.PUBLIC_URL}/img/picture/selfImage.jpg`}
              alt=""
            />
          </div>
        </div>
        <div className={styles.infoBoxCover}>
          <div className={styles.infoBox}>
            <DetailInfo />
            <div className={styles.text}>
              <p>MBTI: ISFP</p>
            </div>
          </div>
          <div className={styles.linkBox}>
            <a
              className={styles.link}
              href="https://github.com/thseogns/NewReactPortfolio"
            >
              Github 주소
            </a>
            <a
              className={styles.link}
              href={`${process.env.PUBLIC_URL}/personal/손대훈의 포트폴리오.pdf`}
            >
              포트폴리오
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
