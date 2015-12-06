app.directive("addRecord", function() {
  return {
    restrict: "AE",
    link: function(scope) {
      scope.newRecord = {};
      resetNewRecord ();

      scope.addRecord = function () {
        var titleValid = scope.checkTitleValidation (scope.newRecord.title);
        if (titleValid) {
          applyNewTitle ();
        }
      };

      function applyNewTitle () {
        for (var i=0; i<scope.days[scope.chosenDate].length; i++) {
          if (scope.days[scope.chosenDate][i].time === scope.newRecord.time) {
            scope.days[scope.chosenDate][i].title = scope.newRecord.title;
            scope.showInformModal('Record "' + scope.days[scope.chosenDate][i].title + '" successfully added!');
            resetNewRecord ();
          }
        }
      }

      function resetNewRecord () {
        scope.newRecord.time = "";
        scope.newRecord.title = "";
      }


    }
  }
});


