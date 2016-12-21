let React = require('react');

let About = (props) => {
  return(
     <div>
       <h1 className="text-center">About</h1>
       <p>This simple app is a part of a Udemy course. It's made as a basic demonstration of how to use React.</p>
       <p>I am using Open Weather Map to search for weather data by city name.</p>
       <p>There is a github repo. If you're here you already know it.</p>
     </div>
  )
};

module.exports = About;
