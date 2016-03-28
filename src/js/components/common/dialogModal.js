"use strict";

var React = require('react');
var BootstrapModal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button')

var DialogModal = React.createClass({
	renderModalBody: function () {
		if (this.props.body) {
			return <BootstrapModal.Body>{this.props.body}</BootstrapModal.Body>
		}
	},
	render: function() {
		return (
			<BootstrapModal show={this.props.show} onHide={this.props.onHide} bsSize="small">
				<BootstrapModal.Header closeButton>
					<BootstrapModal.Title>{this.props.title}</BootstrapModal.Title>
				</BootstrapModal.Header>
				{this.renderModalBody()}
				<BootstrapModal.Footer>
					<Button onClick={this.props.onHide} className="btn-sm">Close</Button>
					<Button onClick={this.props.onConfirm} bsStyle="primary" className="btn-sm">Confirm</Button>
				</BootstrapModal.Footer>
			</BootstrapModal>
		);
	}	
});

module.exports = DialogModal;