const weatherData = (() => {
  const baseURL = "https://api.weatherapi.com/v1";
  const apiKey = "66c6fe9e07f9453e94415209232309";

  async function fetchWeatherData(city) {
    const response = await fetch(
      `${baseURL}/forecast.json?key=${apiKey}&days=7&q=${city}`,
      { mode: "cors" },
    );

    return await response.json();
  }

  return { fetchWeatherData };
})();

export { weatherData };
