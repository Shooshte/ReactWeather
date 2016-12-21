let React = require('react');
let CityForm = require('CityForm');
let WeatherText = require('WeatherText');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
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
        function(err) { // Error callback
          alert(err);
          that.setState({
            isLoading: false
          });
        }
    )
  },
  render: function() {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      // Check for is loading first for subsequent searches
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherText temp={temp} location={location}/>
      }
    }

    return (
        <div>
          <h1 className="text-center">Get Temperature</h1>
          <CityForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
    );
  }
});

module.exports = Weather;
