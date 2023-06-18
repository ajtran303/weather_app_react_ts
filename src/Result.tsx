function Result(props: any): JSX.Element {
  const { weatherData } = props;

  const headingStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "2em"
  }

  const iconStyle = {
    height: "2.5em",
    width: "2.5em"
  }

  let weatherIcon, weatherResults;
  if (weatherData?.success) {
    weatherIcon = <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                       alt="Weather icon"
                       style={iconStyle} />

    weatherResults = <>
                       <h2 style={headingStyle}>{weatherData.city} {weatherIcon}</h2>
                       <p>Description: {weatherData.description}</p>
                       <p>Current temp: {weatherData.currentTemp}°F</p>
                       <p>Feels like: {weatherData.feelsLike}°F</p>
                       <p>Wind Speed: {weatherData.windSpeed}mph</p>
                     </>
  }

  return (
    <section className="weather-result">
      {weatherData?.error && <h2 style={headingStyle}>{weatherData.error}</h2>}
      {weatherData?.success && weatherResults}
    </section>
  )
}

export default Result
