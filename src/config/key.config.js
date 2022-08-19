const apiKey = "XHchZNouh12PsAu30w9cNBSxKMlPAAkx";

function makeLocationUrl(latitude, longitude) {
  return `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}`;
}

function makeForecastsUrl(locationKey) {
  return `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&language=id&details=true`;
}
function makeForecastUrl(locationKey) {
  return `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}&language=id&details=true`;
}
export { makeLocationUrl, makeForecastUrl, makeForecastsUrl };
