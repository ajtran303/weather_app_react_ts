function Result(props: any): JSX.Element {
  const { weatherData } = props;

  let weatherIcon;

  if (weatherData?.icon) {
    weatherIcon = <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                       alt="Weather icon"
                       style={{ height: "2.5em", width: "2.5em" }} />
  }

  return (
    <div className="result">
      {weatherData?.error && <h2>{weatherData.error}</h2>}
      {
        weatherData?.success &&
        <>
          <h2>{weatherData.city} {weatherIcon}</h2>
          <p>Description: {weatherData.description} </p>
          <p>Current temp: {weatherData.currentTemp} degrees F</p>
          <p>Feels like: {weatherData.feelsLike} degrees F</p>
          <p>Wind Speed: {weatherData.windSpeed} mph</p>
        </>
        }
    </div>
  )
}

export default Result