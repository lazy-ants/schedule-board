"use strict";

var CheckTitleValidation = function (text) {
    // var pattern = /^[a-zA-Z\s]+$/;
    if (text.length > 1) {
        return true;
    }
    return false;
};

module.exports = CheckTitleValidation;