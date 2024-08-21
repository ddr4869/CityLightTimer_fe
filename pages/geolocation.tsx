var LATITUDE:number, LONGITUDE:number;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos:GeolocationPosition) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  // export {latitude, longitude};
  LATITUDE = crd.latitude;
  LONGITUDE = crd.longitude;
  return crd
}

function error(err:GeolocationPositionError) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  LATITUDE = 37.5; 
  LONGITUDE = 127.05;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
    return [LATITUDE, LONGITUDE];
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function getGangnamLocation() {
  LATITUDE = 37.4979;
  LONGITUDE = 127.0276;
  return [LATITUDE, LONGITUDE];
}

function getCityHallLocation() {
  LATITUDE = 37.5663;
  LONGITUDE = 126.9779;
  return [LATITUDE, LONGITUDE];
}

function getYeouidoLocation() {
  LATITUDE = 37.5235;
  LONGITUDE = 126.9233;
  return [LATITUDE, LONGITUDE];
}

function getSangamLocation() {
  LATITUDE = 37.5792;
  LONGITUDE = 126.8955;
  return [LATITUDE, LONGITUDE];
}

export {getGangnamLocation, getCityHallLocation, getYeouidoLocation, getSangamLocation, getLocation, LATITUDE, LONGITUDE};
// 0. 현위치 1. 강남 2. 시청 3. 여의도 4. 상암
