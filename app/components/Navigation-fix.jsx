let React = require('react');
let {Link, IndexLink} = require('react-router');

require('style!css!sass!navigationStyles');

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
        <div className="waNavbar">
            <ul>
              <li className="waNavLi">
                <IndexLink to="/" activeClassName="waActive" className="waNavButton">
                  <i className="material-icons">explore</i><span>Forecast</span>
                </IndexLink>
              </li>
              <li className="waNavLi">
                <Link to="current" activeClassName="waActive">
                  <i className="material-icons">map</i><span>Current</span>
                </Link>
              </li>
              <li className="waNavLi">
                <Link to="about" activeClassName="waActive">
                  <i className="material-icons">info</i><span>About</span>
                </Link>
              </li>
            </ul>
        </div>
    );
  }
});

module.exports = Navigation;
