const API_KEY = '71790758eb9ebe1907d695ac3e395742';
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span');
      const city = document.querySelector('#weather div');
      const iconurl =
        'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      weather.innerHTML = `<img id="wicon" src="${iconurl}" alt="Weather icon"/>
       / ${Math.floor(data.main.temp - 273.15)} &deg`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't get current position");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
