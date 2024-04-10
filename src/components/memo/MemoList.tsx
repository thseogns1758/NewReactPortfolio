/** @format */

import React from "react";
import MemoBox from "./MemoBox";
import styles from "./MemoList.module.css";
interface MemoType {
  id: string;
  title: string;
  memoText: string;
  releaseDate: string;
}

interface MemoListProps {
  memos: MemoType[]; // memos 속성의 타입을 MemoType[]로 지정
}

const MemoList: React.FC<MemoListProps> = (props) => {
  return (
    <ul className={styles.memoList}>
      {props.memos.map((memo) => (
        <MemoBox
          key={memo.id}
          title={memo.title}
          releaseDate={memo.releaseDate}
          memoText={memo.memoText}
        />
      ))}
    </ul>
  );
};

export default MemoList;
