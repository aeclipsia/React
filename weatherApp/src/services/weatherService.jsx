export async function fetchWeatherData(country = "Madrid") {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e4a507a080e34829a8e165547251502&q=${country}&days=6`
    );
    if (!response.ok) {
      throw new Error("Response invalid");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}
