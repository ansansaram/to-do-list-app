const API_KEY = "6bc44aa17abc0e226536c1347a3d85a7"; // 내 API key

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json()) // url에 들어있는 자료를 json 형태로 받는다.
    .then((data) => {
      // json으로 받아온 자료를 data변수에 저장
      const weather = document.querySelector("#weather span:first-child"); // 만들어 놓은 첫번째 span을 선택한다.
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}, `;
      temp.innerText = `${data.main.temp}℃, `;
      city.innerText = `@${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
