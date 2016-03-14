var types = require('../constants/actionTypes.js');

module.exports.addRecord = function addRecord(chosenDate, recordObj) {
	return {
		type: types.ADD_RECORD,
		date: chosenDate,
		recordObj: {
			time: recordObj.time,
			title: recordObj.title
		}
	};
};