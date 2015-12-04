app.directive("addRecord", function() {
  return {
    restrict: "AE",
    link: function(scope) {
      scope.addRecord = function () {
        var chosenDate = scope.chosenDate;
        for (var i=0; i<scope.days[chosenDate].length; i++) {
          if (scope.days[chosenDate][i].time === scope.newRecord.time) {
            scope.days[chosenDate][i].title = scope.newRecord.title;
          }
        }
        chosenDate = "";
        console.log(scope.days);
      };


    }
  }
});


