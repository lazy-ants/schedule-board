var createStore = require('redux').createStore;
var boardRecordsReducer = require('../reducers/reduсers.js');

module.exports = createStore(boardRecordsReducer);