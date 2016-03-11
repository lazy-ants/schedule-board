var React = require('react');
var Header = require('./header.js');

module.exports =  React.createClass({
	content: function(){
		if (this.props.children) {
			return this.props.children;
		} else {
			return <div>No content</div>
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