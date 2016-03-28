'use strict';

// require vendor STYLES
var BootstrapYetiCss = require("../css/bootstrap-yeti/css/bootstrap-yeti.min.css");

// require custom STYLES
var MainCss = require("../css/main.css");

//require custom SCRIPTS
var React = require('react');
var ReactDOM = require('react-dom'),
    App = require('./containers/app.js');

ReactDOM.render(<App />, document.getElementById("app"));
