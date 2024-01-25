import { useState, useEffect } from 'react';
import $ from 'jquery';
function Light() {
//const Light = () => {
    const [response, setResponse] = useState('')
    

    useEffect(() => {
        // jQuery를 사용하여 Ajax 요청 보내기
        $.ajax({
          url: 'http://localhost:8080/light', // 요청 보낼 URL
          type: 'GET', // HTTP 메소드
          dataType: 'text', // 응답 데이터 타입
          data: {
            apiKey: 'b2a72569-9548-4d0d-bd01-8fca5d2740df',
            itstId: '22904',
            pageNo: '1',
            numOfRows: '1'
          },
          success: function(resp) {
            // 성공적으로 응답 받았을 때의 처리
            setResponse(resp);
            console.log('Response from server:', resp);
          },
          error: function(error) {
            // 에러 발생 시의 처리
            console.error('Error during Ajax request:', error);
          }
        });
      }, []);
    
      return (

        <div id="resp" style={{ wordWrap: 'break-word' }}>
            <h1>Connection test to Server...</h1>
            <p>{response}</p>
        </div>
      );
  };
  
  //export default Light;
  export default Light;