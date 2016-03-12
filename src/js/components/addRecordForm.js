"use strict";

var React = require('react');

module.exports =  React.createClass({
    render: function() {
        return (
            <div id="form-div" className="well form-div">
                <div className="row">
                    <form id="adding-form" name="adding-form" className="form-inline" role='form'>
                        <div className="col-md-4 col-sm-4 navbar-btn">
                            <select name="time" id="newTime" className="form-control adding-input input-sm">
                                <option value="">--- Please select ---</option>
                                <option id="chosenNewTime">опшн 1</option>
                            </select>
                        </div>
                        <div className="col-md-5 col-sm-5 navbar-btn">
                            <input name="fullname" type="text" className="form-control adding-input input-sm" id="newFullName" placeholder="Input your Full Name" />
                        </div>
                        <div className="col-md-3 col-sm-3 navbar-btn">
                            <button 
                                type="button" 
                                id="add-record-btn"
                                className="btn btn-default btn-sm col-md-12 col-sm-12">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }   
})