// components/LoginForm.js
import { useRouter } from "next/router";
import { useState } from "react";

interface LoginFormProps {
  onLoginSuccess: (isSuccess: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const router = useRouter();
  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("test");

  const handleLogin = async () => {
    try {
      // 아이디와 비밀번호를 서버로 전송
      // const response = await fetch("http://localhost:8088/Login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username,
      //     password,
      //   }),
      // });
      // console.log("response", response);
      // // 서버로부터의 응답을 확인
      // if (response) {
      //   console.log("로그인 성공!");
      //   // 로그인이 성공하면 부모 컴포넌트에서 전달한 콜백 함수를 호출하여 상태를 업데이트합니다.
      //   // onLogin 함수는 부모 컴포넌트에서 전달될 예정입니다.
      // } else {
      //   console.log("로그인 실패!");
      //   // 실패 시 적절한 에러 처리를 수행
      // }
      if (username == "test" && password == "test") {
        onLoginSuccess(true);
        console.log("로그인 성공 ");
        window.alert("로그인이 성공했습니다!");
        router.push("/");
      } else {
        /**
         * 나중에 처리함
         */
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <div>
      <label>
        아이디:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        비밀번호:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginForm;
