"use strict";

var React = require('react');
var Header = require('./header.js');
var StartPage = require('./startPage.js');

module.exports =  React.createClass({
	content: function(){
		if (this.props.children) {
			return this.props.children;
		} else {
			return <StartPage />
		};
	},
	render: function() {
		return (
			<div>
				<Header />
				{this.content()}
			</div>
		);
	}	
})