app.directive("removeRecord", function() {
  return {
    restrict: "AE",
    link: function(scope) {
      var deletingRecord;

      //function for initiate of record for delete in modal
      scope.activateDeletingRecord = function (record) {
        angular.element(document.querySelector('#deleteModal')).modal();
        deletingRecord = record;
      };

      //function removes an record from array and from server
      scope.removeRecord = function () {
        var deletedTitle = deletingRecord.title;
        deletingRecord.title = "-";
      };
    }
  }
});


