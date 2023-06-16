import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

import fetchWeatherData from "../lib/fetch-weather-data";

import { BaseSyntheticEvent, useState } from "react";

function App(): JSX.Element {
  const [weatherData, setWeatherData] = useState({});

  function handleSubmit(event: BaseSyntheticEvent): void {
    event.preventDefault();

    const form: HTMLFormElement = event.target

    const city: string = form.city.value;
    
    async function processWeatherData(city: string): Promise<void> {
      const weatherData = await fetchWeatherData(city);
      setWeatherData(weatherData);
    }

    processWeatherData(city);
    
    form.reset();
  }

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit} />
      <Result weatherData={weatherData} />
    </>
  )
}

export default App
