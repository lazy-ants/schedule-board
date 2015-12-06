var app = angular.module('app', []);

app.controller("ScheduleBoardCtrl", ["$scope", function($scope) {

  $scope.day = moment();
  $scope.chosenDate = $scope.day.format('DD MMMM YYYY');

  //object should store every activated day and days that have records, if it's saving in storage
  $scope.days = {};


  $scope.checkTitleValidation = function (enteredTitle) {
    var pattern = /^[a-zA-Z\s]+$/;
    if (pattern.test(enteredTitle) && enteredTitle.length >10) {
      return true;
    }
    $scope.showInformModal("Insert correct name: characters [a-z,A-Z] and spaces (min 11 sybmols)");
  }

  $scope.showInformModal = function(infMsg) {
    $scope.infMsg = infMsg;
    angular.element(document.querySelector('#informModal')).modal();
  };



}]);
