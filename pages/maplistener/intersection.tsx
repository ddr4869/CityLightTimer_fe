import $ from "jquery";
import { getLightCoordHtml } from "../coordHtml";
import Test from "../../test/test";
import {
  Light_information,
  Light_information_timer,
} from "../light_information";
import { time } from "console";

let interval: NodeJS.Timeout = null;
let infowindow: naver.maps.InfoWindow = null;

function getIntersectionFromJson(map: naver.maps.Map) {
  const datas = require("/public/intersection.json");
  datas.forEach((item) => {
    const marker: naver.maps.Marker = createLightMarker(
      map,
      item.itstId,
      Number(item.mapCtptIntLat * 0.0000001),
      Number(item.mapCtptIntLot * 0.0000001)
    );
    var markers: Array<naver.maps.Marker> = [];

    marker.addListener("click", function (markerData) {
      console.log("interval ", interval);
      if (interval !== null) {
        stopIntervals();
        infowindow.close();
      } else {
        infowindow = new window.naver.maps.InfoWindow({
          content: "Loading...",
        });
        infowindow.open(map, marker);

        markerListener(map, marker, markers, item.itstNm);
      }
    });
  }); // data end
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

    title: itstId,
  });
  var menuLayer = $(
    '<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>'
  );
  map.getPanes().floatPane.appendChild(menuLayer[0]);
  return marker;
}

function markerListener(
  map: naver.maps.Map,
  marker: naver.maps.Marker,
  markers: Array<naver.maps.Marker>,
  itstNm: string
) {
  if (interval !== null) {
    stopIntervals();
  }

  map.addListener("click", function (e) {
    stopIntervals();
    infowindow.close();
  });

  markers = [];
  $.ajax({
    url: "http://localhost:8080/api/light", // 요청 보낼 URL
    type: "GET", // HTTP 메소드
    dataType: "text", // 응답 데이터 타입
    data: {
      itstId: marker.getTitle(),
      pageNo: "1",
      numOfRows: "1",
    },
    success: function (resp) {
      // 성공적으로 응답 받았을 때의 처리
      var data = JSON.parse(resp);
      console.log("infowindow: ", infowindow);
      infowindow.open(map, marker);
      markers.push(marker);
      // every timers, set counter with there value
      var timers: Array<number> = [];
      var timerkeys: Array<string> = [];
      const timersValue: Light_information = Light_information_timer(data);
      const keys = Object.keys(timersValue);

      for (let i = 0; i < keys.length; i++) {
        if (timersValue[keys[i]] !== null) {
          timerkeys.push(keys[i]);
          timers.push(Math.trunc(timersValue[keys[i]] / 10));
        }
      }

      if (timerkeys.length === 0) {
        infowindow.setContent("<h3>No data</h3>");
        infowindow.open(map, marker);
        console.log("No data");
        setTimeout(function () {
          infowindow.close();
        }, 3000);
        return;
      }

      // 타이머 설정
      interval = setInterval(function () {
        // 각각의 타이머를 1씩 감소
        let content =
          "<div><h3>" + marker.getTitle() + " - " + itstNm + "</h3>";
        for (let i = 0; i < timerkeys.length; i++) {
          var k = timerkeys[i];
          var v = timers[i];
          timers[i] -= 1;
          if (timers[i] < 0) {
            clearInterval(interval); // 현재 타이머 중지
            markerListener(map, marker, markers, itstNm);
            break;
          }
          content += `<p>${k}: ${v}</p>`;
        }
        content += "<button id='addBookmarkButton'>즐겨찾기 추가</button>"; // 즐겨찾기 추가 버튼
        content += "</div>";
        infowindow.setContent(content);
        infowindow.open(map, marker);

        // 즐겨찾기 추가 버튼 이벤트 처리
        $("#addBookmarkButton").on("click", function () {
          // 여기에 즐겨찾기 추가 동작을 수행하는 코드를 작성합니다.
          // 예를 들어, 사용자가 선택한 신호등을 즐겨찾기에 추가하는 API 요청을 보낼 수 있습니다.
          // 이 부분은 프로젝트의 구현에 따라 달라질 수 있습니다.
          alert("즐겨찾기가 추가되었습니다!");
        });
      }, 1000);
    },
    error: function (error) {
      // 에러 발생 시의 처리
      console.error("Error during Ajax request:", error);
    },
  });
}

function stopIntervals() {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
    console.log("All intervals stopped");
  }
}

function resetInfowindow() {
  if (infowindow !== null) {
    infowindow.close();
  }
  infowindow = new window.naver.maps.InfoWindow({
    content: "Loading...",
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
