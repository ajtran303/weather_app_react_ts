import { useState } from "react";
import fetchWeatherData from "../lib/fetch-weather-data";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event: Event): void {
    event.preventDefault();

    const city = event.target.city.value;
    
    async function processWeatherData(city: string): void {
      const weatherData = await fetchWeatherData(city);
      setWeatherData(weatherData);
    }

    processWeatherData(city);
    
    event.target.reset();
  }

  return (
    <>
      <h1>Hello, Everynyan!</h1>
    </>
    // <>
    //   <Header />
    //   <Form onSubmit={handleSubmit} />
    //   <Result weatherData={weatherData} />
    // </>
  )
}

export default App
