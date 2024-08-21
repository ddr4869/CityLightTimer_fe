import $ from 'jquery';
import { promises as fs } from 'fs'
import path from 'path'

function Light_locate(map: any) {
    interface IntersectionItem {
      mapCtptIntLat: number;
      mapCtptIntLot: number;
      itstId: string;
    }
    //let testData = fs.readFile('/Users/ieungyu/project/nextjs/CityLightTimer_fe/intersection.json', 'utf8');
    const datas: IntersectionItem[] = require('/public/intersection.json')

    datas.forEach(item => {
        const _ = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(item.mapCtptIntLat*0.00000001, item.mapCtptIntLot*0.0000001),
            map: map,
            icon: {
              url:"light2.jpeg",
              size: new naver.maps.Size(500, 52),
              scaledSize: new naver.maps.Size(30,30),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(25, 26)
            },
            title: item.itstId
          });

    });
}

  export default Light_locate;