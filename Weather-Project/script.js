import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const liveDate = dayjs().format("hh:mm A dddd");
document.querySelector(".date").innerHTML = liveDate;

function showManualLocationInput() {
  alert("Please enable location services or enter your location manually.");
  // You can expand this to show a form/input for manual city entry
}

function successCallback(position) {
  (async () => {
    const { latitude, longitude } = position.coords;

    // Get city name
    const cityResponse = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const cityData = await cityResponse.json();
    document.querySelector(".city").innerHTML = cityData.city;

    // Get weather data (current + hourly + daily)
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
        `&current_weather=true` +
        `&hourly=relative_humidity_2m,apparent_temperature,uv_index,windgusts_10m` +
        `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
        `&timezone=auto`
    );
    const weatherData = await weatherResponse.json();
    const weather = weatherData.current_weather;

    // Find closest hourly index to current weather time
    const currentTimeMs = new Date(weather.time).getTime();
    let timeIndex = 0;
    let smallestDiff = Infinity;
    weatherData.hourly.time.forEach((t, i) => {
      const tMs = new Date(t).getTime();
      const diff = Math.abs(tMs - currentTimeMs);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        timeIndex = i;
      }
    });

    // Icon mapping function and weatherCodeText remain the same here...
    function getIconByCode(code) {
      code = String(code);
      const hour = new Date().getHours();
      const isNight = hour >= 19 || hour < 6; // 7pm-6am night

      if (isNight) {
        if (["0", "1"].includes(code)) return "night.png";
        if (
          [
            "51",
            "53",
            "55",
            "61",
            "63",
            "65",
            "80",
            "81",
            "82",
            "56",
            "57",
          ].includes(code)
        )
          return "night-rain.png";
        return "night.png"; // fallback night icon
      } else {
        if (["0", "1"].includes(code)) return "sunny.png";
        if (code === "2") return "partly-cloudy.png";
        if (["3", "45", "48"].includes(code)) return "cloudy.png";
        if (
          [
            "51",
            "53",
            "55",
            "61",
            "63",
            "65",
            "80",
            "81",
            "82",
            "56",
            "57",
          ].includes(code)
        )
          return "rain.png";
        if (["71", "73", "75", "77", "85", "86"].includes(code))
          return "snow.png";
        if (["95", "96", "99"].includes(code)) return "thunder.png";
        return "cloudy.png"; // fallback day icon
      }
    }

    const weatherCodeText = {
      0: "Clear",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      56: "Light freezing drizzle",
      57: "Dense freezing drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      66: "Light freezing rain",
      67: "Heavy freezing rain",
      71: "Slight snow",
      73: "Moderate snow",
      75: "Heavy snow",
      77: "Snow grains",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      85: "Slight snow showers",
      86: "Heavy snow showers",
      95: "Thunderstorm",
      96: "Thunderstorm + hail",
      99: "Thunderstorm + heavy hail",
    };

    function uvIndexLevel(uv) {
      if (uv < 3) return "Low";
      if (uv < 6) return "Moderate";
      if (uv < 8) return "High";
      if (uv < 11) return "Very High";
      return "Extreme";
    }

    // Update elements
    const degreeEl = document.querySelector(".degree");
    const conditionEl = document.querySelector(".condition");
    const humidityEl = document.querySelector(".humidity");
    const feelsLikeEl = document.querySelector(".feels-like");
    const uvIndexEl = document.querySelector(".uv-index");
    const windGustsEl = document.querySelector(".wind-gusts");

    if (degreeEl) degreeEl.innerHTML = `${weather.temperature}°C`;
    if (conditionEl)
      conditionEl.innerHTML = weatherCodeText[weather.weathercode] || "Unknown";
    if (humidityEl)
      humidityEl.innerHTML = `${weatherData.hourly.relative_humidity_2m[timeIndex]}%`;
    if (feelsLikeEl)
      feelsLikeEl.innerHTML = `${weatherData.hourly.apparent_temperature[timeIndex]}°C`;
    if (uvIndexEl)
      uvIndexEl.innerHTML = uvIndexLevel(
        weatherData.hourly.uv_index[timeIndex]
      );
    if (windGustsEl)
      windGustsEl.innerHTML = `${weatherData.hourly.windgusts_10m[timeIndex]}`;

    // Forecast
    const container = document.querySelector(".day-box-container");
    container.innerHTML = "";
    for (let i = 1; i <= 4; i++) {
      const dayName = new Date(weatherData.daily.time[i]).toLocaleDateString(
        "en-US",
        { weekday: "long" }
      );
      const maxTemp = Math.round(weatherData.daily.temperature_2m_max[i]);
      const minTemp = Math.round(weatherData.daily.temperature_2m_min[i]);
      const code = weatherData.daily.weathercode[i];
      const iconFile = getIconByCode(code);

      const dayBox = document.createElement("div");
      dayBox.className = "days-box";
      dayBox.innerHTML = `
        <p>${dayName}</p>
        <img src="images/${iconFile}" alt="weather-img" />
        <h2>${maxTemp}° / ${minTemp}°</h2>
      `;
      container.appendChild(dayBox);
    }

    const mainImgEl = document.querySelector(".main-box-img");
    if (mainImgEl) {
      mainImgEl.src = `images/${getIconByCode(weather.weathercode)}`;
      mainImgEl.alt = weatherCodeText[weather.weathercode] || "Weather icon";
    }
  })();
}

function errorCallback(error) {
  console.error("Location access denied or unavailable", error);
  showManualLocationInput();
}

navigator.permissions
  .query({ name: "geolocation" })
  .then((result) => {
    if (result.state === "granted") {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else if (result.state === "prompt") {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else if (result.state === "denied") {
      showManualLocationInput();
    }

    result.onchange = () => {
      if (result.state === "granted") {
        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      }
    };
  })
  .catch(() => {
    // If permissions API not supported, fallback to normal getCurrentPosition
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });
