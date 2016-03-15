"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var CreateHistory = require('history/lib/createHashHistory');
var HashHistory = new CreateHistory({
	queryKey: false
});

var Main = require('./components/main.js');
var Board = require('./components/board.js');
var About = require('./components/about.js');

var Routes = React.createClass({
	render: function () {
		return (<Router history={HashHistory}>
		<Route path="/" component={Main}>
			<Route path="/board" component={Board} />
			<Route path="/about" component={About} />
		</Route>
	</Router>)
	}
});

module.exports = Routes;