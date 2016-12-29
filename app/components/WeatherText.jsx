let React = require('react');

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
        <ul className="waForecastList">
          <li className="waTime">{hours}:{minutes}, {day.weather[0].description}</li>
          <li className="waForecastIcon"><img src={actualIconURL} /></li>
          <li className="waTemp">{day.main.temp}°C</li>
        </ul>
      </div>
  );
}

module.exports = WeatherText;
