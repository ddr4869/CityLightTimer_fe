import { useState } from "react";
import Breadcrumb from "./\bBreadcrumb";

const SearchPwd = () => {
  const [username, setUsername] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // 이메일 유효성 상태
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: 아이디 및 이메일 입력, 2: 이메일 유효성 통과, 3: 코드 입력창 나옴

  // 이메일 유효성을 검사하는 함수
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  // 이메일 입력 값이 변경될 때마다 유효성 검사
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true); // 입력 값이 변경될 때마다 유효성 상태 초기화
  };

  const handleValidateUsername = async () => {
    try {
      // 서버로 아이디 유효성 검사 요청
      // 아이디가 유효할 경우 다음 단계로 이동
      if (username === "test") {
        alert("유효한 아이디 입니다.");
        setStep(2);
      } else {
        alert("유효하지 않은 아이디입니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error while validating username:", error);
      // 오류 처리
    }
  };

  const handleEmailSend = () => {
    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
    } else if (isValidEmail) {
      alert("이메일을 전송 했습니다.");
      setStep(3); // 아이디 찾기 단계를 코드 입력으로 변경
    } else {
      alert("유효한 이메일 주소를 입력해주세요.");
    }
  };

  return (
    <div className="container">
      <Breadcrumb currentPage={"비밀번호 찾기"} />
      <label>
        아이디:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={handleValidateUsername}>아이디 유효성 검사</button>
      <br />
      <label>
        이메일:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail} // 입력란을 떠날 때마다 유효성 검사
        />
      </label>
      <button onClick={handleEmailSend} disabled={step !== 2}>
        이메일 전송
      </button>
      <br />
      {step === 3 && (
        <>
          <label>
            코드:
            <input type="text" /> {/* 코드 입력란 */}
            <button>확인</button>
          </label>
          <br />
        </>
      )}
      <br />
      <button>확인</button>
    </div>
  );
};

export default SearchPwd;
