const view = (() => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // c for celsius, f for fahrenheit
  const tempScales = ["c", "f"];
  let tempScaleIndex = 0;

  function importAll(rContext) {
    const images = {};
    rContext.keys().forEach((item) => {
      images[item.replace("./", "")] = rContext(item);
    });
    return images;
  }

  const images = importAll(require.context("../images", true, /\.(png|jpg)$/));

  function changeTempScale(weatherData) {
    const button = document.querySelector("#tempScaleButton");
    button.textContent =
      "Display \u00B0" + `${tempScales[tempScaleIndex].toUpperCase()}`;

    tempScaleIndex = tempScaleIndex ? 0 : 1;
    createView(weatherData);
  }

  function createView(weatherData) {
    setBackground(weatherData);
    topView(weatherData);
    bottomView(weatherData.forecast);
  }

  function setBackground(weatherData) {
    if (weatherData.current.is_day) {
      return;
    }

    document.body.style.backgroundImage = `url(${images["backgrounds/night.jpg"]})`;
  }

  function topView(weatherData) {
    const city = weatherData.location.name;
    const country = weatherData.location.country;
    const location = `${city}, ${country}`;

    const localTime = weatherData.location.localtime;
    const timeSplit = localTime.split(" ");
    const date = new Date(`${timeSplit[0]}T${timeSplit[1]}`);
    const weekDay = weekdays[date.getDay()];

    const condition = weatherData.current.condition.text;

    const tempScale = tempScales[tempScaleIndex];
    const temp = weatherData.current[`temp_${tempScale}`];
    const tempText = `${temp} \u00B0${tempScale.toUpperCase()}`;
    const icon = weatherData.current.condition.icon;

    weatherSummary(location, weekDay, localTime, condition, tempText, icon);

    const feelsTemp = weatherData.current[`feelslike_${tempScale}`];
    const feelsText = `${feelsTemp} \u00B0${tempScale.toUpperCase()}`;

    const rainChance =
      weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
    const rainText = `${rainChance} %`;

    const humidity = weatherData.current.humidity;
    const humidityText = `${humidity} %`;

    const wind = weatherData.current.wind_kph;
    const windText = `${wind} kph`;

    weatherStats(feelsText, rainText, humidityText, windText);
  }

  function weatherSummary(location, weekDay, time, condition, temp, icon) {
    const header = document.querySelector("#location");
    header.textContent = location;

    const dateItem = document.querySelector("#date");
    dateItem.textContent = weekDay;

    const timeItem = document.querySelector("#time");
    timeItem.textContent = time;

    const img = document.querySelector("#summary .iconLarge");
    img.src = icon;

    const conditionItem = document.querySelector("#condition");
    conditionItem.textContent = condition;

    const tempItem = document.querySelector("#temp");
    tempItem.textContent = temp;

    const button = document.querySelector("#tempScaleButton");
    const newScaleIndex = tempScaleIndex ? 0 : 1;
    const tempScale = tempScales[newScaleIndex];

    button.textContent = `Display \u00B0${tempScale.toUpperCase()}`;
  }

  function weatherStats(feelsLikeTemp, rainChance, humidity, wind) {
    const tempItem = document.querySelector("#feelsLikeTemp");
    tempItem.textContent = feelsLikeTemp;

    const rainItem = document.querySelector("#rainChance");
    rainItem.textContent = rainChance;

    const humidityItem = document.querySelector("#humidity");
    humidityItem.textContent = humidity;

    const windItem = document.querySelector("#wind");
    windItem.textContent = wind;

    const statImages = document.querySelectorAll("#weatherStats img");
    const icons = [
      images["icons/thermometerIcon.png"],
      images["icons/cloudIcon.png"],
      images["icons/waterIcon.png"],
      images["icons/windIcon.png"],
    ];

    for (let i = 0; i < statImages.length; i++) {
      const img = statImages[i];
      img.src = icons[i];
    }
  }

  function bottomView(forecastData) {
    const bottomView = document.querySelector("#bottomView");
    bottomView.innerHTML = "";
    const ul = document.createElement("ul");

    for (let i = 0; i < 7; i++) {
      const forecastDay = forecastData.forecastday[i];

      const date = new Date(`${forecastDay.date}`);
      const day = weekdays[date.getUTCDay()];

      const minTemp = forecastDay.day[`mintemp_${tempScales[tempScaleIndex]}`];
      const maxTemp = forecastDay.day[`maxtemp_${tempScales[tempScaleIndex]}`];

      const icon = forecastDay.day.condition.icon;

      const itemView = forecastDayView(day, minTemp, maxTemp, icon);

      ul.appendChild(itemView);
    }

    bottomView.appendChild(ul);
  }

  function forecastDayView(weekDay, minTemp, maxTemp, icon) {
    const li = document.createElement("li");

    const header = document.createElement("h2");
    header.textContent = weekDay;

    const img = document.createElement("img");
    img.classList.add("iconMedium");
    img.src = icon;

    const minMaxTempDiv = document.createElement("div");
    minMaxTempDiv.classList.add("maxMinDiv");

    const minTempDiv = document.createElement("div");
    minTempDiv.textContent =
      `${minTemp} \u00B0` + `${tempScales[tempScaleIndex].toUpperCase()}`;

    const maxTempDiv = document.createElement("div");
    maxTempDiv.classList.add("mediumText");
    maxTempDiv.textContent =
      `${maxTemp} \u00B0` + `${tempScales[tempScaleIndex].toUpperCase()}`;

    for (const el of [maxTempDiv, minTempDiv]) {
      minMaxTempDiv.appendChild(el);
    }

    for (const el of [header, img, minMaxTempDiv]) {
      li.appendChild(el);
    }

    return li;
  }

  return { changeTempScale, createView };
})();

export { view };
