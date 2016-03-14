"use strict";

var React = require('react');
var Modal = require('./modal.js');

var AddRecordForm = React.createClass({
    getInitialState: function() {
        return {
            dayHourRecords: this.props.dayHourRecords,
            time: "",
            title: "",
            showIncorrectNameModal: false,
            showIncorrectTimeModal: false
        };
    },
    renderSelectOptions: function () {
        return this.state.dayHourRecords.map(function (record, i) {
            return <option value={record.time} key={i}>{record.time}</option>
        })
    },
    onChangeSelectHandler: function (e) {
        var options = e.target.options;
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            this.setState({
                 time: options[i].value
            });
          }
        }
    },
    onChangeInputHandler: function (e) {
        this.setState({
            title: e.target.value
        });
    },
    onClickAddBtnHandler: function (e) {
        var timeValid = this.checkTimeValidation(this.state.time);
        var titleValid = this.checkTitleValidation (this.state.title);
        if (timeValid) {
            if (titleValid) {
                // applyNewTitle ();
                console.log("valid true")
            } else {
                this.openIncorrectNameModal();
            }
        } else {
            this.openIncorrectTimeModal();
        }
    },
    checkTimeValidation: function (time) {
        if (typeof(time) === "string" && time != "") {
            return true
        }
        return false;
    },
    checkTitleValidation: function (text) {
        var pattern = /^[a-zA-Z\s]+$/;
        if (pattern.test(text) && text.length >10) {
            return true;
        }
        return false;
    },
    openIncorrectNameModal: function (modal) {
      this.setState({ showIncorrectNameModal: true });
    },
    closeIncorrectNameModal: function (modal) {
      this.setState({ showIncorrectNameModal: false });
    },
    openIncorrectTimeModal: function (modal) {
      this.setState({ showIncorrectTimeModal: true });
    },
    closeIncorrectTimeModal: function (modal) {
      this.setState({ showIncorrectTimeModal: false });
    },
    render: function() {
        return (
            <div id="form-div" className="well form-div">
                <div className="row">
                    <form id="adding-form" name="adding-form" className="form-inline" role='form'>
                        <div className="col-md-4 col-sm-4 navbar-btn">
                            <select 
                                name="time" 
                                id="newTime" 
                                className="form-control adding-input input-sm"
                                onChange={this.onChangeSelectHandler}>
                                <option value="">--- Please select ---</option>
                                {this.renderSelectOptions()}
                            </select>
                        </div>
                        <div className="col-md-5 col-sm-5 navbar-btn">
                            <input 
                                name="fullname" 
                                type="text" 
                                className="form-control adding-input input-sm" 
                                id="newFullName" 
                                placeholder="Input your Full Name" 
                                onChange={this.onChangeInputHandler} />
                        </div>
                        <div className="col-md-3 col-sm-3 navbar-btn">
                            <button 
                                type="button" 
                                id="add-record-btn"
                                className="btn btn-default btn-sm col-md-12 col-sm-12"
                                onClick={this.onClickAddBtnHandler}>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
                <Modal 
                    show={this.state.showIncorrectNameModal} 
                    onHide={this.closeIncorrectNameModal} 
                    bsSize="small" 
                    title="Insert correct name" 
                    body={<div><h4>Allowed characters [a-z,A-Z] and spaces</h4><p>(min 11 sybmols)</p></div>} />
                <Modal 
                    show={this.state.showIncorrectTimeModal} 
                    onHide={this.closeIncorrectTimeModal} 
                    bsSize="small" 
                    title="Select correct time" />
            </div>
        );
    }   
});

module.exports = AddRecordForm;