/** @format */

import React from "react";
import styles from "./Scroll.module.css";

const Scroll = () => {
  const [scrollPosition, setScrollPosition] = React.useState(true);

  const targetRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: any) => {
    if (targetRef.current !== null && e.target.scrollTop > 0) {
      setScrollPosition(false);
    } else {
      setScrollPosition(true);
    }

    // 원하는 동작 수행
    // 여기에 스크롤이 발생했을 때 처리할 내용을 작성합니다.
  };

  React.useEffect(() => {
    const box = targetRef.current;

    // 스크롤 이벤트를 박스에 등록
    if (box) {
      box.addEventListener("scroll", handleScroll);
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => {
      if (box) {
        box.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.scrollCover} ref={targetRef}>
      <div className={styles.scroll}>
        <div
          style={
            scrollPosition ? { position: "relative" } : { position: "absolute" }
          }
        >
          {scrollPosition ? <p>이벤트종료</p> : <p>이벤트진행중..</p>}
        </div>
      </div>
    </div>
  );
};
export default Scroll;
