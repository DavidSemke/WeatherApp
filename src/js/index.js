import "../css/style.css";
import { weatherData } from "./weatherData";
import { view } from "./view";

const controller = (() => {
  let apiData = null;
  const tempScaleButton = document.querySelector("#tempScaleButton");
  const searchForm = document.querySelector("#locationSearch form");
  const errorMsg = document.querySelector("#locationSearch .error");
  const locationError = "Location must be a city.";

  async function displayWeather(city = "Vancouver") {
    apiData = await handleFetch(city);

    if (!apiData) {
      return;
    }

    errorMsg.textContent = "";
    view.createView(apiData);
  }

  async function handleFetch(city) {
    let data = null;

    try {
      data = await weatherData.fetchWeatherData(city);
    } catch (error) {
      document.body.innerHTML = error.toString();
      return null;
    }

    if (data.error) {
      errorMsg.textContent = locationError;
      return null;
    }

    return data;
  }

  tempScaleButton.onclick = function () {
    view.changeTempScale(apiData);
  };

  searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const textInput = document.querySelector("#searchBar").value;
    const text = textInput.trim();

    if (!text) {
      return;
    }

    displayWeather(text);
  });

  return { displayWeather };
})();

controller.displayWeather();
