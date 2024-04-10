/** @format */

import React from "react";
import styles from "./AddMemo.module.css";

interface AddMemoProps {
  onAddMemo: (memo: {
    title: string;
    memoText: string;
    releaseDate: string;
  }) => void;
}

const AddMemo: React.FC<AddMemoProps> = (props) => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const memoTextRef = React.useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = React.useRef<HTMLInputElement>(null);
  const rows = 5;
  function submitHandler(event: any) {
    event.preventDefault();

    // could add validation here...

    const memo = {
      title: titleRef.current!.value,
      memoText: memoTextRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
    };

    props.onAddMemo(memo);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.flex}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>

          <input type="text" id="title" ref={titleRef} />
        </div>{" "}
      </div>

      <div className={styles.control}>
        <label htmlFor="memo-text">Memo Text</label>
        <textarea rows={rows} id="memo-text" ref={memoTextRef}></textarea>
      </div>

      <div className={styles.flexBtween}>
        <div className={styles.control}>
          <label htmlFor="date">Release Date</label>
          <input type="text" id="date" ref={releaseDateRef} />
        </div>
        <button>Add Memo</button>
      </div>
    </form>
  );
};

export default AddMemo;
