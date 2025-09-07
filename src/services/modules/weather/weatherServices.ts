import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f00c38e0279b7bc85480c3fe775d518c";

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
