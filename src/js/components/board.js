"use strict";

require('rc-calendar/assets/index.css');

var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect=require("react-redux").connect;

var BoardHeader = require('./board/boardHeader.js');
var AddRecordForm = require('./board/addRecordForm.js');
var Table = require('./board/table.js');
var Calendar = require('rc-calendar');
var Actions = require('../actions/actions.js');

function getFormatedDate (date) {
	var monthNames = [
	  "January", "February", "March",
	  "April", "May", "June", "July",
	  "August", "September", "October",
	  "November", "December"
	];
	date = monthNames[date.getMonth()] + ' ' + date.getDate() + ' ' +  date.getFullYear();
	return date;
};

var Board =  React.createClass({
	changeDate: function (e) {
		this.setState({
			chosenDate: getFormatedDate (new Date(e.time)),
		});
	},
	getInitialState: function () {
		return {
			chosenDate: getFormatedDate (new Date()),
		}
	},
	render: function() {
		var dispatch = this.props.dispatch;
		var actions = bindActionCreators(Actions, dispatch);
		var dayHourRecords = this.props.state.days[this.state.chosenDate] || this.props.state.defaultHourlyDay;

		return (
			<div>
				<div className="row">
					<div className="col-lg-7 col-lg-offset-4 col-md-6 col-md-offset-5 col-sm-12 ">

						<BoardHeader 
							chosenDate={this.state.chosenDate.toString()} />

						<AddRecordForm 
							dayHourRecords={dayHourRecords} 
							chosenDate={this.state.chosenDate}
							addRecordAction={actions.addRecord} />

					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-lg-offset-1 col-md-4 col-md-offset-1 col-xs-12">

						<Calendar 
							showDateInput={false} 
							className="calendar-div" 
							onSelect={this.changeDate} />

					</div>
					<div className="table-responsive col-lg-7 col-lg-offset-0 col-md-6">

						<Table 
							dayHourRecords={dayHourRecords} />

					</div>
				</div>
			</div>
		);
	}	
});

function mapStateToProps(state) {
	return {
		state: state
	};
}

module.exports = connect(mapStateToProps)(Board);
