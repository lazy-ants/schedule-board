"use strict";

var assign = require('object-assign');
var types = require('../constants/actionTypes.js');
var BusinessHours = require('../constants/businessHours.js').BusinessHours;
var CreateHourlyDay = require('../services/createHourlyDay.js')

var initialState = {
	days:{},
	defaultHourlyDay: CreateHourlyDay ({}, BusinessHours.startHour, BusinessHours.endHour)
};

function reducer(state, action) {
	state = state || initialState;
	switch (action.type) {

		case types.ADD_RECORD:
			var days = JSON.parse(JSON.stringify(state.days));
			if (state.days[action.chosenDate]) {
				if (state.days[action.chosenDate][action.recordObj.time].title === "-") {
					days[action.chosenDate][action.recordObj.time].title = action.recordObj.title
					return assign({}, state, { days: days});
				}
			};
			if (!state.days[action.chosenDate]) {
				days[action.chosenDate] = JSON.parse(JSON.stringify(state.defaultHourlyDay));
				days[action.chosenDate][action.recordObj.time].title = action.recordObj.title;
				return assign( {}, state, { days: days } )
			};

		case types.EDIT_RECORD:
			var days = JSON.parse(JSON.stringify(state.days));
			days[action.chosenDate][action.time].title = action.title;
			return assign({}, state, { days: days});

		case types.DELETE_RECORD:
			var days = JSON.parse(JSON.stringify(state.days));
			days[action.chosenDate][action.time].title = "-";
			return assign({}, state, { days: days});

		default:
			return state;
		}
};

module.exports = reducer;