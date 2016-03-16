"use strict";

var React = require('react');
var TableHead = require('./table/tableHead.js');
var ViewEmptyRow = require('./table/viewEmptyRow.js');
var ViewFilledRow = require('./table/viewFilledRow.js');
var EditingRow = require('./table/editingRow.js');

var Table =  React.createClass({
	renderTBodyRows: function () {
		var dayHourRecords = this.props.dayHourRecords;
		var rows = [];
		var i = 0;
		for (var time in dayHourRecords) {
			i++;
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
							deleteRecordAction={this.props.deleteRecordAction} />)
			}
		}

		return rows;
	},
	render: function() {
		return (
			<table className="table table-hover table-condensed table-bordered">
				<TableHead />
				<tbody>
					{this.renderTBodyRows()}
				</tbody>
			</table>
		);
	}	
});

module.exports = Table;