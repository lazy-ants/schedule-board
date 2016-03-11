app.directive("removeRecord", function() {
  return {
    restrict: "AE",
    link: function(scope) {
      //function for initiate of record for delete in modal
      scope.activateDeletingRecord = function (record) {
        angular.element(document.querySelector('#deleteModal')).modal();
        scope.deletingRecord = record;
      };

      //function removes an record from array and from server
      scope.removeRecord = function () {
        scope.deletingRecord.title = "-";
      };
    }
  }
});


