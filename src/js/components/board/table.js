"use strict";

var React = require('react');
var TableHead = require('./table/tableHead.js');
var ViewEmptyRow = require('./table/viewEmptyRow.js');
var ViewFilledRow = require('./table/viewFilledRow.js');
var EditingRow = require('./table/editingRow.js');

var Table =  React.createClass({
	getInitialState: function() {
		return {
			editingRecordIndex: null 
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
		this.props.editRecordAction(this.props.chosenDate, time, newTitle);

		this.closeEditingRow();
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
	render: function() {
		return (
			<table className="table table-hover table-condensed table-bordered">
				<TableHead />
				<tbody>
					{this.renderTBodyRows(this.state.editingRecordIndex)}
				</tbody>
			</table>
		);
	}	
});

module.exports = Table;