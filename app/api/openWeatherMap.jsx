let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?uk&appid=3d30860d289d3895e4937158a354baf5&units=metric';

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( // Return the promise
      function(res) { // Success callback
        if (res.data.cod && res.data.message) { // Catch all errors from OpenweatherAPI
          throw new Error(res.data.message);
        } else {
          return {
            description: res.data.weather[0].description,
            id: res.data.weather[0].icon,
            temp: res.data.main.temp,
            pressure: res.data.main.pressure,
            humidity: res.data.main.humidity,
            wind: res.data.wind,
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset
          };
        }
      },
      function(err) { // Error callback
        throw new Error(err.response.data.message);
    });
  }
};
