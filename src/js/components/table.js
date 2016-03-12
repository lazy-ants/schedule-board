"use strict";

var React = require('react');

module.exports =  React.createClass({
	render: function() {
		return (
			<table className="table table-hover table-condensed table-bordered">
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
				<tbody>

					<tr>
						<td className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">1</td>
						<td className="col-lg-4 col-md-3 col-sm-3 col-xs-3">some time</td>
						<td className="col-lg-5 col-md-4 col-sm-4 col-xs-4">some existing title</td>
						<td className="col-lg-2 col-md-3 col-sm-3 col-xs-3 use-center">
							<span className="use-center edit-icon">
								<span id="edit" className="glyphicon glyphicon-pencil" role="button"></span>
							</span>
							<span className="use-centerd delete-icon">
								<span className="glyphicon glyphicon-trash" role="button"></span>
							</span>
						</td>
					</tr>

					<tr>
						<td className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">2</td>
						<td className="col-lg-4 col-md-3 col-sm-3 col-xs-3">some time</td>
						<td className="col-lg-7 col-md-7 col-sm-7 col-xs-7" colSpan="2">-</td>
					</tr>

					<tr>
						<td className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">3</td>
						<td className="col-lg-4 col-md-3 col-sm-3 col-xs-3">some time</td>
						<td className="col-lg-5 col-md-4 col-sm-4 col-xs-4">
							<input className="form-control input-sm width-max" value="some editing title" />
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
				</tbody>
		</table>
		);
	}	
})