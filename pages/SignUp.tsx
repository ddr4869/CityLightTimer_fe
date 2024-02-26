import Breadcrumb from "./\bBreadcrumb";
import router from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { breadcrumbState } from "../states";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 아이디 유효성 검사
    const usernameRegex = /^[a-z][a-z0-9]{3,11}$/;
    if (!usernameRegex.test(username)) {
      setErrorMessage("아이디가 유효성 조건을 충족하지 않습니다.");
      return;
    }
    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("이메일이 유효성 조건을 충족하지 않습니다.");
      return;
    }
    // 비밀번호 유효성 검사
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*?_]).{8,16}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage("비밀번호가 유효성 조건을 충족하지 않습니다.");
      return;
    }
    // 회원가입 처리 로직
    alert("회원가입이 완료되었습니다 !");
    router.push("/");
    // 회원가입 후에 다른 작업을 수행하거나, 페이지를 이동할 수 있습니다.
  };

  return (
    <div className="container">
      <Breadcrumb currentPage={"회원가입"} />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            아이디:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            비밀번호:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <label>
            이메일:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <button type="submit">가입하기</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
