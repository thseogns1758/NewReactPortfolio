/** @format */

import React from "react";
import type { RootState } from "../../../../app/store";
import styles from "./DropDown.module.css";
import { useSelector, useDispatch } from "react-redux";
import { list, toggle } from "../../../../features/displaySlice"; // listSlice 파일 경로에 맞게 수정해주세요.

const DropDown = () => {
  const listName = ["list1", "list2", "list3", "list4"];
  const listNumber = useSelector((state: RootState) => state.list.listNumber);
  const toggleDisplay = useSelector((state: RootState) => state.list.toggle);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggle(!toggleDisplay));
  };
  const handleItemClick = (item: string) => {
    dispatch(list(item)); // 값을 전달하여 액션을 생성합니다.
    // 값을 전달하여 액션을 생성합니다.
  };

  return (
    <div className={styles.center}>
      <div className={styles.flex}>
        <div className={styles.text}>{listNumber}</div>
        <button onClick={handleToggle}>Down</button>
      </div>
      {toggleDisplay && (
        <ul className={styles.toggleList}>
          {listName.map((listItem) => (
            <li
              className={styles.listStyle}
              key={listItem}
              onClick={() => handleItemClick(listItem)}
            >
              {listItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
