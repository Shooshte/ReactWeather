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
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
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
