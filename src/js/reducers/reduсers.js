var assign = require('object-assign');
var types = require('../constants/actionTypes.js');

var initialState = {days:[]};

function boardRecordsReducer(state, action) {
	state = state || initialState
	switch (action.type) {
		case types.ADD_RECORD:
			var newRecord = {};
			newRecord.id = (state.days.length === 0) ? 0 : state.days[state.days.length];
			newRecord[action.date] = {
				time: action.recordObj.time,
				title: action.recordObj.title
			};
			return {
				days: state.days.concat([newRecord])
			};

		default:
			return state;
		}
};

module.exports = boardRecordsReducer;