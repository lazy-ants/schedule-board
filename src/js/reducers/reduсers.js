var assign = require('object-assign');
var types = require('../constants/actionTypes.js');
var BusinessHours = require('../constants/businessHours.js').BusinessHours;
var CreateHourlyDay = require('../services/createHourlyDay.js')

var initialState = {
	days:{},
	defaultHourlyDay: CreateHourlyDay ({}, BusinessHours.startHour, BusinessHours.endHour)
};

function boardRecordsReducer(state, action) {
	state = state || initialState
	switch (action.type) {

		case types.ADD_RECORD:
			var days = JSON.parse(JSON.stringify(state.days));
			if (state.days[action.chosenDate]) {
				if (state.days[action.chosenDate][action.recordObj.time].title === "-") {
					days[action.chosenDate][action.recordObj.time].title = action.recordObj.title
					return assign({}, state, { days: days});
					// return {
					// 	days:state.days,
					// 	defaultHourlyDay: CreateHourlyDay ({}, BusinessHours.startHour, BusinessHours.endHour)
					// }
				} else {
					console.log('Time is reserved')
				}
			};
			if (!state.days[action.chosenDate]) {
				days[action.chosenDate] = JSON.parse(JSON.stringify(state.defaultHourlyDay));
				days[action.chosenDate][action.recordObj.time].title = action.recordObj.title;
				return assign({}, state, { days: days})
				// return {
				// 	days:state.days,
				// 	defaultHourlyDay: CreateHourlyDay ({}, BusinessHours.startHour, BusinessHours.endHour)
				// }
			};

		default:
			return state;
		}
};

module.exports = boardRecordsReducer;