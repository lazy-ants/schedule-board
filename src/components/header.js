var React = require('react');

module.exports =  React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default header">
				<div className="container-fluid">
					<a to="/" className="navbar-brand">
						Schedule Board
					</a>
					<ul className="nav navbar-nav navbar-right">
						<li><a>item 1</a></li>
						<li><a>item 2</a></li>
					</ul>
				</div>
			</nav>
		);
	}
})