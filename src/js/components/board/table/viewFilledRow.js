"use strict";

var React = require('react');

var ViewFilledRow =  React.createClass({
	render: function() {
		return (
			<tr>
				<td className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">{this.props.indexKey}</td>
				<td className="col-lg-4 col-md-3 col-sm-3 col-xs-3">{this.props.time}</td>
				<td className="col-lg-5 col-md-4 col-sm-4 col-xs-4">{this.props.title}</td>
				<td className="col-lg-2 col-md-3 col-sm-3 col-xs-3 use-center">
					<span className="use-center edit-icon">
						<span id="edit" className="glyphicon glyphicon-pencil" role="button"></span>
					</span>
					<span className="use-centerd delete-icon">
						<span className="glyphicon glyphicon-trash" role="button"></span>
					</span>
				</td>
			</tr>
		);
	}	
});

module.exports = ViewFilledRow;