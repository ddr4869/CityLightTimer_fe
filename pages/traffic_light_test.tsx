import { useState, useEffect } from 'react';
import $ from 'jquery';
function LightTest(marker: window.naver.maps.Marker) {
  const [response, setResponse] = useState('')

    useEffect(() => {
        // jQuery를 사용하여 Ajax 요청 보내기
        $.ajax({
          url: 'http://localhost:8080/light', // 요청 보낼 URL
          type: 'GET', // HTTP 메소드
          dataType: 'text', // 응답 데이터 타입
          data: {
            itstId: '22904',
            pageNo: '1',
            numOfRows: '1'
          },
          success: function(resp) {
            // 성공적으로 응답 받았을 때의 처리
            setResponse(resp);
            console.log('Response from server:', resp);

            marker.addListener('click', function(e) {
              var coordHtml = "itstId: " + item.itstId + '<br />' + 
              "y: " + item.mapCtptIntLat*0.0000001 + '<br />' + 
              "x: " + item.mapCtptIntLot*0.0000001;
              
              menuLayer.show().css({  
                position: "relative",
                // left: marker.getPosition().x + "px", // x좌표
                // top: marker.getPosition().y + "px", // y좌표
                textAlign: "center",
                left: e.offset.x,
                top: e.offset.y,
                width: "500px",
                height: "80px",
                size: "15px"
              }).html(coordHtml); 
          });
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
  export default LightTest;