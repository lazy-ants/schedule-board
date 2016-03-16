"use strict";

var React = require('react');
var Routes = require('./routes.js');
var Provider = require("react-redux").Provider;
var store = require('./stores/store.js');

var App = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        {(function() { return <Routes />; })()}
      </Provider>
    );
  }
});

module.exports = App;