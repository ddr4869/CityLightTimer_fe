import { useState, useEffect } from 'react';
import React from "react";

function Test () {
  const [initialNumber, setInitialNumber] = useState(10); // 초기 타이머 값
  const [timer, setTimer] = useState(initialNumber); // 현재 타이머 값

  useEffect(() => {
    // 1초마다 타이머를 감소시킴
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // 컴포넌트가 언마운트되면 clearInterval을 호출하여 메모리 누수를 방지
    return () => clearInterval(interval);
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 useEffect 실행

  // 초기 숫자를 입력받아 타이머를 재설정하는 함수
  const handleInitialNumberChange = (event) => {
    const newInitialNumber = parseInt(event.target.value, 10) || 0;
    setInitialNumber(newInitialNumber);
    setTimer(newInitialNumber);
  };

  const jsxElement = (
    <div>
      <label>
        Initial Number:
        <input type="number" value={initialNumber} onChange={handleInitialNumberChange} />
      </label>
      <h1>Timer: {timer}</h1>
    </div>
  );
  return jsxElement
};

export default Test;