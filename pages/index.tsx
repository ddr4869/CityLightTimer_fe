import { SetStateAction, useEffect, useState } from "react";
import Light from "./traffic_light";
import Link from "next/link";
import Login from "./Login";
import intersection from "../public/intersection.json";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Location {
  itstNm: string;
  mapCtptIntLat: string;
  mapCtptIntLot: string;
  // 다른 필요한 속성들도 여기에 추가할 수 있습니다.
}

const IndexPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const openModal = (location: SetStateAction<Location | null>) => {
    console.log("location", location);
    setSelectedLocation(location);
  };

  const closeModal = () => {
    setSelectedLocation(null);
  };

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
            navigator.geolocation.getCurrentPosition((position) => {
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
              window.kakao.maps.event.addListener(marker, "click", function () {
                infowindow.open(map, marker);
              });

              intersection.forEach((location) => {
                const markerImage = new window.kakao.maps.MarkerImage(
                  "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 빨간색 마커 이미지 URL
                  new window.kakao.maps.Size(24, 35), // 마커 이미지 크기
                  {
                    offset: new window.kakao.maps.Point(12, 35), // 마커 이미지의 중심을 나타내는 지점
                  }
                );

                const marker = new window.kakao.maps.Marker({
                  position: new window.kakao.maps.LatLng(
                    parseFloat(location.mapCtptIntLat) * 0.0000001,
                    parseFloat(location.mapCtptIntLot) * 0.0000001
                  ),
                  map: map,
                  image: markerImage,
                });

                const infowindow = new window.kakao.maps.InfoWindow({
                  content: `<div style="padding:5px;">${location.itstNm}</div>`,
                });

                window.kakao.maps.event.addListener(
                  marker,
                  "click",
                  function () {
                    infowindow.open(map, marker);
                    openModal(location);
                  }
                );
              });
              (error: any) => {
                console.error("Error fetching location:", error);
              };
            });
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
      <div>
        <Link href="/Bookmark">
          <button>즐겨찾기</button>
        </Link>
        <div>
          {isLoggedIn ? (
            // 로그인 상태일 때 로그아웃 버튼
            <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
          ) : (
            // 로그아웃 상태일 때 로그인 버튼
            <Login onLoginSuccess={(isSuccess) => setIsLoggedIn(isSuccess)} />
          )}
        </div>
        <Link href="/SignUp">
          <button>회원가입</button>
        </Link>
      </div>
      <div id="map" style={{ width: "100%", height: "1000px" }}></div>
      {selectedLocation !== null && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="modal-close-btn">
              닫기
            </button>
            <h2>{selectedLocation.itstNm}</h2>
            <p>
              좌표: {selectedLocation.mapCtptIntLat},{" "}
              {selectedLocation.mapCtptIntLot}
            </p>
            {/* 추가 정보를 표시할 수 있음 */}
          </div>
        </div>
      )}
      {/* <Light></Light> */}
    </div>
  );
};
export default function Page() {
  return <IndexPage />;
  //return <h1>Hello, Next.js!</h1>
}
