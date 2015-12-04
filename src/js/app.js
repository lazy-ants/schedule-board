var app = angular.module('app', []);

app.controller("ScheduleBoardCtrl", ["$scope", function($scope) {

  $scope.day = moment();
  $scope.chosenDate = $scope.day.format('DD MMMM YYYY');

  $scope.days = {
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
        },
      ],

    "04 December 2015":
      [
        {
          time: "09:00 - 10:00",
          title: "-"
        },
        {
          time: "10:00 - 11:00",
          title: "Milanov Petr"
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
          title: "Kelchak Vladimir"
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


}]);
