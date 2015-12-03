var app = angular.module('app', []);

app.controller("ScheduleBoardCtrl", ["$scope", function($scope) {


  $scope.day = moment();
  $scope.console = function () {
    console.log($scope.day.format('DD MMMM YYYY'));
  }





}]);

app.directive("calendar", function() {
      return {
          restrict: "E",
          templateUrl: "templates/calendar.html",
          link: function(scope) {
              scope.selected = scope.selected || moment();

              createDayRecord (); //if current day record not created early

              scope.month = scope.selected.clone();

              var start = scope.selected.clone();
              start.date(1);
              _removeTime(start.day(0));

              _buildMonth(scope, start, scope.month);

              function createDayRecord () {
                scope.chosenDate = scope.selected.format('DD MMMM YYYY');
                  if (!scope.records[scope.chosenDate]) {
                    scope.records[scope.chosenDate] = scope.emptyRecord;
                  };
              };

              scope.select = function(day) {
                  scope.selected = day.date;

                  createDayRecord (); //if this day record not created early
              };

              scope.next = function() {
                  var next = scope.month.clone();
                  _removeTime(next.month(next.month()+1).date(1));
                  scope.month.month(scope.month.month()+1);
                  _buildMonth(scope, next, scope.month);
              };

              scope.previous = function() {
                  var previous = scope.month.clone();
                  _removeTime(previous.month(previous.month()-1).date(1));
                  scope.month.month(scope.month.month()-1);
                  _buildMonth(scope, previous, scope.month);
              };
          }
      };

      function _removeTime(date) {
          return date.day(0).hour(0).minute(0).second(0).millisecond(0);
      }

      function _buildMonth(scope, start, month) {
          scope.weeks = [];
          var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
          while (!done) {
              scope.weeks.push({ days: _buildWeek(date.clone(), month) });
              date.add(1, "w");
              done = count++ > 2 && monthIndex !== date.month();
              monthIndex = date.month();
          }
      }

      function _buildWeek(date, month) {
          var days = [];
          for (var i = 0; i < 7; i++) {
              days.push({
                  name: date.format("dd").substring(0, 1),
                  number: date.date(),
                  isCurrentMonth: date.month() === month.month(),
                  isToday: date.isSame(new Date(), "day"),
                  date: date
              });
              date = date.clone();
              date.add(1, "d");
          }
          return days;
      }

  });




app.directive("board", function() {
      return {
          restrict: "AE",
          link: function(scope) {

            scope.chosenDate = scope.day.format('DD MMMM YYYY');

            scope.records = {
              "28 December 2015":
                [
                  {
                    time: "08:00 - 09:00",
                    title: "Filipov Andrey"
                  },
                  {
                    time: "09:00 - 10:00",
                    title: "Simak Pavel"
                  },
                  {
                    time: "10:00 - 11:00",
                    title: "-"
                  },
                          {
                    time: "11:00 - 12:00",
                    title: "-"
                  },
                          {
                    time: "12:00 - 13:00",
                    title: "-"
                  },
                          {
                    time: "13:00 - 14:00",
                    title: "Plahuta Sergey"
                  },
                          {
                    time: "14:00 - 15:00",
                    title: "-"
                  },
                          {
                    time: "15:00 - 16:00",
                    title: "-"
                  },
                                  {
                    time: "16:00 - 17:00",
                    title: "-"
                  },
                                  {
                    time: "17:00 - 18:00",
                    title: "-"
                  }
                ]
            };

            scope.emptyRecord = [
                  {
                    time: "08:00 - 09:00",
                    title: "-"
                  },
                  {
                    time: "09:00 - 10:00",
                    title: "-"
                  },
                  {
                    time: "10:00 - 11:00",
                    title: "-"
                  },
                          {
                    time: "11:00 - 12:00",
                    title: "-"
                  },
                          {
                    time: "12:00 - 13:00",
                    title: "-"
                  },
                          {
                    time: "13:00 - 14:00",
                    title: "-"
                  },
                          {
                    time: "14:00 - 15:00",
                    title: "-"
                  },
                          {
                    time: "15:00 - 16:00",
                    title: "-"
                  },
                                  {
                    time: "16:00 - 17:00",
                    title: "-"
                  },
                                  {
                    time: "17:00 - 18:00",
                    title: "-"
                  }
                ];


          }
        }
      });


