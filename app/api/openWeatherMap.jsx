let axios = require('axios');
let _ = require('underscore');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=3d30860d289d3895e4937158a354baf5&units=metric&cnt=23';

module.exports = {
  getData: function(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( // Return the promise
      function(res) { // Success callback
        if (res.data.cod !== '200' && res.data.message) { // Catch all errors from OpenweatherAPI
          throw new Error(res.data.message);
        } else {

          // Filter forecast by date
          let dates = res.data.list.map((forecast) => {
            return ({
              date: new Date(forecast.dt * 1000).toLocaleDateString(),
              forecast: []
            });
          });
          dates = _.uniq(dates, (x) => {
            return x.date;
          });
          res.data.list.map((forecast) => {
            let thisDate = new Date(forecast.dt * 1000).toLocaleDateString();
            dates.map((x) => {
              if(x.date == thisDate) {
                x.forecast.push(forecast);
              }
            });
          });
          return dates;

        }
      },
      function(err) { // Error callback
        throw new Error(err.response.data.message);
    });
  }
};
