const apiKey = "c789a71ca0d18df0173bd072bcbbcffa";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// Lấy các element cần update
const cityEl = document.querySelector(".city");
const dateEl = document.querySelector(".date");
const tempEl = document.querySelector(".temp");
const iconEl = document.querySelector(".icon");

const tempMaxEl = document.getElementById("temp-max");
const tempMinEl = document.getElementById("temp-min");
const humidityEl = document.getElementById("humidity");
const cloudyEl = document.getElementById("cloudy");
const windEl = document.getElementById("wind");
const descriptionEl = document.getElementById("description");

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    console.log(data); // debug

    // Update UI
    cityEl.textContent = data.name;
    dateEl.textContent = new Date().toLocaleString();
    tempEl.textContent = Math.round(data.main.temp) + "°";
    iconEl.textContent = getWeatherIcon(data.weather[0].main);
    descriptionEl.textContent = data.weather[0].description;

    tempMaxEl.textContent = Math.round(data.main.temp_max) + "°";
    tempMinEl.textContent = Math.round(data.main.temp_min) + "°";
    humidityEl.textContent = data.main.humidity + "%";
    cloudyEl.textContent = data.clouds.all + "%";
    windEl.textContent = data.wind.speed + " km/h";
  } catch (error) {
    alert(error.message);
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) {
    getWeather(city);
    getForecast(city);
  }
});

function getWeatherIcon(condition) {
  switch (condition.toLowerCase()) {
    case "clouds":
      return "☁️";
    case "rain":
      return "🌧️";
    case "snow":
      return "🌨️";
    case "clear":
      return "☀️";
    case "thunderstorm":
      return "⛈️";
    default:
      return "🌡️";
  }
}

getWeather("London");
getForecast("London");

async function getForecast(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Forecast not found");
    const data = await res.json();

    console.log(data); // debug

    updateForecastUI(data);
  } catch (error) {
    console.error(error);
  }
}

function updateForecastUI(data) {
  const forecastEl = document.querySelector(".forecast");
  forecastEl.innerHTML = ""; // xoá cũ

  // lấy 3 record đầu tiên (3h, 6h, 9h tới)
  data.list.slice(0, 3).forEach((item) => {
    const time = new Date(item.dt * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const status = item.weather[0].main;
    const temp = Math.round(item.main.temp);

    const row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = `
      <span class="time">${time}</span>
      <span class="status">${status} ${getWeatherIcon(status)}</span>
      <span class="temp">${temp}°</span>
    `;
    forecastEl.appendChild(row);
  });
}
