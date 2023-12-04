import axios from "axios";

const API_KEY = import.meta.env.VITE_WHEATHER_KEY;
const BASE_KEY = import.meta.env.VITE_BASE_KEY;
//const BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";

export async function findCityInOpenWeather(cityName) {
  try {
    const response = await axios.get(`${BASE_KEY}?q=${cityName}&limit=1&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro na solicitação à API:", error);
    throw error;
  }
}

export async function getWheather(location) {
    const lat = location[0]
    const lon = location[1]
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro na solicitação à API:", error);
    throw error;
  }
}
