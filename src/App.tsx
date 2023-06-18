import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

import { fetchWeatherData, WeatherData } from "../lib/fetch-weather-data";

import { BaseSyntheticEvent, useState } from "react";

function App(): JSX.Element {
  const [weatherData, setWeatherData] = useState({});

  async function handleSubmit(event: BaseSyntheticEvent): Promise<void> {
    event.preventDefault();

    const form: HTMLFormElement = event.target;
    const city: string = form.city.value;
    
    const weatherData: WeatherData = await fetchWeatherData(city);
    setWeatherData(weatherData);

    form.reset();
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  return (
    <>
      <Header />
      <main style={containerStyle as React.CSSProperties}>
        <Form onSubmit={handleSubmit} />
        <Result weatherData={weatherData} />
      </main>
    </>
  )
}

export default App
