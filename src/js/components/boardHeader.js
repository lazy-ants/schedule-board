"use strict";

var React = require('react');

module.exports =  React.createClass({
	render: function() {
		return (
			<div className="page-header custom-page-header">
				<h1>Schedule Board<br /><small>{this.props.chosenDate}</small></h1>
			</div>
		);
	}	
})