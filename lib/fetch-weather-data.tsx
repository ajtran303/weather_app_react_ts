interface Coordinates {
  lat?: number;
  lon?: number;
}

interface WeatherData {
  success?: boolean;
  city?: string;
  description?: string;
  currentTemp?: number;
  feelsLike?: number;
  windSpeed?: number;
  icon?: string;
  error?: string;
}

const apiKey: string | undefined = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

function buildGeocodingUrl(city: string): string {
  const baseUrl = "http://api.openweathermap.org/geo/1.0/direct?"
  const queryParams = `q=${city}&limit=1&appid=${apiKey}`;
  return baseUrl + queryParams
}

function buildWeatherUrl(coordinates: Coordinates): string {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?" 
  const queryParams = `lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${apiKey}`;
  return baseUrl + queryParams
}

async function fetchWeatherData(city: string): Promise<WeatherData> {
  const geoCodingUrl: string = buildGeocodingUrl(city);

  try {
    const geoCodingReponse: Response = await fetch(geoCodingUrl);
    const [coordinates]: Coordinates[] = await geoCodingReponse.json();

    const weatherUrl: string = buildWeatherUrl(coordinates);
    const weatherResponse: Response = await fetch(weatherUrl);
    const weatherJson: any = await weatherResponse.json();

    return {
      success: true,
      city: weatherJson.name,
      description: weatherJson.weather[0].description,
      currentTemp: weatherJson.main.temp,
      feelsLike: weatherJson.main.feels_like,
      windSpeed: weatherJson.wind.speed,
      icon: weatherJson.weather[0].icon
    };
  } catch (err: unknown) {
    return {
      error: "Sorry, try again!"
    };
  }
}

export default fetchWeatherData