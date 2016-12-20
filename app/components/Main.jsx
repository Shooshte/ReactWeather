let React = require('react');
let Navigation = require('Navigation');

let Main = (props) => {
  return (
      <div>
        <Navigation/>
        {props.children}
      </div>
  )
}

module.exports = Main;
