import React, { useEffect, useState } from 'react';
import $ from "jquery";


function markerListener(map: naver.maps.Map, marker: naver.maps.Marker, itstId: string) {
    $.ajax({
        url: 'http://localhost:8080/api/light', // 요청 보낼 URL
        type: 'GET', // HTTP 메소드
        dataType: 'text', // 응답 데이터 타입
        data: {
          itstId: itstId,
          pageNo: '1',
          numOfRows: '1'
        },
        success: function(resp) {
          // 성공적으로 응답 받았을 때의 처리
          var data = JSON.parse(resp);
              var timer1 = Math.trunc(data["data"][0]["etLtsgRmdrCs"]/10);
              console.log("timer1: " + timer1)
              var infowindow = new naver.maps.InfoWindow({
                content: "Loading..."
                //content: data
              });
            infowindow.open(map, marker);
              // 타이머 설정
              var interval = setInterval(function() {
                infowindow.setContent(`<div><p>Countdown: ${timer1}</p></div>`);
                infowindow.open(map, marker);
                timer1--;
                if (timer1 == 0 ) {
                  clearInterval(interval);
                }
          }, 1000);
        },
        error: function(error) {
          // 에러 발생 시의 처리
          console.error('Error during Ajax request:', error);
        }
      });
}