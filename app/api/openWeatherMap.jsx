let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=3d30860d289d3895e4937158a354baf5&units=metric&cnt=12';

module.exports = {
  getData: function(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( // Return the promise
      function(res) { // Success callback
        if (res.data.cod !== '200' && res.data.message) { // Catch all errors from OpenweatherAPI
          throw new Error(res.data.message);
        } else {

          let newList = [];
          // return res.data.list;
          for(let x = 0; x < 6; x += 2) {
            newList.push(res.data.list[x])
          }
          return newList;

        }
      },
      function(err) { // Error callback
        throw new Error(err.response.data.message);
    });
  }
};
