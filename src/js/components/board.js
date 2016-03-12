"use strict";

var React = require('react');
var BoardHeader = require('./boardHeader.js');
var AddRecordForm = require('./addRecordForm.js');
var Calendar = require('./calendar.js');
var Table = require('./table.js');

module.exports =  React.createClass({
	getInitialState: function () {
		return {
			chosenDate: new Date()
		}
	},
	render: function() {
		return (
			<div>
				<div className="row">
					<div className="col-lg-7 col-lg-offset-4 col-md-6 col-md-offset-5 col-sm-12 ">
						<BoardHeader chosenDate={this.state.chosenDate.toString()} />
						<AddRecordForm />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-lg-offset-1 col-md-4 col-md-offset-1 col-xs-12">
						<Calendar />
					</div>
					<div className="table-responsive col-lg-7 col-lg-offset-0 col-md-6">
						<Table />
					</div>
				</div>
			</div>
		);
	}	
})