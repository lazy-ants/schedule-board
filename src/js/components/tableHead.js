"use strict";

var React = require('react');

var TableHead =  React.createClass({
	render: function() {
		return (
			<thead>
				<tr>
					<th className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">
						<span className="glyphicon glyphicon glyphicon-triangle-bottom"></span> №
					</th>
					<th className="col-lg-4 col-md-3 col-sm-3 col-xs-3">
						<span className="glyphicon glyphicon glyphicon-triangle-bottom"></span> Time
					</th>
					<th className="col-lg-5 col-md-4 col-sm-4 col-xs-4">
						<span className="glyphicon glyphicon glyphicon-triangle-bottom"></span> Title
					</th>
					<th className="col-lg-2 col-md-3 col-sm-3 col-xs-3 use-center">
						<span className="glyphicon glyphicon glyphicon-triangle-bottom"></span> Actions
					</th>
				</tr>
			</thead>
		);
	}	
});

module.exports = TableHead;