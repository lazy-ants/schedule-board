var app = angular.module('app', []);

app.controller("ScheduleBoardCtrl", ["$scope", function($scope) {

  $scope.day = moment();
  $scope.chosenDate = $scope.day.format('DD MMMM YYYY');

  $scope.checkTitleValidation = function (enteredTitle) {
    var pattern = /^[a-zA-Z\s]+$/;
    if (pattern.test(enteredTitle) && enteredTitle.length >10) {
      return true;
    }
    $scope.showInformModal("Insert correct name: characters and spaces (min 11 sybmols)");
  }

  $scope.showInformModal = function(infMsg) {
    $scope.infMsg = infMsg;
    angular.element(document.querySelector('#informModal')).modal();
  };


  $scope.days = {};


}]);
