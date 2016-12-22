let React = require('react');
let ReactDOM = require('react-dom');
// var Route = require('react-router').Route;
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let Weather = require('Weather');
let About = require('About');
let Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');

// App css
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Weather}/>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
      </Route>
    </Router> ,
    document.getElementById('app')
);
