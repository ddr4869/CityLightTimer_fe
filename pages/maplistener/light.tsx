import {getLightCoordHtml, getLatLonHtml, getLightTimerCoordHtml} from '../coordHtml';
import {markerListener, stopIntervals, resetInfowindow, createLightMarker, infowindow} from './intersection';
import * as $ from 'jquery';

let interval:NodeJS.Timeout = null;


function getNearLightTiming(map: naver.maps.Map, markers: Array<naver.maps.Marker>) {

  // if map is moved, and return location of middle of the map
    map.addListener('dragend', function(e) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
        var center = map.getCenter();
        $.ajax({
          url: 'http://localhost:8080/api/intersection/list/neighbor', // 요청 보낼 URL
          type: 'GET', // HTTP 메소드
          dataType: 'text', // 응답 데이터 타입
          data: {
            latitude: center.y,
            longitude: center.x,
            distance: 1000
          },
          success: function(resp) {
            var datas = JSON.parse(resp);
            // if data is empty, add warning message marker
            if (datas["data"].length == 0) {
              createNoDataMarker(map,center.y, center.x);
            }
      
            const data = datas["data"]
            data.forEach(item => {
              const marker: naver.maps.Marker = createLightMarker(
                map,
                item.itstId,
                item.latitude,
                item.longitude
              );
              markers.push(marker);
                marker.addListener('click', function(markerData) {
                  console.log("interval ", interval);
                  if (interval !== null) {
                    stopIntervals();
                    infowindow.close();
                  } else {
                    resetInfowindow();
                  infowindow.open(map, marker);
        
                  markerListener(map, marker, markers, item.itstNm);
                }
              });
          }); // data end
            
          },
          error: function(error) {
            // 에러 발생 시의 처리
            console.error('Error during Ajax request:', error);
          }
        });
      });
}

function createNoDataMarker(map:naver.maps.Map, latitude:number, longitude:number) {
  var marker = new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(latitude, longitude),
    cursor: "pointer",
    map: map,
    title: "No data",
    icon: {
      url:"no_data.png",
      size: new naver.maps.Size(500, 500),
      scaledSize: new naver.maps.Size(150,150),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(25, 26),
      
    },
  });
  setTimeout(function() {
    marker.setMap(null);
  }, 1800);
}

export default getNearLightTiming;