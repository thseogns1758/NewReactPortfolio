import React from "react";
import styles from "./Explanation.module.css";

const Explanation = ({ display }: { display: boolean }) => {
  return (
    <div
      className={styles.explanation}
      style={display ? { display: "block" } : { display: "none" }}
    >
      <p>
        리액트, 타입스크립트, redux , redux-tollkit, react-icon 을 활용한
        포트폴리오입니다. <br />
        윈도우 화면을 연상하게 하는 이미지로 제작 되었습니다. <br /> <br />
        내정보 : 제작자의 정보와 kakaoMap-api를 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;활용해
        현재 거주하고있는 집의 위치를 나타내게 했습니다. <br />
        <br /> 내기술 : 현재까지 사용했었던 기술들과 간단한 기능구현을 작성한
        페이지 입니다. <br />
        <br />
        메모장 : firebase의 api를 활용하여 메모를 저장하고 불러오는
        페이지입니다. <br />
        <br /> 프로젝트 : 현재까지 제작한 사이트들 중 기술적이거나 의미있다고
        생각하는 웹사이트를 출력한 페이지입니다. <br />
        <br />
        숫자기록 : 숫자이름을 등록하고 숫자를 카운트 할 수 있는 페이지 입니다.
        <br />
        &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;로컬스토리지를
        활용해 기록이 남게 하였습니다. <br />
        <br /> 날씨 : 현재 날씨를 지역별로 알 수 있게 만든 페이지입니다. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;application의
        이미지를 위해 다른 웹페이지 형식과는 다르게 제작하였습니다. <br />
        <br /> next13-page : next13과 tailwindCss를 활용하여 제작한
        웹사이트입니다. <br />
      </p>
    </div>
  );
};

export default Explanation;
