let React = require('react');
let Navigation = require('Navigation');

// App scss
require('style!css!sass!applicationStyles');

let Main = (props) => {
  return (
      <div className="waContainer">
        <Navigation/>
        <div>
          <div>
            {props.children}
          </div>
        </div>
      </div>
  );
}

module.exports = Main;
