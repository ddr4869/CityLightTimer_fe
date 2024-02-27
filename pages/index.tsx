import { useState, useEffect } from "react";
import { getIntersectionFromJson } from "./maplistener/intersection";
import getNearLightTiming from "./maplistener/light";
import { breadcrumbState, isLoginState } from "../states";
import { useRecoilState } from "recoil";
import {
  LATITUDE,
  LONGITUDE,
  getLocation,
  getGangnamLocation,
  getCityHallLocation,
  getYeouidoLocation,
  getSangamLocation,
} from "./geolocation";
import addMapTrafficLayer from "./map_option";
import Link from "next/link";
import Login from "./Login";
import Breadcrumb from "./\bBreadcrumb";
//import axios from 'axios';
// 현재 위치를 가져오는 함수

const IndexPage = () => {
  //Test();
  const [currentPage, setCurrentPage] = useRecoilState(breadcrumbState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState);
  const [showNearLight, setShowNearLight] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const handleCurrentPage = () => {
    setCurrentPage("home"); // 버튼 1을 활성화
  };

  // 첫 번째 버튼을 클릭할 때 실행되는 함수
  const handleButtonAllLights = () => {
    setShowNearLight(true); // 버튼 1을 활성화
  };

  // 두 번째 버튼을 클릭할 때 실행되는 함수
  const handleButtonNearLights = () => {
    setShowNearLight(false); // 버튼 1을 활성화
  };

  const handleButtonCurrentLocation = () => {
    var coord: number[] | undefined = getLocation();
    checkLocation(coord);
  };

  const handleButtonGangnamLocation = () => {
    var coord: number[] | undefined = getGangnamLocation();
    checkLocation(coord);
  };

  const handleButtonCityHallLocation = () => {
    var coord: number[] | undefined = getCityHallLocation();
    checkLocation(coord);
  };

  const handleButtonYeouidoLocation = () => {
    var coord: number[] | undefined = getYeouidoLocation();
    checkLocation(coord);
  };

  const handleButtonSangamLocation = () => {
    var coord: number[] | undefined = getSangamLocation();
    checkLocation(coord);
  };

  const handleBookmarkClick = () => {
    if (isLoggedIn) {
      // 로그인 상태일 때 즐겨찾기 페이지로 이동
      // 여기에 즐겨찾기 페이지로 이동하는 로직 추가
    } else {
      // 로그인 상태가 아닐 때 알림 창 표시
      alert("로그인이 필요합니다!");
    }
  };

  const handleRefreshMap = () => {
    alert("새로고침 완료");
    loadMap();
  };

  const checkLocation = (coord: number[] | undefined) => {
    if (coord !== undefined) {
      setLatitude(coord[0]);
      setLongitude(coord[1]);
    } else setLatitude(37.5);
    setLongitude(127.05);
  };

  const handleLogOutSuccess = () => {
    alert("로그아웃 되었습니다 !!");
    setIsLoggedIn(false);
  };

  let script;

  useEffect(() => {
    loadMap();
  }, [showNearLight, latitude, longitude]);

  const loadMap = () => {
    try {
      // 네이버 지도 API 스크립트 동적으로 로드
      script = document.createElement("script");
      script.src =
        "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=e27tyis8vn";
      script.async = true;
      document.head.appendChild(script);
      loadScript(script, LATITUDE, LONGITUDE);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function loadScript(script: any, latitude: number, longitude: number) {
    console.log("latitude: ", latitude, "longitude: ", longitude);
    if (latitude === undefined && longitude === undefined) {
      latitude = 37.5;
      longitude = 127.05;
    }
    script.onload = () => {
      // 네이버 지도 초기화 및 표시
      console.log(LATITUDE, LONGITUDE);
      const mapOptions = {
        //center: new window.naver.maps.LatLng(LATITUDE, LONGITUDE),
        center: new window.naver.maps.LatLng(latitude, longitude),
        zoom: 15,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: naver.maps.MapTypeControlStyle.DROPDOWN,
        },
      };
      const map = new window.naver.maps.Map("map", mapOptions);
      addMapTrafficLayer(map);
      var markers: Array<naver.maps.Marker> = [];
      if (!showNearLight) {
        console.log("total");
        getIntersectionFromJson(map);
      } else {
        console.log("near");
        console.log(markers);
        getNearLightTiming(map, markers);
      }
    };
  }

  return (
    <div className="container">
      <span className="span">
        <Link href="/SignUp">
          <button>회원가입</button>
        </Link>

        {isLoggedIn ? (
          // 로그인 상태일 때 로그아웃 버튼
          <button onClick={handleLogOutSuccess}>로그아웃</button>
        ) : (
          <Link href="/Login">
            <button>로그인</button>
          </Link>
        )}

        <Link href={isLoggedIn ? "/Bookmark" : "#"}>
          <button onClick={handleBookmarkClick}>즐겨찾기</button>
        </Link>
        <button onClick={handleRefreshMap}>새로고침</button>
        <div className="breadcrumb">
          <Breadcrumb currentPage={currentPage} />
        </div>
      </span>
      <h2 className="title">신호등 검색기</h2>
      <button className="button" onClick={handleButtonAllLights}>
        주위 신호등만 표시
      </button>
      <button className="button" onClick={handleButtonNearLights}>
        전체 신호등 표시
      </button>
      <br></br>
      <br></br>
      <button className="button" onClick={handleButtonCurrentLocation}>
        현재 위치
      </button>
      <button className="button" onClick={handleButtonGangnamLocation}>
        강남
      </button>
      <button className="button" onClick={handleButtonCityHallLocation}>
        시청
      </button>
      <button className="button" onClick={handleButtonYeouidoLocation}>
        여의도
      </button>
      <button className="button" onClick={handleButtonSangamLocation}>
        상암
      </button>
      <div id="map" className="map-container"></div>
    </div>
  );
};
export default function Page() {
  return <IndexPage />;
  //return <h1>Hello, Next.js!</h1>
}
