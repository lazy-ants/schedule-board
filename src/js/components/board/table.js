"use strict";

var React = require('react');
var TableHead = require('./table/tableHead.js');
var ViewEmptyRow = require('./table/viewEmptyRow.js');
var ViewFilledRow = require('./table/viewFilledRow.js');
var EditingRow = require('./table/editingRow.js');
var InformModal = require('../common/informModal.js');
var checkTitleValidationService = require('../../services/checkTitleValidation.js');

var Table =  React.createClass({
	getInitialState: function() {
		return {
			editingRecordIndex: null,
			showIncorrectEditingNameModal: false 
		};
	},
	renderTBodyRows: function (editingRecordIndex) {
		var dayHourRecords = this.props.dayHourRecords;
		var rows = [];
		var i = 0;
		for (var time in dayHourRecords) {
			i++;
			if (editingRecordIndex && editingRecordIndex === i) {
				rows.push(<EditingRow 
							time={time} 
							title={dayHourRecords[time].title} 
							key={i} 
							indexKey={i}
							onSaveHandle={this.saveRecord}
							onCancelHandle={this.closeEditingRow} />)
			} else {
				if (dayHourRecords[time].title === "-") {
					rows.push(<ViewEmptyRow 
								time={time} 
								title={dayHourRecords[time].title} 
								key={i} 
								indexKey={i} />)

				} else if (dayHourRecords[time].title !== "-" && typeof(dayHourRecords[time].title) === "string") {
					rows.push(<ViewFilledRow 
								time={time} 
								title={dayHourRecords[time].title} 
								key={i} 
								indexKey={i}
								chosenDate={this.props.chosenDate}
								deleteRecordAction={this.props.deleteRecordAction} 
								onEditHandle={this.openEditingRow} />)
				}
			}
		}

		return rows;
	},
	openEditingRow: function (key) {
		this.setState({
			editingRecordIndex: key
		});
	},
	saveRecord: function (newTitle, time) {
		var titleValid = this.checkTitleValidation (newTitle);
		if (titleValid) {
			this.props.editRecordAction(this.props.chosenDate, time, newTitle);
			this.closeEditingRow();
		} else {
			this.openIncorrectEditingNameModal();
		};
	},
	checkTitleValidation: function (text) {
		return checkTitleValidationService(text)
	},
	closeEditingRow: function (e) {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		};
		this.setState({
			editingRecordIndex: null
		});
	},
	openIncorrectEditingNameModal: function (modal) {
	  this.setState({ showIncorrectEditingNameModal: true });
	},
	closeIncorrectEditingNameModal: function (modal) {
	  this.setState({ showIncorrectEditingNameModal: false });
	},
	render: function() {
		return (
			<div>
				<table className="table table-hover table-condensed table-bordered">
					<TableHead />
					<tbody>
						{this.renderTBodyRows(this.state.editingRecordIndex)}
					</tbody>
				</table>
				<InformModal 
					show={this.state.showIncorrectEditingNameModal} 
					onHide={this.closeIncorrectEditingNameModal} 
					bsSize="small" 
					title="Insert correct name" 
					body={<div><h4>Allowed characters [a-z,A-Z] and spaces</h4><p>(min 11 sybmols)</p></div>} />
			</div>
		);
	}	
});

module.exports = Table;