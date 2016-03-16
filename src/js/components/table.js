"use strict";

var React = require('react');
var TableHead = require('./tableHead.js');
var ViewEmptyRow = require('./viewEmptyRow.js');
var ViewFilledRow = require('./viewFilledRow.js');
var EditingRow = require('./editingRow.js');

var Table =  React.createClass({
	renderTBodyRows: function () {
		var dayHourRecords = this.props.dayHourRecords;
		var rows = [];
		var i = 0;
		for (var time in dayHourRecords) {
			i++;
			if (dayHourRecords[time].title === "-") {
				rows.push(<ViewEmptyRow time={time} title={dayHourRecords[time].title} key={i} indexKey={i} />)
			} else if (dayHourRecords[time].title !== "-" && typeof(dayHourRecords[time].title) === "string") {
				rows.push(<ViewFilledRow time={time} title={dayHourRecords[time].title} key={i} indexKey={i} />)
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