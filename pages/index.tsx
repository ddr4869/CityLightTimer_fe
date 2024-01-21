import { useEffect } from 'react';
import $ from 'jquery';
import Light from'./traffic_light';
import Light_locate from './light_locate';
//import axios from 'axios';


const IndexPage = () => {
  useEffect(() => {
    
      try {
        //const geojson = require('./geo.json')
        // const response = await axios.get('./geo.json');
        // const geojson = response.data;

        // 네이버 지도 API 스크립트 동적으로 로드
        const script = document.createElement('script');
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=e27tyis8vn';
        script.async = true;
        document.head.appendChild(script);

        // 스크립트 로드 후 콜백 등록
        script.onload = () => {
          // 네이버 지도 초기화 및 표시
          const mapOptions = {
            center: new window.naver.maps.LatLng(37.5560943, 126.9342876),
            //center: new window.naver.maps.LatLng(37.5995239, 126.9165965),
            zoom: 18,
          };

          const map = new window.naver.maps.Map('map', mapOptions);

          // 마커 추가 예시
        //   const datas = require('/public/intersection.json')
        //   datas.forEach(item => {
        //     console.log(item.itstId); // itstId 필드 출력
        // });
          const marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.5560943, 126.9342876),
            map: map,
            icon: {
              url:"light.png",
              size: new naver.maps.Size(500, 52),
              scaledSize: new naver.maps.Size(40,40),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(25, 26)
            }
          });

          // const marker2 = new window.naver.maps.Marker({
          //   position: new window.naver.maps.LatLng(37.8560843, 126.9342876),
          //   map: map,
          //   icon: {
          //     url:"light.png",
          //     size: new naver.maps.Size(500, 52),
          //     scaledSize: new naver.maps.Size(40,40),
          //     origin: new naver.maps.Point(0, 0),
          //     anchor: new naver.maps.Point(25, 26)
          //   }
          // });

            const datas = require('/public/intersection.json')
            datas.forEach(item => {
              //console.log(item.itstId); // itstId 필드 출력
              const marker = new window.naver.maps.Marker({
                  position: new window.naver.maps.LatLng(Number(item.mapCtptIntLat*0.0000001), Number(item.mapCtptIntLot*0.0000001)),
                  map: map,
                  icon: {
                    url:"light.png",
                    size: new naver.maps.Size(500, 52),
                    scaledSize: new naver.maps.Size(40,40),
                    origin: new naver.maps.Point(0, 0),
                    anchor: new naver.maps.Point(25, 26)
                  },
                  title: item.itstId
                });
                var menuLayer = $('<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>');
                map.getPanes().floatPane.appendChild(menuLayer[0]);
              
                marker.addListener('click', function(e) {
                  var coordHtml =
                      'Coord: '+ '(우 클릭 지점 위/경도 좌표)' + '<br />' +
                      'Point: ' + e.point + '<br />' +
                      'Offset: ' + e.offset;
                  
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
          });

        };

      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }, []);

  return (
    <div>
      <h1>귀요미 더스틴</h1>
      <div id="map" style={{ width: '100%', height: '1000px' }}></div>
      <Light></Light>
    </div>
  );
};
export default function Page() {
  return <IndexPage />;
  //return <h1>Hello, Next.js!</h1>
}