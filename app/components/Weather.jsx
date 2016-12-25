let React = require('react');
let CityForm = require('CityForm');
let WeatherText = require('WeatherText');
let openWeatherMap = require('openWeatherMap');

require('style!css!sass!weatherStyles');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  handleSearch: function(location) {
    var that = this; // Get access to this inside callback
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      forecast: undefined
    });
    openWeatherMap.getData(location).then(
        function(data) { // Success callback
          that.setState({
            location: location,
            forecast: data,
            isLoading: false
          })
        },
        function(e) { // Error callback
          that.setState({
            isLoading: false,
            errorMessage: e.message
          });
        }
    )
  },
  componentDidMount: function() {
    // Get the query from the request
    let location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      // Remove the query from the URL
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    let location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      // Remove the query from the URL
      window.location.hash = '#/';
    }
  },
  render: function() {
    let {isLoading, location, errorMessage, forecast} = this.state;

    function renderForecast() {
      // Check for is loading first for subsequent searches
      if(isLoading) {
        return <h3 className="waAlert">Fetching weather...</h3>;
      } else if (forecast && location) {
        return forecast.map((day) => {
          let dateObject = new Date(Date.parse(day.dt_txt));
          let readableDate = dateObject.toDateString();
          return (
              <div key={day.dt} className="waDay">
                <ul>
                  <li className="waDate">{readableDate}</li>
                  <li>Temperature: {day.main.temp}°C</li>
                  <li>Forecast: {day.weather[0].description}</li>
                  <li>Wind speed: {day.wind.speed}</li>
                </ul>
              </div>
          )
        });
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        alert(errorMessage);
      }
    }

    // TODO error display
    return (
        <div>
          <div className="waCard">
            <div className="waCardContent">
              <h1 className="waHeader">Get Weather Info</h1>
              <CityForm onSearch={this.handleSearch}/>
            </div>
          </div>
          <div className="waCard">
            {renderForecast()}
          </div>
          {renderError()}
        </div>
    );
  }
});

module.exports = Weather;
