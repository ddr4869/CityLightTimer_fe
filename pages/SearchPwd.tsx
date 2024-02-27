import { useState } from "react";
import Breadcrumb from "./\bBreadcrumb";

const SearchPwd = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1); // 1: 아이디 및 이메일 입력, 2: 코드 입력

  const handleValidateUsername = async () => {
    try {
      // 서버로 아이디 유효성 검사 요청
      // 아이디가 유효할 경우 다음 단계로 이동
      setStep(2);
    } catch (error) {
      console.error("Error while validating username:", error);
      // 오류 처리
    }
  };

  const handleFormSubmit = async () => {
    if (step === 1) {
      // 아이디 입력 및 이메일 전송 단계 처리
      try {
        // 아이디가 유효한지 확인하고 이메일로 코드를 전송하는 요청
        // 서버로 아이디와 이메일 정보를 보내고 코드를 전송받음
        // 전송 성공 시 다음 단계로 이동
        setStep(2);
      } catch (error) {
        console.error(
          "Error while validating username or sending code:",
          error
        );
        // 오류 처리
      }
    } else if (step === 2) {
      // 코드 입력 단계 처리
      try {
        // 서버로 코드 유효성 확인 요청
        // 코드가 올바를 경우 아이디를 이메일로 전송
        alert(
          `입력하신 아이디(${username})가 이메일(${email})로 전송되었습니다.`
        );
      } catch (error) {
        console.error("Error while validating code:", error);
        // 오류 처리
      }
    }
  };

  return (
    <div className="container">
      <Breadcrumb currentPage={"아이디 찾기"} />
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleValidateUsername}>이메일 전송</button>
      <br />
      {step === 2 && (
        <label>
          코드:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
      )}
      <br />
      <button onClick={handleFormSubmit}>
        {step === 1 ? "아이디 찾기" : "확인"}
      </button>
    </div>
  );
};

export default SearchPwd;
