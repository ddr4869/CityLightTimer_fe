import $ from 'jquery';
import {getLightCoordHtml, getLightTimerCoordHtml} from '../coordHtml';
import Test from '../test';

function getIntersectionFromJson(map: naver.maps.Map) {
    const datas = require('/public/intersection.json')
    datas.forEach(item => {
      const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(Number(item.mapCtptIntLat*0.0000001), Number(item.mapCtptIntLot*0.0000001)),
          map: map,
          icon: {
            url:"light2.jpeg",
            size: new naver.maps.Size(400, 52),
            scaledSize: new naver.maps.Size(30,30),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26)
          },
          title: item.itstId
        });
        var menuLayer = $('<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>');
        map.getPanes().floatPane.appendChild(menuLayer[0]);
      
        marker.addListener('click', function(e) {
            $.ajax({
              url: 'http://localhost:8080/api/light', // 요청 보낼 URL
              type: 'GET', // HTTP 메소드
              dataType: 'text', // 응답 데이터 타입
              data: {
                itstId: item.itstId,
                pageNo: '1',
                numOfRows: '1'
              },
              success: function(resp) {
                // 성공적으로 응답 받았을 때의 처리
                var data = JSON.parse(resp);
                    var timer1 = Math.trunc(data["data"][0]["etLtsgRmdrCs"]/10);
                    console.log("timer1: " + timer1)
                    var infowindow = new naver.maps.InfoWindow({
                      content: "Loading..."
                      //content: data
                    });
                  infowindow.open(map, marker);
                    // 타이머 설정
                    var interval = setInterval(function() {
                      infowindow.setContent(`<div><p>Countdown: ${timer1}</p></div>`);
                      infowindow.open(map, marker);
                      timer1--;
                      if (timer1 == 0 ) {
                        clearInterval(interval);
                      }
                }, 1000);
              },
              error: function(error) {
                // 에러 발생 시의 처리
                console.error('Error during Ajax request:', error);
              }
            });
          });
  }); // data end
}

export default getIntersectionFromJson;