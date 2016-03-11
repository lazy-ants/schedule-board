var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var CreateHistory = require('history/lib/createHashHistory');
var HashHistory = new CreateHistory({
	queryKey: false
});

var Main = require('./components/main.js');
var Schedule = require('./components/shedule.js');

module.exports = React.createClass({
	render: function () {
		return (<Router history={HashHistory}>
		<Route path="/" component={Main}>
			<Route path="schedule/:id" component={Schedule} />
		</Route>
	</Router>)
	}
});