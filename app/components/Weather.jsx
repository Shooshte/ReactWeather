let React = require('react');
let CityForm = require('CityForm');
let WeatherText = require('WeatherText');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  handleSearch: function(location) {
    var that = this; // Get access to this inside callback
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(
        function(temp) { // Success callback
          that.setState({
            location: location,
            temp: temp,
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
  render: function() {
    let {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      // Check for is loading first for subsequent searches
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherText temp={temp} location={location}/>
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
            <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
        <div>
          <h1 className="text-center page-title">Get Temperature</h1>
          <CityForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
        </div>
    );
  }
});

module.exports = Weather;
