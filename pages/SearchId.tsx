import { useState } from "react";
import Breadcrumb from "./\bBreadcrumb";

const SearchId = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // 이메일 유효성 상태
  const [step, setStep] = useState(1); // 아이디 찾기 단계 (1: 이메일 입력, 2: 코드 입력)

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

  // 이메일 전송 버튼 클릭 시 실행되는 함수
  const handleEmailSend = () => {
    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
    } else if (isValidEmail) {
      alert("이메일을 전송 했습니다.");
      setStep(2); // 아이디 찾기 단계를 코드 입력으로 변경
    } else {
      alert("유효한 이메일 주소를 입력해주세요.");
    }
  };

  return (
    <div className="container">
      <Breadcrumb currentPage={"아이디 찾기"} />
      <label>
        이메일:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail} // 입력란을 떠날 때마다 유효성 검사
        />
      </label>
      <button onClick={handleEmailSend}>이메일 전송</button>
      <br />
      {step === 2 && (
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
      <button>확인</button> {/* 항상 유지되는 확인 버튼 */}
    </div>
  );
};

export default SearchId;
