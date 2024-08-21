interface LightData {
  etLtsgRmdrCs: number;
  etPdsgRmdrCs: number;
  etStsgRmdrCs: number;
  etUtsgRmdrCs: number;
  ntLtsgRmdrCs: number;
  ntPdsgRmdrCs: number;
  ntStsgRmdrCs: number;
  ntUtsgRmdrCs: number;
  stLtsgRmdrCs: number;
  stPdsgRmdrCs: number;
  stStsgRmdrCs: number;
  stUtsgRmdrCs: number;
  wtLtsgRmdrCs: number;
  wtPdsgRmdrCs: number;
  wtStsgRmdrCs: number;
  wtUtsgRmdrCs: number;
}

interface LightInformationData {
  data: LightData[];
}

class Light_information {
  동쪽좌회전신호: number;
  동쪽보행신호: number;
  동쪽직진신호: number;
  동쪽유턴신호: number;

  북쪽좌회전신호: number;
  북쪽보행신호: number;
  북쪽직진신호: number;
  북쪽유턴신호: number;

  남쪽좌회전신호: number;
  남쪽보행신호: number;
  남쪽직진신호: number;
  남쪽유턴신호: number;

  서쪽좌회전신호: number;
  서쪽보행신호: number;
  서쪽직진신호: number;
  서쪽유턴신호: number;

  constructor(datas: LightInformationData) {
    const data = datas.data[0];
    console.log("동쪽좌회전신호: ", data.etLtsgRmdrCs);
    this.동쪽좌회전신호 = data.etLtsgRmdrCs;
    this.동쪽보행신호 = data.etPdsgRmdrCs;
    this.동쪽직진신호 = data.etStsgRmdrCs;
    this.동쪽유턴신호 = data.etUtsgRmdrCs;

    this.북쪽좌회전신호 = data.ntLtsgRmdrCs;
    this.북쪽보행신호 = data.ntPdsgRmdrCs;
    this.북쪽직진신호 = data.ntStsgRmdrCs;
    this.북쪽유턴신호 = data.ntUtsgRmdrCs;

    this.남쪽좌회전신호 = data.stLtsgRmdrCs;
    this.남쪽보행신호 = data.stPdsgRmdrCs;
    this.남쪽직진신호 = data.stStsgRmdrCs;
    this.남쪽유턴신호 = data.stUtsgRmdrCs;

    this.서쪽좌회전신호 = data.wtLtsgRmdrCs;
    this.서쪽보행신호 = data.wtPdsgRmdrCs;
    this.서쪽직진신호 = data.wtStsgRmdrCs;
    this.서쪽유턴신호 = data.wtUtsgRmdrCs;
  }
}

function Light_information_timer(data: LightInformationData): Light_information {
  // create Light_information object
  return new Light_information(data);
}

export { Light_information, Light_information_timer };
