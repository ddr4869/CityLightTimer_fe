import { useState, useEffect } from "react";
import $ from "jquery";
import Light from "./traffic_light";
import LightTest from "./traffic_light_test";
import Light_locate from "./light_locate";
import getIntersectionFromJson from "./maplistener/intersection";
import getNearLightTiming from "./maplistener/light";
import { getLightCoordHtml, getLatLonHtml } from "./coordHtml";
import {getLocation, LATITUDE, LONGITUDE} from "./geolocation";
//import axios from 'axios';
// 현재 위치를 가져오는 함수

const IndexPage = () => {
  useEffect(() => {
    try {
      getLocation();
      // 네이버 지도 API 스크립트 동적으로 로드
      const script = document.createElement("script");
      script.src =
        "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=e27tyis8vn";
      script.async = true;
      document.head.appendChild(script);

      // 스크립트 로드 후 콜백 등록
      script.onload = () => {
        // 네이버 지도 초기화 및 표시
        const mapOptions = {
          center: new window.naver.maps.LatLng(LATITUDE, LONGITUDE),
          //center: new window.naver.maps.LatLng(37.5, 127.05),
          //center: new window.naver.maps.LatLng(37.5995239, 126.9165965),
          zoom: 15,
        };

        const map = new window.naver.maps.Map("map", mapOptions);
        var markers: Array<naver.maps.Marker> = [];
        // json에서 교차로 정보를 가져와서 지도에 표시
        getIntersectionFromJson(map);
        // 교차로 주변 신호등 정보를 가져와서 지도에 표시
        getNearLightTiming(map, markers);
      };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <div>
      <h1></h1>
      <div id="map" style={{ width: "100%", height: "1000px" }}></div>
      <Light></Light>
    </div>
  );
};
export default function Page() {
  return <IndexPage />;
  //return <h1>Hello, Next.js!</h1>
}
