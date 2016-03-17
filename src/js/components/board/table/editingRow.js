"use strict";

var React = require('react');

var EditingRow =  React.createClass({
	getInitialState: function() {
		return {
			title: this.props.title
		};
	},
	onChangeInputHandler: function (e) {
		this.setState({
			title: e.target.value
		});
	},
	render: function() {
		return (
			<tr>
				<td className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">{this.props.indexKey}</td>
				<td className="col-lg-4 col-md-3 col-sm-3 col-xs-3">{this.props.time}</td>
				<td className="col-lg-5 col-md-4 col-sm-4 col-xs-4">
					<input 
						className="form-control input-sm width-max" 
						defaultValue={this.state.title} 
						onChange={this.onChangeInputHandler} />
				</td>
				<td className="col-lg-2 col-md-3 col-sm-3 col-xs-3 use-center">
					<span className="use-center save-icon">
						<span 
							className="glyphicon glyphicon-ok" 
							role="button" 
							onClick={this.props.onSaveHandle.bind(null, this.state.title, this.props.time)} >
						</span>
					</span>
					<span className="use-centerd cancel-icon">
						<span 
							className="glyphicon glyphicon-remove" 
							role="button" 
							onClick={this.props.onCancelHandle} >
						</span>
					</span>
				</td>
			</tr>
		);
	}	
});

module.exports = EditingRow;