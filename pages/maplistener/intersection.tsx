import $ from 'jquery';
import {getLightCoordHtml, getLightTimerCoordHtml} from '../coordHtml';
import Test from '../test';
import Light_information_timer from '../light_information';
import { time } from 'console';

let interval = null;
let infowindow: naver.maps.InfoWindow;

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
        var markers: Array<naver.maps.Marker> = [];
        marker.addListener('click', function(markerData) {
          // if marker is visible, then close it
          if (markers.length > 0) {
            markers.forEach(m => m.setVisible(false));
            markers = [];
            return;
          }
          console.log("interval ", interval);
          if (interval !== null) {
            stopIntervals();
            infowindow.close();
          } else {
            infowindow = new window.naver.maps.InfoWindow({
              content: "Loading..."
            });
            infowindow.open(map, marker);

            markerListener(map, marker, markers, item.itstId);
          }
        });
  }); // data end
}


function markerListener(map: naver.maps.Map, marker: naver.maps.Marker,  markers: Array<naver.maps.Marker>,  itstId: string) {
  if (interval !== null) {
    stopIntervals();
  }
  markers = [];
  $.ajax({
      url: 'http://localhost:8080/api/light', // 요청 보낼 URL
      type: 'GET', // HTTP 메소드
      dataType: 'text', // 응답 데이터 타입
      data: {
        itstId: itstId,
        pageNo: '1',
        numOfRows: '1'
      },
      success: function(resp) {
        // 성공적으로 응답 받았을 때의 처리
          var data = JSON.parse(resp);

          infowindow.open(map, marker);
          markers.push(marker);
          // every timers, set counter with there value
          var timers:Array<number> = [];
          var timerkeys:Array<string> = [];
          const timersValue = Light_information_timer(data);
          const keys = Object.keys(timersValue);

          for (let i = 0; i < keys.length; i++) {
            if (timersValue[keys[i]] !== null) {
              timerkeys.push(keys[i]);
              timers.push(Math.trunc(timersValue[keys[i]] / 10));
            }
          }
           // 타이머 설정
            interval = setInterval(function() {
              // 각각의 타이머를 1씩 감소
              let content = '<div>';
              for (let i = 0; i < timerkeys.length; i++) {
                var k= timerkeys[i];
                var v= timers[i];
                timers[i]-=1;
                if (timers[i] < 0 ) {
                  clearInterval(interval); // 현재 타이머 중지
                  markerListener(map, marker, markers, itstId);
                  break;
                }
                content += `<p>${k}: ${v}</p>`;
              }
              content += '</div>';
              infowindow.setContent(content);
              infowindow.open(map, marker);
        }, 1000);
      },
      error: function(error) {
        // 에러 발생 시의 처리
        console.error('Error during Ajax request:', error);
      }
    });
}

function stopIntervals() {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
    console.log("All intervals stopped");
  }
}
export default getIntersectionFromJson;