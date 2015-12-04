app.directive("addRecord", function() {
  return {
    restrict: "AE",
    link: function(scope) {
        scope.editingRecord = null;
        //function opens a form for editing
        scope.showEditForm = function (record) {
          if (scope.editingRecord != record) {
            scope.editingRecord = record;
            // createEditedEntityStorage(record);
          } else {
            scope.editingRecord = null;
          };
        };



    }
  }
});


