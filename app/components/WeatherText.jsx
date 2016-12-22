let React = require('react');

let WeatherText = ({temp, location, description, id}) => {
  return(
      <div>
        <h3 className="text-center">{description}<img src={id} /></h3>
        <h3 className="text-center">It is {temp}°C in {location}</h3>
      </div>
  );
}

module.exports = WeatherText;
