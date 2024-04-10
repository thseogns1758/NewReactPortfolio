/** @format */

import React from "react";
import type { RootState } from "../../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../../features/loginSlice";
import styles from "./Login.module.css";
interface LoginProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const loginState = useSelector((state: RootState) => state.login.user);
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      (userName.trim() === "" && password.trim() === "") ||
      userName.trim() === "" ||
      password.trim() === ""
    ) {
      return alert("공백은 입력할 수 없습니다.");
    }

    const userData = { userName, password };
    dispatch(login(userData));
  };
  const logOutHandler = () => {
    if (loginState !== null) {
      dispatch(login(null));
    }
  };
  return (
    <div className={styles.cover}>
      <form className={styles.flex} onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="사용자 이름"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <button type="submit">로그인</button>
        <button type="button" onClick={logOutHandler}>
          로그아웃
        </button>
      </form>
      {loginState !== null ? (
        <div>로그인되었습니다</div>
      ) : (
        <div>로그아웃상태입니다</div>
      )}
    </div>
  );
};

export default Login;
