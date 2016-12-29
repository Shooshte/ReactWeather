let React = require('react');

require('style!css!sass!weatherTextStyles');

let WeatherText = (props) => {
  let day = props.day;

  const iconURL = 'http://openweathermap.org/img/w/';
  let actualIconURL = `${iconURL}${day.weather[0].icon}.png`

  let date = new Date(day.dt_txt);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if(hours < 10) {
    hours = '0' + hours;
  }

  if(minutes < 10) {
    minutes = '0' + minutes;
  }

  return (
      <div className="waForecast">
        <ul>
          <li className="waTime">{hours}:{minutes}</li>
          <li className="waForecastIcon"><img src={actualIconURL} /></li>
          <li>Temperature: {day.main.temp}°C</li>
          <li>Forecast: {day.weather[0].description}</li>
          <li>Wind speed: {day.wind.speed}</li>
        </ul>
      </div>
  );
}

module.exports = WeatherText;
