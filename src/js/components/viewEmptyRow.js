"use strict";

var React = require('react');

var ViewEmptyRow =  React.createClass({
	render: function() {
		return (
			<tr>
				<td className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">{this.props.indexKey}</td>
				<td className="col-lg-4 col-md-3 col-sm-3 col-xs-3">{this.props.time}</td>
				<td className="col-lg-7 col-md-7 col-sm-7 col-xs-7" colSpan="2">{this.props.title}</td>
			</tr>
		);
	}	
});

module.exports = ViewEmptyRow;