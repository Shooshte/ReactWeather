let React = require('react');
let {Link, IndexLink} = require('react-router');

let Navigation = (props) => {
  return(
    <div>
      <IndexLink to="/" activeClassName="active" activeStyle={{color: 'red'}} >Weather</IndexLink>
      <Link to="about" activeClassName="active" activeStyle={{color: 'red'}}>About</Link>
      <Link to="examples" activeClassName="active" activeStyle={{color: 'red'}}>Examples</Link>
    </div>
  );
}

module.exports = Navigation;
