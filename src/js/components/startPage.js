"use strict";

var React = require('react');
var Jumbotron = require('./startJumbotron.js');

module.exports =  React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
					<Jumbotron />
				</div>
			</div>
		);
	}	
})

