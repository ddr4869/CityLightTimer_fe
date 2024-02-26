import $ from "jquery";
import { getLightCoordHtml } from "../coordHtml";
import Test from "../../test/test";
import { useState } from "react";

function getIntersectionFromJsonTest(
  map: naver.maps.Map,
  countdown,
  setCountdown
) {
  const datas = require("/public/intersection.json");

  datas.forEach((item) => {
    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(
        Number(item.mapCtptIntLat * 0.0000001),
        Number(item.mapCtptIntLot * 0.0000001)
      ),
      map: map,
      icon: {
        url: "light2.jpeg",
        size: new naver.maps.Size(400, 52),
        scaledSize: new naver.maps.Size(30, 30),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26),
      },
      title: item.itstId,
    });
    var menuLayer = $(
      '<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>'
    );
    map.getPanes().floatPane.appendChild(menuLayer[0]);

    const infowindow = new window.naver.maps.InfoWindow({
      content: `<div><p>Countdown: ${countdown}</p></div>`,
      // 여기에 InfoWindow의 스타일, 위치 등을 설정할 수 있습니다.
    });

    marker.addListener("click", function (e) {
      infowindow.open(map, marker);

      const interval = setInterval(() => {
        countdown -= 1;
        infowindow.setContent(`<div><p>Countdown: ${countdown}</p></div>`);
        console.log(countdown);
      }, 1000);

      // 3초 후에 clearInterval을 호출하여 interval 중단
      const timeout = setTimeout(() => {
        clearInterval(interval);
        infowindow.close();
      }, 3000);
    });
  }); // data end
}

export default getIntersectionFromJsonTest;
