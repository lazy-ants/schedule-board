"use strict";

var React = require('react');

var EditingRow =  React.createClass({
	render: function() {
		return (
			<tr>
				<td className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">3</td>
				<td className="col-lg-4 col-md-3 col-sm-3 col-xs-3">some time</td>
				<td className="col-lg-5 col-md-4 col-sm-4 col-xs-4">
					<input className="form-control input-sm width-max" defaultValue="some editing title" />
				</td>
				<td className="col-lg-2 col-md-3 col-sm-3 col-xs-3 use-center">
					<span className="use-center save-icon">
						<span className="glyphicon glyphicon-ok" role="button"></span>
					</span>
					<span className="use-centerd cancel-icon">
						<span className="glyphicon glyphicon-remove" role="button"></span>
					</span>
				</td>
			</tr>
		);
	}	
});

module.exports = EditingRow;