const searchInput = document.querySelector("#searchInput");
const cityNameEl = document.querySelector(".cityName");
const degreeEl = document.querySelector(".degree");
const descEl = document.querySelector(".desc");

searchInput.addEventListener("keypress", findWeatherInfo);

const weatherApi = new WeatherAPI();

function findWeatherInfo(e) {
  if (e.keyCode == 13) {
    const cityName = searchInput.value.trim();
    weatherApi
      .getWeatherInfo(cityName)
      .then((data) => {
        if (data.message == "city not found") {
          alert("Şehir Bulunamadı");
        } else {
          display(data);
        }
      })
      .catch((err) => console.log(err));
  }
}

function display(data) {
  cityNameEl.textContent = data.name;
  degreeEl.textContent = Math.round(data.main.temp) + "°";
  descEl.textContent = data.weather[0].description;
  clearInput();
}

function clearInput() {
  searchInput.value = "";
}
