import { useState } from "react";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    // 여기에 회원가입 처리 로직을 넣으세요.
    console.log("회원가입 정보:", { username, email, password });
    // 회원가입 후에 다른 작업을 수행하거나, 페이지를 이동할 수 있습니다.
  };

  return (
    <div className="container">
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
      </form>
    </div>
  );
};

export default SignupForm;
