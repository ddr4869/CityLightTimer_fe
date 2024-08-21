
export function getLightCoordHtml(data: any, itstNm: string) {

    var coordHtml = 
    '<div style="width:150px;text-align:center;padding:10px;">' +
    "<p>" + 
    (data["data"][0]["itstId"] == null ? "" : "교차로 ID: " + data["data"][0]["itstId"] + '<br />') +
    (itstNm == null ? "" : "교차로 이름: " + itstNm + '<br />') +

    (data["data"][0]["etLtsgRmdrCs"] == null ? "" : "동쪽좌회전신호: " + data["data"][0]["etLtsgRmdrCs"] + '<br />') +
    (data["data"][0]["etPdsgRmdrCs"] == null ? "" : "동쪽보행신호: " + data["data"][0]["etPdsgRmdrCs"] + '<br />') +
    (data["data"][0]["etStsgRmdrCs"] == null ? "" : "동쪽직진신호: " + data["data"][0]["etStsgRmdrCs"] + '<br />') +
    (data["data"][0]["etUtsgRmdrCs"] == null ? "" : "동쪽유턴신호: " + data["data"][0]["etUtsgRmdrCs"] + '<br />') +

    (data["data"][0]["ntLtsgRmdrCs"] == null ? "" : "북쪽좌회전신호: " + data["data"][0]["ntLtsgRmdrCs"] + '<br />') +
    (data["data"][0]["ntPdsgRmdrCs"] == null ? "" : "북쪽보행신호: " + data["data"][0]["ntPdsgRmdrCs"] + '<br />') +
    (data["data"][0]["ntStsgRmdrCs"] == null ? "" : "북쪽직진신호: " + data["data"][0]["ntStsgRmdrCs"] + '<br />') +
    (data["data"][0]["ntUtsgRmdrCs"] == null ? "" : "북쪽유턴신호: " + data["data"][0]["ntUtsgRmdrCs"] + '<br />') +

    (data["data"][0]["stLtsgRmdrCs"] == null ? "" : "남쪽좌회전신호: " + data["data"][0]["stLtsgRmdrCs"] + '<br />') +
    (data["data"][0]["stPdsgRmdrCs"] == null ? "" : "남쪽보행신호: " + data["data"][0]["stPdsgRmdrCs"] + '<br />') +
    (data["data"][0]["stStsgRmdrCs"] == null ? "" : "남쪽직진신호: " + data["data"][0]["stStsgRmdrCs"] + '<br />') +
    (data["data"][0]["stUtsgRmdrCs"] == null ? "" : "남쪽유턴신호: " + data["data"][0]["stUtsgRmdrCs"] + '<br />') +

    (data["data"][0]["wtLtsgRmdrCs"] == null ? "" : "서쪽좌회전신호: " + data["data"][0]["wtLtsgRmdrCs"] + '<br />') +
    (data["data"][0]["wtPdsgRmdrCs"] == null ? "" : "서쪽보행신호: " + data["data"][0]["wtPdsgRmdrCs"] + '<br />') +
    (data["data"][0]["wtStsgRmdrCs"] == null ? "" : "서쪽직진신호: " + data["data"][0]["wtStsgRmdrCs"] + '<br />') +
    (data["data"][0]["wtUtsgRmdrCs"] == null ? "" : "서쪽유턴신호: " + data["data"][0]["wtUtsgRmdrCs"] + '<br />') +
    "</p>" + '</div>' ;
    return coordHtml;
}

