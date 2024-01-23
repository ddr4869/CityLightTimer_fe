import { useEffect } from "react";
import $ from "jquery";
import Light from "./traffic_light";
import Light_locate from "./light_locate";
import styles from "./styles.module.css"; // 스타일 파일 import

declare global {
  interface Window {
    kakao: any;
  }
}

const IndexPage = () => {
  useEffect(() => {
    try {
      const script = document.createElement("script");

      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=a81064adde82cb18dafd95c731149644&autoload=false`;
      script.async = true;
      document.head.appendChild(script);

      const loadKakaoMap = () => {
        window.kakao.maps.load(() => {
          // 위치 정보 가져오기
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                const mapContainer = document.getElementById("map");

                // 현재 위치를 중심으로 하는 지도 생성
                const mapOption = {
                  center: new window.kakao.maps.LatLng(latitude, longitude),
                  level: 3,
                };

                const map = new window.kakao.maps.Map(mapContainer, mapOption);

                // 현재 위치에 마커 추가
                const marker = new window.kakao.maps.Marker({
                  position: new window.kakao.maps.LatLng(latitude, longitude),
                  map: map,
                });

                // 마커에 표시할 인포윈도우 생성
                const infowindow = new window.kakao.maps.InfoWindow({
                  content: '<div style="padding:5px;">현재 위치</div>',
                });

                // 마커에 클릭 이벤트 등록
                window.kakao.maps.event.addListener(
                  marker,
                  "click",
                  function () {
                    infowindow.open(map, marker);
                  }
                );
              },
              (error) => {
                console.error("Error fetching location:", error);
              }
            );
          } else {
            console.error("Geolocation is not supported.");
          }
        });
      };
      script.addEventListener("load", loadKakaoMap);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <div>
      <h1>이은규</h1>
      <div id="map" style={{ width: "100%", height: "1000px" }}></div>
      <Light></Light>
    </div>
  );
};
export default function Page() {
  return <IndexPage />;
  //return <h1>Hello, Next.js!</h1>
}
