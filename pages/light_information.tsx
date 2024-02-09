
class Light_information {
  constructor(datas: any) {
    var data = datas["data"][0];
    console.log("동쪽좌회전신호: ", data["etLtsgRmdrCs"]);
    this.동쪽좌회전신호 = data["etLtsgRmdrCs"];
    this.동쪽보행신호 = data["etPdsgRmdrCs"];
    this.동쪽직진신호 = data["etStsgRmdrCs"];
    this.동쪽유턴신호 = data["etUtsgRmdrCs"];

    this.북쪽좌회전신호 = data["ntLtsgRmdrCs"];
    this.북쪽보행신호 = data["ntPdsgRmdrCs"];
    this.북쪽직진신호 = data["ntStsgRmdrCs"];
    this.북쪽유턴신호 = data["ntUtsgRmdrCs"];

    this.남쪽좌회전신호 = data["stLtsgRmdrCs"];
    this.남쪽보행신호 = data["stPdsgRmdrCs"];
    this.남쪽직진신호 = data["stStsgRmdrCs"];
    this.남쪽유턴신호 = data["stUtsgRmdrCs"];

    this.서쪽좌회전신호 = data["wtLtsgRmdrCs"];
    this.서쪽보행신호 = data["wtPdsgRmdrCs"];
    this.서쪽직진신호 = data["wtStsgRmdrCs"];
    this.서쪽유턴신호 = data["wtUtsgRmdrCs"];
  }
}

function Light_information_timer(data: any): Light_information {
  // get light data, every field, if that is exist, append to array
    var lightData = data["data"][0];
    // create Light_information object
    return new Light_information(data);
}


// function Light_information_timer(data: any) {
//   // convert 


//   var coordHtml = 
//   '<div style="width:150px;text-align:center;padding:10px;">' +
//   "<p>" + 
//   (data["data"][0]["itstId"] == null ? "" : "교차로 ID: " + data["data"][0]["itstId"] + '<br />') +
//   (itstNm == null ? "" : "교차로 이름: " + itstNm + '<br />') +

//   (data["data"][0]["etLtsgRmdrCs"] == null ? "" : "동쪽좌회전신호: " + data["data"][0]["etLtsgRmdrCs"] + '<br />') +
//   (data["data"][0]["etPdsgRmdrCs"] == null ? "" : "동쪽보행신호: " + data["data"][0]["etPdsgRmdrCs"] + '<br />') +
//   (data["data"][0]["etStsgRmdrCs"] == null ? "" : "동쪽직진신호: " + data["data"][0]["etStsgRmdrCs"] + '<br />') +
//   (data["data"][0]["etUtsgRmdrCs"] == null ? "" : "동쪽유턴신호: " + data["data"][0]["etUtsgRmdrCs"] + '<br />') +

//   (data["data"][0]["ntLtsgRmdrCs"] == null ? "" : "북쪽좌회전신호: " + data["data"][0]["ntLtsgRmdrCs"] + '<br />') +
//   (data["data"][0]["ntPdsgRmdrCs"] == null ? "" : "북쪽보행신호: " + data["data"][0]["ntPdsgRmdrCs"] + '<br />') +
//   (data["data"][0]["ntStsgRmdrCs"] == null ? "" : "북쪽직진신호: " + data["data"][0]["ntStsgRmdrCs"] + '<br />') +
//   (data["data"][0]["ntUtsgRmdrCs"] == null ? "" : "북쪽유턴신호: " + data["data"][0]["ntUtsgRmdrCs"] + '<br />') +

//   (data["data"][0]["stLtsgRmdrCs"] == null ? "" : "남쪽좌회전신호: " + data["data"][0]["stLtsgRmdrCs"] + '<br />') +
//   (data["data"][0]["stPdsgRmdrCs"] == null ? "" : "남쪽보행신호: " + data["data"][0]["stPdsgRmdrCs"] + '<br />') +
//   (data["data"][0]["stStsgRmdrCs"] == null ? "" : "남쪽직진신호: " + data["data"][0]["stStsgRmdrCs"] + '<br />') +
//   (data["data"][0]["stUtsgRmdrCs"] == null ? "" : "남쪽유턴신호: " + data["data"][0]["stUtsgRmdrCs"] + '<br />') +

//   (data["data"][0]["wtLtsgRmdrCs"] == null ? "" : "서쪽좌회전신호: " + data["data"][0]["wtLtsgRmdrCs"] + '<br />') +
//   (data["data"][0]["wtPdsgRmdrCs"] == null ? "" : "서쪽보행신호: " + data["data"][0]["wtPdsgRmdrCs"] + '<br />') +
//   (data["data"][0]["wtStsgRmdrCs"] == null ? "" : "서쪽직진신호: " + data["data"][0]["wtStsgRmdrCs"] + '<br />') +
//   (data["data"][0]["wtUtsgRmdrCs"] == null ? "" : "서쪽유턴신호: " + data["data"][0]["wtUtsgRmdrCs"] + '<br />') +
//   "</p>" + '</div>' ;
//   return coordHtml;
//     return lightInfo;
// }

export {Light_information, Light_information_timer};