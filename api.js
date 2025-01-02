class WeatherAPI {
  constructor() {
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
    this.apiKey = "7684e8fb6d51bb05e6674f5c8d33b685";
  }

  async getWeatherInfo(cityName) {
    const response = await fetch(
      `${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`
    );
    const data = await response.json();
    return data;
  }
}
