import { getLightCoordHtml } from '../../component/coordHtml';
import { markerListener, stopIntervals, resetInfowindow, createLightMarker, infowindow } from '../../component/intersection';
import * as $ from 'jquery';

let interval: NodeJS.Timeout | null = null;

interface IntersectionItem {
  itstId: string;
  itstNm: string;
  latitude: number;
  longitude: number;
}

interface IntersectionResponse {
  data: IntersectionItem[];
}

function getNearLightTiming(map: naver.maps.Map, markers: Array<naver.maps.Marker>) {
  if (typeof window !== 'undefined' && window.naver) {
  map.addListener('dragend', function () {
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    const center = map.getCenter();
    $.ajax({
      url: process.env.NEXT_PUBLIC_HOST+'/api/intersection/list/neighbor', // 요청 보낼 URL
      type: 'GET', // HTTP 메소드
      dataType: 'text', // 응답 데이터 타입
      data: {
        latitude: center.y,
        longitude: center.x,
        distance: 1000,
      },
      success: function (resp) {
        const datas: IntersectionResponse = JSON.parse(resp);

        // If no data is returned, show a "No data" marker
        if (datas.data.length === 0) {
          createNoDataMarker(map, center.y, center.x);
        } else {
          datas.data.forEach((item: IntersectionItem) => {
            const marker: naver.maps.Marker = createLightMarker(
              map,
              item.itstId,
              item.latitude,
              item.longitude
            );
            markers.push(marker);
            marker.addListener('click', function () {
              console.log('interval ', interval);
              if (interval !== null) {
                stopIntervals();
                if (infowindow !== null) {
                  infowindow.close();
                }
              } else {
                resetInfowindow();
                if (infowindow !== null) { // null 확인
                  infowindow.open(map, marker);
                }
                markerListener(map, marker, markers, item.itstNm);
              }
            });
          }); // End of forEach
        }
      },
      error: function (error) {
        console.error('Error during Ajax request:', error);
      },
    });
  });
}
}

function createNoDataMarker(map: naver.maps.Map, latitude: number, longitude: number) {
  const marker = new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(latitude, longitude),
    cursor: 'pointer',
    map: map,
    title: 'No data',
    icon: {
      url: 'no_data.png',
      size: new naver.maps.Size(1500, 1500),
      scaledSize: new naver.maps.Size(150, 150),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(25, 26),
    },
  });

  setTimeout(function () {
    marker.setMap(null);
  }, 1800);
}

export default getNearLightTiming;
