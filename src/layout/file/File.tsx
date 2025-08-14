/** @format */

import React from "react";
import styles from "./File.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pageName } from "../../features/windowSlice";
import { fileName } from "../../names";
const File = () => {
  const dispatch = useDispatch();

  const clickHandler: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const patchName = e.currentTarget.getAttribute("data-name");
    if (patchName !== null && patchName !== "휴지통") {
      dispatch(pageName(patchName));
    }
  };
  return (
    <ul className={styles.position}>
      {fileName.map((name) => (
        <li
          key={name.name}
          className={styles.folder}
          data-name={name.name}
          onClick={clickHandler}
        >
          <div>
            <Link to={`${name.path}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/folder_image/${name.img}.png`}
                alt="이미지"
              ></img>
              <div>{name.name}</div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default File;
