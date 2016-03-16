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

module.exports.deleteRecord = function addRecord(chosenDate, recordTime) {
	return {
		type: types.DELETE_RECORD,
		chosenDate: chosenDate,
		time: recordTime
	};
};