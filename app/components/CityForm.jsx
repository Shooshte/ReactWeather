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
          <form onSubmit={this.onFromSubmit}>
            <input type="text" placeholder="New York" ref="location"/>
            <button className="button expanded hollow">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = CityForm;
