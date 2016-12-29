let React = require('react');

let About = (props) => {
  return(
     <div className="waCard">
       <h1 className="waHeader">React Weather App</h1>
       <h2 className="waSubheader">Created by: <a href="https://github.com/Shooshte" target="_blank">Miha Sustersic</a></h2>
       <p className="waBodyText">
          This is a simple weather forecast app, using <a href="https://openweathermap.org/api" target="_black">OpenWeatherMap</a> data.
       </p>
       <p className="waBodyText">The app is made using <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> and
         <a href="https://facebook.github.io/react/" target="_blank"> ReactJS</a>. I tried to follow the <a href="https://material.io/guidelines/" target="_blank">Google material design</a> guidelines. Feel free to point out any flaws, best practices etc.</p>
       <p className="waBodyText">If interested, click <a href="https://github.com/Shooshte/ReactWeather" target="_blank">here</a> to look at the source code.</p>
     </div>
  )
};

module.exports = About;
