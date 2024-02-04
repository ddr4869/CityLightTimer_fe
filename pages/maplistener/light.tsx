import {getLightCoordHtml, getLatLonHtml} from '../coordHtml';
import * as $ from 'jquery';
function getNearLightTiming(map: naver.maps.Map, markers: Array<naver.maps.Marker>) {
    map.addListener('click', function(e) {

        // 마커가 있을 경우, map의 모든 마커 삭제
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];

        $.ajax({
          url: 'http://localhost:8080/api/intersection/list/neighbor', // 요청 보낼 URL
          type: 'GET', // HTTP 메소드
          dataType: 'text', // 응답 데이터 타입
          data: {
            latitude: e.coord.lat(),
            longitude: e.coord.lng(),
            distance: 1000
          },
          success: function(resp) {
            var data = JSON.parse(resp);
            // if data is empty, add warning message marker
            if (data["data"].length == 0) {
              var marker = new window.naver.maps.Marker({
                position: e.coord,
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
              }, 3000);
            }
      
            var coordHtml = getLatLonHtml(data);

            for (var i = 0; i < data["data"].length; i++) {
              var marker = new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(Number(data["data"][i]["latitude"]), Number(data["data"][i]["longitude"])),
                map: map,
                title: data["data"][i]["itstId"],
                icon: {
                  url:"signal2.png",
                  size: new naver.maps.Size(500, 52),
                  scaledSize: new naver.maps.Size(25,25),
                  origin: new naver.maps.Point(0, 0),
                  anchor: new naver.maps.Point(25, 26)
                },
              });
              markers.push(marker)
              
              var menuLayer = $('<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>');
              map.getPanes().floatPane.appendChild(menuLayer[0]);

              marker.addListener('click', (function (markerData) {
                return function (e) {
                            $.ajax({
                  url: 'http://localhost:8080/api/light', 
                  type: 'GET', // HTTP 메소드
                  dataType: 'text', // 응답 데이터 타입
                  data: {
                    itstId: markerData.itstId,
                    pageNo: '1',
                    numOfRows: '1'
                  },
                  success: function(resp) {
                    // 성공적으로 응답 받았을 때의 처리
                    var data = JSON.parse(resp);
                    var coordHtml = getLightCoordHtml(data, markerData.itstNm);
                    var infowindow = new naver.maps.InfoWindow({
                      content: coordHtml
                      //content: data
                  });
                      if (infowindow.getMap()) {
                        infowindow.close();
                    } else {
                        infowindow.open(map, new window.naver.maps.LatLng(markerData.latitude, markerData.longitude));
                    }
                  },
                  error: function(error) {
                    // 에러 발생 시의 처리
                    console.error('Error during Ajax request:', error);
                  }
                });

                };
            })(data["data"][i]));  // 클로저를 사용하여 데이터 전달
            }

          },
          error: function(error) {
            // 에러 발생 시의 처리
            console.error('Error during Ajax request:', error);
          }
        });
      });

}

export default getNearLightTiming;