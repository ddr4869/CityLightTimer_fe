import $ from 'jquery';
import { getLightCoordHtml } from '../coordHtml';
import Test from '../test';
import { Light_information, Light_information_timer } from '../light_information';

let interval: NodeJS.Timeout | null = null;
let infowindow: naver.maps.InfoWindow | null = null;

interface IntersectionItem {
  itstId: string;
  itstNm: string;
  mapCtptIntLat: number;
  mapCtptIntLot: number;
}

function getIntersectionFromJson(map: naver.maps.Map) {
  
    const datas:IntersectionItem[] = require('/public/intersection.json')
    datas.forEach(item => {
        const marker: naver.maps.Marker = createLightMarker(map, item.itstId, Number(item.mapCtptIntLat*0.0000001), Number(item.mapCtptIntLot*0.0000001));
        var markers: Array<naver.maps.Marker> = [];
        
        marker.addListener('click', function(markerData) {
          console.log("interval ", interval);
          if (interval !== null) {
            stopIntervals();
            if (infowindow !== null) {
              infowindow.close();
            }
          } else {
            infowindow = new window.naver.maps.InfoWindow({
              content: 'Loading...',
            });
            infowindow.open(map, marker);

            markerListener(map, marker, [], item.itstNm);
          }
        });
      });

}

function createLightMarker(
  map: naver.maps.Map,
  itstId: string,
  latitude: number,
  longitude: number
): naver.maps.Marker {
  const marker = new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(latitude, longitude),
    map: map,
    icon: {
      url: 'light2.jpeg',
      size: new naver.maps.Size(400, 52),
      scaledSize: new naver.maps.Size(30, 30),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(25, 26),
    },
    title: itstId,
  });

  const menuLayer = $(
    '<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>'
  );
  map.getPanes().floatPane.appendChild(menuLayer[0]);

  return marker;
}

function markerListener(
  map: naver.maps.Map,
  marker: naver.maps.Marker,
  markers: naver.maps.Marker[],
  itstNm: string
) {
  if (interval !== null) {
    stopIntervals();
  }

  map.addListener('click', function () {
    stopIntervals();
    if (infowindow !== null) {
      infowindow.close();
    }
  });

  markers = [];
  $.ajax({
    url: process.env.NEXT_PUBLIC_HOST+'/api/light', // 요청 보낼 URL
    type: 'GET', // HTTP 메소드
    dataType: 'text', // 응답 데이터 타입
    data: {
      itstId: marker.getTitle(),
      pageNo: '1',
      numOfRows: '1',
    },
    success: function (resp) {
      // 성공적으로 응답 받았을 때의 처리
      const data = JSON.parse(resp);
      console.log('infowindow: ', infowindow);
      if (infowindow !== null) {
        infowindow.open(map, marker);
      }
      markers.push(marker);

      const timers: number[] = [];
      const timerkeys: string[] = [];
      const timersValue: Light_information = Light_information_timer(data);
      const keys = Object.keys(timersValue) as Array<keyof Light_information>;

      for (let i = 0; i < keys.length; i++) {
        if (timersValue[keys[i]] !== null) {
          timerkeys.push(keys[i]);
          timers.push(Math.trunc(timersValue[keys[i]] / 10));
        }
      }

      if (timerkeys.length === 0) {
        infowindow?.setContent('<h3>No data</h3>');
        infowindow?.open(map, marker);
        console.log('No data');
        setTimeout(() => {
          infowindow?.close();
        }, 3000);
        return;
      }

      interval = setInterval(() => {
        let content = `<div><h3>${marker.getTitle()} - ${itstNm}</h3>`;
        timerkeys.forEach((key, i) => {
          let v = timers[i];
          timers[i] -= 1;
          if (timers[i] < 0) {
            clearInterval(interval!); // 현재 타이머 중지
            interval = null;
            markerListener(map, marker, markers, itstNm);
            return;
          }
          content += `<p>${key}: ${v}</p>`;
        });
        content += '</div>';
        infowindow?.setContent(content);
        infowindow?.open(map, marker);
      }, 1000);
    },
    error: function (error) {
      // 에러 발생 시의 처리
      console.error('Error during Ajax request:', error);
    },
  });
}

function stopIntervals() {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
    console.log('All intervals stopped');
  }
}

function resetInfowindow() {
  if (infowindow !== null) {
    infowindow.close();
  }
  infowindow = new window.naver.maps.InfoWindow({
    content: 'Loading...',
  });
}

// export getIntersectionFromJson and markerListener
export {
  getIntersectionFromJson,
  markerListener,
  stopIntervals,
  resetInfowindow,
  createLightMarker,
  infowindow,
};
