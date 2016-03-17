"use strict";

var CheckTitleValidation = function (text) {
    var pattern = /^[a-zA-Z\s]+$/;
    if (pattern.test(text) && text.length >10) {
        return true;
    }
    return false;
};

module.exports = CheckTitleValidation;