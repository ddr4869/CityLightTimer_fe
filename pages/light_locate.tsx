import $ from 'jquery';
import { promises as fs } from 'fs'
import path from 'path'

function Light_locate(map: window.naver.maps.Map) {

    //let testData = fs.readFile('/Users/ieungyu/project/nextjs/CityLightTimer_fe/intersection.json', 'utf8');
    const datas = require('/public/intersection.json')
    console.log("!!!!!!!!!!!!!")
    datas.forEach(item => {
        //console.log(item.itstId); // itstId 필드 출력
        console.log(0.0000001*item.mapCtptIntLot)
        const _ = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(item.mapCtptIntLat*0.00000001, item.mapCtptIntLot*0.0000001),
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

    });
}

  //export default Light;
  export default Light_locate;