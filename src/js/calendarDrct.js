app.directive("calendar", function() {
      return {
          restrict: "E",
          templateUrl: "templates/calendar.html",
          link: function(scope) {
              scope.selected = _removeTime(scope.selected || moment());

              createDayRecord (); //if current day record not created early

              scope.month = scope.selected.clone();

              var start = scope.selected.clone();
              start.date(1);
              _removeTime(start.day(0));

              _buildMonth(scope, start, scope.month);

              function createDayRecord () {
                scope.chosenDate = scope.selected.format('DD MMMM YYYY');
                console.log(scope.chosenDate);

                  if (!scope.days[scope.chosenDate]) {
                    console.log(scope.emptyDate.length, scope.emptyDate);
                    scope.days[scope.chosenDate] = [];
                    for (var i=0; i<scope.emptyDate.length; i++) {
                      scope.days[scope.chosenDate][i] = {};
                      for (var prop in scope.emptyDate[i]) {
                        scope.days[scope.chosenDate][i][prop] = scope.emptyDate[i][prop];
                      }
                    }
                    console.log(scope.days[scope.chosenDate]);
                  };
              };

              scope.select = function(day) {
                if (day.date._d >= _removeTime(moment())._d) {
                  scope.selected = day.date;
                };

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
          return date.hour(0).minute(0).second(0).millisecond(0);
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
