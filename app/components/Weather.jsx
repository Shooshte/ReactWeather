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

    function renderWholeForecast() {
      // Check for is loading first for subsequent searches
      if(isLoading) {
        return <h3 className="waLoading">Fetching forecast...</h3>;
      } else if (forecast && location) {

        // return forecast.map((day) => {
        //   return (
        //      <WeatherText day={day} key={day.dt}/>
        //   )
        // });

        return forecast.map((day) => {
          return (
              <div className="waDay" key={day.date}>
                <p className="waDate">{day.date}</p>
                {renderForecast(day)}
              </div>
          )
        });


      }
    }
    function renderForecast(day) {
      return day.forecast.map((weatherForecast) => {
        return <WeatherText day={weatherForecast} key={weatherForecast.dt}/>;
      })
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
            {renderWholeForecast()}
          </div>
          {renderError()}
        </div>
    );
  }
});

module.exports = Weather;
