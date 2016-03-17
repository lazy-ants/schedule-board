"use strict";

var types = require('../constants/actionTypes.js');

module.exports.addRecord = function addRecord(chosenDate, recordObj) {
	return {
		type: types.ADD_RECORD,
		chosenDate: chosenDate,
		recordObj: {
			time: recordObj.time,
			title: recordObj.title
		}
	};
};

module.exports.editRecord = function editRecord(chosenDate, recordTime, newTitle) {
	return {
		type: types.EDIT_RECORD,
		chosenDate: chosenDate,
		time: recordTime,
		title: newTitle
	};
};

module.exports.deleteRecord = function deleteRecord(chosenDate, recordTime) {
	return {
		type: types.DELETE_RECORD,
		chosenDate: chosenDate,
		time: recordTime
	};
};