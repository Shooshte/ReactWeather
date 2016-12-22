let React = require('react');
let {Link, IndexLink} = require('react-router');

let Navigation = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    let location = this.refs.location.value;
    let encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function() {
    return(
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">ReactWeather</li>
              <li><IndexLink to="/" activeClassName="active" >Weather</IndexLink></li>
              <li><Link to="about" activeClassName="active">About</Link></li>
              <li><Link to="examples" activeClassName="active">Examples</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="New York" ref="location"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get weather"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
    );
  }
})

module.exports = Navigation;
