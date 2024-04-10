/** @format */

import React from "react";
import styles from "./AddCount.module.css";
interface AddCountProps {
  addName: (name: string) => void;
}

const AddCount: React.FC<AddCountProps> = (props) => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (titleRef.current!.value.trim() === "") {
      return alert("공백은 입력할 수 없습니다.");
    }
    const Name = titleRef.current!.value;
    props.addName(Name);
    titleRef.current!.value = "";
  };
  return (
    <div className={styles.margin}>
      <form onSubmit={submitHandler} className={styles.flex}>
        <label htmlFor="title" className={styles.taskName}>
          카운트이름
        </label>

        <input
          placeholder="이름을 입력하세요"
          type="text"
          id="title"
          ref={titleRef}
        />
        <button className={styles.add}>추가</button>
      </form>
    </div>
  );
};

export default AddCount;
