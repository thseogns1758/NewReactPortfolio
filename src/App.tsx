import React from "react";
import Background from "./layout/windowBackground/Background";
import "./App.css";
const App = () => {
  return (
    <div className="scroll">
      <Background />
      <footer className="footer">
        <p>
          이 페이지는 포트폴리오 용으로 제작된 개인 페이지 입니다. <br /> 연락처
          : 010-7599-1758 <br /> <span>2023 / 10 / 31</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
