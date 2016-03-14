"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var StartJumbotron = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Schedule Board</h1>
				<p>This is first React.js base prototype of our free tool schedule board for different organizations to plan loading per day/time, for instance swimming pool schedule</p>
				<p><Link 
					to="/board"
					className="btn btn-default btn-lg" 
					href="#" 
					role="button">Go to board...</Link></p>
			</div>
		);
	}	
});

module.exports = StartJumbotron;