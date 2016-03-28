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
			processType: null,
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
							onCancelHandle={this.closeEditingRow}
							processType={this.state.processType} />)
			} else {
				if (dayHourRecords[time].title === "-") {
					rows.push(<ViewEmptyRow 
								time={time} 
								title={dayHourRecords[time].title} 
								key={i} 
								indexKey={i}
								onCreateHandle={this.openEditingRow} />)

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
	openEditingRow: function (key, processType) {
		if (this.checkTense()) {
			this.setState({
				editingRecordIndex: key,
				processType: processType
			});
		};
	},
	checkTense: function () {
		var today = new Date();
		today.setHours(0, 0, 0, 0);
		var chosenDay = this.props.chosenUnformatedDate;
		chosenDay.setHours(0, 0, 0, 0);
		if (chosenDay<today) {
			this.openIncorrectDateModal();
			return false
		}
		return true
	},
	saveRecord: function (newTitle, time) {
		var titleValid = this.checkTitleValidation (newTitle);
		if (titleValid) {
			switch(this.state.processType) {
				case 'editing':
					this.props.editRecordAction(this.props.chosenDate, time, newTitle);
					break;
				case 'creating':
					this.props.addRecordAction(this.props.chosenDate, {time: time, title: newTitle});
					break;
			}
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
			processType: null,
			editingRecordIndex: null
		});
	},
	openIncorrectEditingNameModal: function (modal) {
	  this.setState({ showIncorrectEditingNameModal: true });
	},
	closeIncorrectEditingNameModal: function (modal) {
	  this.setState({ showIncorrectEditingNameModal: false });
	},
	openIncorrectDateModal: function (modal) {
	  this.setState({ showIncorrectDateModal: true });
	},
	closeIncorrectDateModal: function (modal) {
	  this.setState({ showIncorrectDateModal: false });
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
					body={<div><h4>Title should have min 2 sybmols</h4></div>} />
				<InformModal 
					show={this.state.showIncorrectDateModal} 
					onHide={this.closeIncorrectDateModal} 
					bsSize="small" 
					title="Choose correct date" 
					body={<div><h4>You can not create or edit records in past</h4></div>} />
			</div>
		);
	}	
});

module.exports = Table;