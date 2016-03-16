"use strict";

var React = require('react');
var DialogModal = require('../../common/dialogModal.js');

var ViewFilledRow =  React.createClass({
	getInitialState: function() {
		return {
			showDeletingModal: false,
		};
	},
	onClickDeleteHandler: function (modal) {
	  this.setState({ showDeletingModal: true });
	},
	closeDeletingModal: function (modal) {
	  this.setState({ showDeletingModal: false });
	},
	confirmDelete: function () {
		this.props.deleteRecordAction(this.props.chosenDate, this.props.time);
	},
	render: function() {
		return (
			<tr>
				<td className="col-lg-1 col-md-2 col-sm-2 col-xs-2 use-center">{this.props.indexKey}</td>
				<td className="col-lg-4 col-md-3 col-sm-3 col-xs-3">{this.props.time}</td>
				<td className="col-lg-5 col-md-4 col-sm-4 col-xs-4">{this.props.title}</td>
				<td className="col-lg-2 col-md-3 col-sm-3 col-xs-3 use-center">
					<span className="use-center edit-icon">
						<span id="edit" className="glyphicon glyphicon-pencil" role="button"></span>
					</span>
					<span className="use-centerd delete-icon">
						<span 
							className="glyphicon glyphicon-trash" 
							role="button"
							onClick={this.onClickDeleteHandler} >
						</span>
					</span>
					<DialogModal 
						show={this.state.showDeletingModal} 
						onHide={this.closeDeletingModal} 
						onConfirm={this.confirmDelete} 
						bsSize="small" 
						title="Confirm Delete" 
						body={<h5>Delete reservation "{this.props.title}" on {this.props.time} ?</h5>} />
				</td>
			</tr>
		);
	}	
});

module.exports = ViewFilledRow;