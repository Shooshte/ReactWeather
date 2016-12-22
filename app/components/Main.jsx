let React = require('react');
let Navigation = require('Navigation');

// App css
require('style!css!sass!applicationStyles');

let Main = (props) => {
  return (
      <div>
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
