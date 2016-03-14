"use strict";

var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect=require("react-redux").connect;
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
var Actions = require('./actions/actions.js');

var Routes = React.createClass({
	render: function () {
		var dispatch = this.props.dispatch;
		var state = this.props.state;
		var actions = bindActionCreators(Actions, dispatch);

		var BoardWrapper = React.createClass({
		  render: function () {
			return (
				<Board state={state} actions={actions} />
			);
		  }
		});

		return (<Router history={HashHistory}>
		<Route path="/" component={Main}>
			<Route path="/board" component={BoardWrapper} />
			<Route path="/about" component={About} />
		</Route>
	</Router>)
	}
});

function mapStateToProps(state) {
	return {
		state: state
	};
}

module.exports = connect(mapStateToProps)(Routes);