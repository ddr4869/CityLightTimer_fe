import { useState, useEffect } from "react";
import $ from "jquery";
import Light from "./traffic_light";
import LightTest from "./traffic_light_test";
import Light_locate from "./light_locate";
import {getIntersectionFromJson} from "./maplistener/intersection";
import getIntersectionFromJsonTest from "./maplistener/testIntersection";
import getNearLightTiming from "./maplistener/light";
import { getLightCoordHtml, getLatLonHtml } from "./coordHtml";
import {LATITUDE, LONGITUDE, getLocation, getGangnamLocation, getCityHallLocation, getYeouidoLocation, getSangamLocation} from "./geolocation";
import addMapTrafficLayer from "./map_option";
import Test from "./test";
//import axios from 'axios';
// 현재 위치를 가져오는 함수


const IndexPage = () => {
  //Test();
  const [showNearLight, setShowNearLight] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // 첫 번째 버튼을 클릭할 때 실행되는 함수
  const handleButtonAllLights = () => {
    setShowNearLight(true); // 버튼 1을 활성화
  };

  // 두 번째 버튼을 클릭할 때 실행되는 함수
  const handleButtonNearLights = () => {
    setShowNearLight(false); // 버튼 1을 활성화
  };

  const handleButtonCurrentLocation = () => {
    var coord:number[] | undefined =  getLocation();
    checkLocation(coord);
  }

  const handleButtonGangnamLocation = () => {
    var coord:number[] | undefined = getGangnamLocation();
    checkLocation(coord);
  }

  const handleButtonCityHallLocation = () => {
    var coord:number[] | undefined = getCityHallLocation();
    checkLocation(coord);
  }

  const handleButtonYeouidoLocation = () => {
    var coord:number[] | undefined = getYeouidoLocation();
    checkLocation(coord);
  }

  const handleButtonSangamLocation = () => {
    var coord:number[] | undefined = getSangamLocation();
    checkLocation(coord);
  }

  const checkLocation = (coord:number[] | undefined) => {
    if (coord !== undefined) {
      setLatitude(coord[0]);
      setLongitude(coord[1]);
    } else
      setLatitude(37.5);
      setLongitude(127.05);
  }

  var script
  
  useEffect(() => {
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
  }, [showNearLight, latitude, longitude]);

  function loadScript(script: any, latitude: number, longitude: number) {
    console.log("latitude: ", latitude, "longitude: ", longitude)
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
            style: naver.maps.MapTypeControlStyle.DROPDOWN
        }
      };
        const map = new window.naver.maps.Map("map", mapOptions);
        addMapTrafficLayer(map);
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
      <span className="span">
      <button className="button" onClick={handleButtonAllLights}>회원가입</button>
      <button className="button" onClick={handleButtonAllLights}>로그인</button>
      <button className="button" onClick={handleButtonAllLights}>즐겨찾기</button>
      </span>
      <h2 className="title">신호등 검색기</h2>
      <button className="button" onClick={handleButtonAllLights}>주위 신호등만 표시</button>
      <button className="button" onClick={handleButtonNearLights}>전체 신호등 표시</button>
      <br></br><br></br>
      <button className="button" onClick={handleButtonCurrentLocation}>현재 위치</button>
      <button className="button" onClick={handleButtonGangnamLocation}>강남</button>
      <button className="button" onClick={handleButtonCityHallLocation}>시청</button>
      <button className="button" onClick={handleButtonYeouidoLocation}>여의도</button>
      <button className="button" onClick={handleButtonSangamLocation}>상암</button>
      <div id="map" className="map-container"></div>
    </div>
  );
};
export default function Page() {
  return <IndexPage />;
  //return <h1>Hello, Next.js!</h1>
}
