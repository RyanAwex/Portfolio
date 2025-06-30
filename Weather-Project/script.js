import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

class WeatherApp {
  constructor() {
    this.setupDateDisplay();
    this.requestLocation();
  }

  setupDateDisplay() {
    const currentDateTime = dayjs().format("hh:mm A dddd");
    document.querySelector(".date").innerHTML = currentDateTime;
  }

  showLocationPermissionNeededAlert() {
    alert("Please allow location access or type your location manually.");
  }

  async processLocationAndWeather(locationPosition) {
    const { latitude, longitude } = locationPosition.coords;

    try {
      // Get city name
      const cityLookupApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
      const cityResponse = await fetch(cityLookupApiUrl);
      const cityData = await cityResponse.json();
      document.querySelector(".city").innerHTML = cityData.city;

      // Get weather data
      const weatherForecastApiUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
        `&current_weather=true` +
        `&hourly=relative_humidity_2m,apparent_temperature,uv_index,windgusts_10m` +
        `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
        `&timezone=auto`;

      const weatherResponse = await fetch(weatherForecastApiUrl);
      const fullWeatherDataSet = await weatherResponse.json();

      this.updateCurrentWeather(fullWeatherDataSet);
      this.displayDailyForecast(fullWeatherDataSet);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      this.showLocationPermissionNeededAlert();
    }
  }

  getWeatherIconFileName(weatherCode) {
    const currentHour = new Date().getHours();
    const isNightTime = currentHour >= 19 || currentHour < 6;

    const iconMapping = {
      day: {
        "0": "sunny.png", "1": "sunny.png", "2": "partly-cloudy.png", "3": "cloudy.png",
        "45": "cloudy.png", "48": "cloudy.png", "51": "rain.png", "53": "rain.png",
        "55": "rain.png", "56": "rain.png", "57": "rain.png", "61": "rain.png",
        "63": "rain.png", "65": "rain.png", "80": "rain.png", "81": "rain.png",
        "82": "rain.png", "71": "snow.png", "73": "snow.png", "75": "snow.png",
        "77": "snow.png", "85": "snow.png", "86": "snow.png", "95": "thunder.png",
        "96": "thunder.png", "99": "thunder.png",
      },
      night: {
        "0": "night.png", "1": "night.png", "51": "night-rain.png", "53": "night-rain.png",
        "55": "night-rain.png", "56": "night-rain.png", "57": "night-rain.png",
        "61": "night-rain.png", "63": "night-rain.png", "65": "night-rain.png",
        "80": "night-rain.png", "81": "night-rain.png", "82": "night-rain.png",
      },
    };
    return (
      (isNightTime ? iconMapping.night[weatherCode] : iconMapping.day[weatherCode]) ||
      (isNightTime ? "night.png" : "cloudy.png")
    );
  }

  getWeatherCodeDescription(weatherCode) {
    const descriptions = {
      0: "Clear", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
      45: "Fog", 48: "Rime fog", 51: "Light drizzle", 53: "Moderate drizzle",
      55: "Dense drizzle", 56: "Light freezing drizzle", 57: "Dense freezing drizzle",
      61: "Slight rain", 63: "Moderate rain", 65: "Heavy rain",
      66: "Light freezing rain", 67: "Heavy freezing rain", 71: "Slight snow",
      73: "Moderate snow", 75: "Heavy snow", 77: "Snow grains",
      80: "Slight rain showers", 81: "Moderate rain showers", 82: "Violent rain showers",
      85: "Slight snow showers", 86: "Heavy snow showers", 95: "Thunderstorm",
      96: "Thunderstorm + hail", 99: "Thunderstorm + heavy hail",
    };
    return descriptions[weatherCode] || "Unknown";
  }

  getUvIndexLevelText(uvIndexValue) {
    if (uvIndexValue < 3) return "Low";
    if (uvIndexValue < 6) return "Moderate";
    if (uvIndexValue < 8) return "High";
    if (uvIndexValue < 11) return "Very High";
    return "Extreme";
  }

  updateCurrentWeather(fullWeatherDataSet) {
    const currentMainWeather = fullWeatherDataSet.current_weather;

    let closestHourlyDataIndex = 0;
    let minimumTimeDifference = Infinity;
    const currentWeatherTimeInMs = new Date(currentMainWeather.time).getTime();

    fullWeatherDataSet.hourly.time.forEach((hourlyTime, index) => {
      const hourlyTimeInMs = new Date(hourlyTime).getTime();
      const timeDifference = Math.abs(hourlyTimeInMs - currentWeatherTimeInMs);
      if (timeDifference < minimumTimeDifference) {
        minimumTimeDifference = timeDifference;
        closestHourlyDataIndex = index;
      }
    });

    document.querySelector(".degree").innerHTML = `${currentMainWeather.temperature}°C`;
    document.querySelector(".condition").innerHTML = this.getWeatherCodeDescription(currentMainWeather.weathercode);
    document.querySelector(".humidity").innerHTML = `${fullWeatherDataSet.hourly.relative_humidity_2m[closestHourlyDataIndex]}%`;
    document.querySelector(".feels-like").innerHTML = `${fullWeatherDataSet.hourly.apparent_temperature[closestHourlyDataIndex]}°C`;
    document.querySelector(".uv-index").innerHTML = this.getUvIndexLevelText(
      fullWeatherDataSet.hourly.uv_index[closestHourlyDataIndex]
    );
    document.querySelector(".wind-gusts").innerHTML = `${fullWeatherDataSet.hourly.windgusts_10m[closestHourlyDataIndex]}`;

    const mainWeatherImageElement = document.querySelector(".main-box-img");
    mainWeatherImageElement.src = `images/${this.getWeatherIconFileName(currentMainWeather.weathercode)}`;
    mainWeatherImageElement.alt = this.getWeatherCodeDescription(currentMainWeather.weathercode);
  }

  displayDailyForecast(fullWeatherDataSet) {
    const dailyForecastContainer = document.querySelector(".day-box-container");
    dailyForecastContainer.innerHTML = "";

    for (let i = 1; i <= 4; i++) {
      const dayOfWeekName = new Date(fullWeatherDataSet.daily.time[i]).toLocaleDateString(
        "en-US",
        { weekday: "long" }
      );
      const maximumDailyTemperature = Math.round(fullWeatherDataSet.daily.temperature_2m_max[i]);
      const minimumDailyTemperature = Math.round(fullWeatherDataSet.daily.temperature_2m_min[i]);
      const dailyWeatherCode = fullWeatherDataSet.daily.weathercode[i];
      const dailyIconFileName = this.getWeatherIconFileName(dailyWeatherCode);

      const singleDayForecastBox = document.createElement("div");
      singleDayForecastBox.className = "days-box";
      singleDayForecastBox.innerHTML = `
        <p>${dayOfWeekName}</p>
        <img src="images/${dailyIconFileName}" alt="weather-img" />
        <h2>${maximumDailyTemperature}° / ${minimumDailyTemperature}°</h2>
      `;
      dailyForecastContainer.appendChild(singleDayForecastBox);
    }
  }

  handleLocationRetrievalError(errorDetails) {
    console.error("Error getting location:", errorDetails);
    this.showLocationPermissionNeededAlert();
  }

  requestLocation() {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((locationPermissionStatus) => {
        if (locationPermissionStatus.state === "granted" || locationPermissionStatus.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            this.processLocationAndWeather.bind(this),
            this.handleLocationRetrievalError.bind(this)
          );
        } else if (locationPermissionStatus.state === "denied") {
          this.showLocationPermissionNeededAlert();
        }

        locationPermissionStatus.onchange = () => {
          if (locationPermissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(
              this.processLocationAndWeather.bind(this),
              this.handleLocationRetrievalError.bind(this)
            );
          }
        };
      })
      .catch(() => {
        // Fallback for browsers not supporting permissions API
        navigator.geolocation.getCurrentPosition(
          this.processLocationAndWeather.bind(this),
          this.handleLocationRetrievalError.bind(this)
        );
      });
  }
}

new WeatherApp();
