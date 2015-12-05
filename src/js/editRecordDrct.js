app.directive("editRecord", function() {
  return {
    restrict: "AE",
    link: function(scope) {
        scope.editingRecord = null;
        //function opens a form for editing
        scope.showEditForm = function (record) {
          if (scope.editingRecord != record) {
            scope.editingRecord = record;
            createEditedEntityStorage(record);
          } else {
            scope.editingRecord = null;
          };
        };

        //creates buffer (storage) for editing record
        function createEditedEntityStorage (record) {
          scope.editedRecord = {};
          for (prop in record) {
            scope.editedRecord[prop] = record[prop];
          };
        };


        //updates an element of array and send updating of record to server
        scope.updateRecord = function (record) {
          var titleValid = scope.checkTitleValidation (scope.editedRecord.title);
          if (scope.editedRecord.title === record.title) {
            scope.showInformModal("Title isn't chaged!");
            return;
          }
          if (titleValid) {
            for (prop in scope.editedRecord) {
              record[prop] = scope.editedRecord[prop];
            };
            scope.editingRecord = null;
          };

        };

    }
  }
});


