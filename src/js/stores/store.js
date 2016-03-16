"use strict";

var createStore = require('redux').createStore;
var reducers = require('../reducers/reduсers.js');

module.exports = createStore(reducers);