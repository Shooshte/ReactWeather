let React = require('react');

let CityForm = React.createClass({
  onFromSubmit: function(e) {
    e.preventDefault();
    let location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
        <div>
          <form onSubmit={this.onFromSubmit} className="waForm">
            <label htmlFor="location">City Name:</label>
            <input id="location" type="search" placeholder="New York" ref="location" autoComplete="off"/>
            <button className="button expanded hollow">GET WEATHER</button>
          </form>
        </div>
    );
  }
});

module.exports = CityForm;
