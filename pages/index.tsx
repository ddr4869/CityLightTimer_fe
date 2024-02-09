import { useState, useEffect } from "react";
import $ from "jquery";
import Light from "./traffic_light";
import LightTest from "./traffic_light_test";
import Light_locate from "./light_locate";
import {getIntersectionFromJson} from "./maplistener/intersection";
import getIntersectionFromJsonTest from "./maplistener/testIntersection";
import getNearLightTiming from "./maplistener/light";
import { getLightCoordHtml, getLatLonHtml } from "./coordHtml";
import {getLocation, LATITUDE, LONGITUDE} from "./geolocation";
import Test from "./test";
//import axios from 'axios';
// 현재 위치를 가져오는 함수


const IndexPage = () => {
  //Test();
  const [showNearLight, setShowNearLight] = useState(false);

  // 첫 번째 버튼을 클릭할 때 실행되는 함수
  const handleButtonAllLights = () => {
    setShowNearLight(true); // 버튼 1을 활성화
  };

  // 두 번째 버튼을 클릭할 때 실행되는 함수
  const handleButtonNearLights = () => {
    setShowNearLight(false); // 버튼 1을 활성화
  };

  var script
  useEffect(() => {
    try {
      getLocation();
      // 네이버 지도 API 스크립트 동적으로 로드
      script = document.createElement("script");
      script.src =
        "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=e27tyis8vn";
      script.async = true;
      document.head.appendChild(script);
      loadScript(script);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [showNearLight]);

  function loadScript(script: any) {
    script.onload = () => {
      // 네이버 지도 초기화 및 표시
      console.log(LATITUDE, LONGITUDE);
      const mapOptions = {
        //center: new window.naver.maps.LatLng(LATITUDE, LONGITUDE),
        center: new window.naver.maps.LatLng(37.5, 127.05),
        zoom: 15,
      };
        const map = new window.naver.maps.Map("map", mapOptions);
        var markers: Array<naver.maps.Marker> = [];
        if (!showNearLight) {
          console.log("total")
          getIntersectionFromJson(map);
        } else {
          console.log("near")
          console.log(markers)
          getNearLightTiming(map, markers);
        }
      }
  };

  return (
    <div className="container">
      <h2 className="title">신호등 검색기</h2>
      <button className="button" onClick={handleButtonAllLights}>주위 신호등만 표시</button>
      <button className="button" onClick={handleButtonNearLights}>전체 신호등 표시</button>
      <p></p>
      <div id="map" className="map-container">p</div>
    </div>
  );
};
export default function Page() {
  return <IndexPage />;
  //return <h1>Hello, Next.js!</h1>
}
