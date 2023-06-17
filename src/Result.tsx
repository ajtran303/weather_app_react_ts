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

  let weatherIcon;
  if (weatherData?.icon) {
    weatherIcon = <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                       alt="Weather icon"
                       style={iconStyle} />
  }

  return (
    <section className="weather-result">
      {weatherData?.error && <h2>{weatherData.error}</h2>}
      {
        weatherData?.success &&
        <>
          <h2 style={headingStyle}>{weatherData.city} {weatherIcon}</h2>
          <p>Description: {weatherData.description} </p>
          <p>Current temp: {weatherData.currentTemp} degrees F</p>
          <p>Feels like: {weatherData.feelsLike} degrees F</p>
          <p>Wind Speed: {weatherData.windSpeed} mph</p>
        </>
        }
    </section>
  )
}

export default Result