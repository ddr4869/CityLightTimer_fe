var LATITUDE, LONGITUDE;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  // export {latitude, longitude};
  LATITUDE = crd.latitude;
  LONGITUDE = crd.longitude;
  return crd
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  LATITUDE = 37.5; 
  LONGITUDE = 127.05;
}

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
export {LATITUDE, LONGITUDE};
export default getLocation;
