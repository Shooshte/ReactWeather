let React = require('react');
let Navigation = require('Navigation');

let Main = (props) => {
  return (
      <div className="waContainer">
        <Navigation/>
        <div>
          <div className="waContentContainer">
            {props.children}
          </div>
        </div>
      </div>
  );
}

module.exports = Main;
