let React = require('react');

require('style!css!sass!weatherTextStyles');

let WeatherText = (props) => {
  let day = props.day;

  const iconURL = 'http://openweathermap.org/img/w/';
  let actualIconURL = `${iconURL}${day.weather[0].icon}.png`

  return (
      <div className="waForecast">
        <ul>
          <li>{day.dt_txt}</li>
          <li className="waForecastIcon"><img src={actualIconURL} /></li>
          <li>Temperature: {day.main.temp}°C</li>
          <li>Forecast: {day.weather[0].description}</li>
          <li>Wind speed: {day.wind.speed}</li>
        </ul>
      </div>
  );
}

module.exports = WeatherText;
