"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports =  React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default header">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						Schedule Board
					</Link>
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/board">Board</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
})