"use strict";

require('rc-calendar/assets/index.css');

var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect=require("react-redux").connect;

var BoardHeader = require('./boardHeader.js');
var AddRecordForm = require('./addRecordForm.js');
var Calendar = require('rc-calendar');
var Table = require('./table.js');
var BusinessHours = require('../constants/businessHours.js').BusinessHours;
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
	createHourlyDay: function (dayHourRecords, startHour, endHour) {
	    if (isNaN(startHour) === true ||
	      isNaN(endHour) === true ||
	       startHour < 0 || endHour > 23 || startHour > endHour) {
	    console.log("Write correct hours in config.js between 0 and 23");
	    return;
	    };
	    var time;
	    var nextHour;
	    var dayArr = [];
	    for (var i=startHour; i<endHour; i++) {
	        nextHour =  startHour+1;

	        if (startHour >= 0 && startHour <= 8) {
	            time = "0" + startHour + ":00 - 0" + (nextHour) + ":00";
	        } else if (startHour === 9) {
	            time = "09:00 - 10:00";
	        } else if (startHour >= 10 && startHour <= 23) {
	            time = startHour + ":00 - " + (nextHour) + ":00";
	        };

	        dayHourRecords.push({time: time, title: "-"});

	        startHour++;
	    };

	    return dayHourRecords;
	},
	changeDate: function (e) {
		this.setState({
			chosenDate: getFormatedDate (new Date(e.time))
		});
	},
	getInitialState: function () {
		return {
			dayHourRecords: this.createHourlyDay ([], BusinessHours.startHour, BusinessHours.endHour),
			chosenDate: getFormatedDate (new Date())
		}
	},
	render: function() {
		var dispatch = this.props.dispatch;
		var state = this.props.state;
		var actions = bindActionCreators(Actions, dispatch);

		return (
			<div>
				<div className="row">
					<div className="col-lg-7 col-lg-offset-4 col-md-6 col-md-offset-5 col-sm-12 ">
						<BoardHeader chosenDate={this.state.chosenDate.toString()} />
						<AddRecordForm 
							dayHourRecords={this.state.dayHourRecords} 
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
						<Table />
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
