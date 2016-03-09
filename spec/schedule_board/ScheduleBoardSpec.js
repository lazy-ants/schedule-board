describe('ScheduleBoardCtrl', function() {
    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('Function defineCurrentDate', function() {
        var $scope, controller;
        var defineCurrentDate;

        beforeEach(function() {
            $scope = {};
            controller = $controller('ScheduleBoardCtrl', { $scope: $scope, defineCurrentDate: defineCurrentDate});
            defineCurrentDate = function () {
                $scope.day = moment();
                $scope.chosenDate = $scope.day.format('DD MMMM YYYY');
            }
        });

        it('$scope.chosenDate (currentDate) is Defined', function(){
                defineCurrentDate ();
                expect($scope.chosenDate).toBeDefined();
        });

        it('The date format is "DD MMMM YYYY"', function(){
                defineCurrentDate ();
                var pattern = /^\d{2} [a-zA-Z]+ \d{4}$/;
                var format = pattern.test($scope.chosenDate);
                expect(format).toEqual(true);
        });
    });

    describe('Function $scope.checkTitleValidation', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('ScheduleBoardCtrl', { $scope: $scope });
        });

        var validEnteredTitle1 = "John Lennon";
        var validEnteredTitle2 = "SergeyLymarev";
        var invalidEnteredTitle1 = "John L3ennon";
        var invalidEnteredTitle2 = "John Len";
        var invalidEnteredTitle3 = "John Леннон";
        var invalidEnteredTitle4 = "John.Lennon";

        it('John Lennon is valid', function(){
                expect(validEnteredTitle1).toEqual('John Lennon');
                expect($scope.checkTitleValidation(validEnteredTitle1)).toEqual(true);
        });

        it('SergeyLymarev is valid', function(){
                expect(validEnteredTitle2).toEqual("SergeyLymarev");
                expect($scope.checkTitleValidation(validEnteredTitle2)).toEqual(true);
        });

        it('John L3ennon is invalid', function(){
                expect(invalidEnteredTitle1).toEqual("John L3ennon");
                expect($scope.checkTitleValidation(invalidEnteredTitle1)).toEqual(false);
        });

        it('John Len is invalid', function(){
                expect(invalidEnteredTitle2).toEqual("John Len");
                expect($scope.checkTitleValidation(invalidEnteredTitle2)).toEqual(false);
        });

        it('John Леннон is invalid', function(){
                expect(invalidEnteredTitle3).toEqual("John Леннон");
                expect($scope.checkTitleValidation(invalidEnteredTitle3)).toEqual(false);
        });

        it('John.Lennon is invalid', function(){
                expect(invalidEnteredTitle4).toEqual("John.Lennon");
                expect($scope.checkTitleValidation(invalidEnteredTitle4)).toEqual(false);
        });
    });
});

describe('addRecordDrtc', function() {
    var $compile,
            $rootScope,
            scope,
            element;
    beforeEach(module('app'));

    beforeEach(inject(function (_$compile_, _$rootScope_){
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $compile = _$compile_;
        element = $compile("<div add-record></div>")(scope);
        scope.$digest();
    }));

    describe('Object scope.newRecord is creating', function() {
        it("scope.newRecord is defined", function () {
            expect(scope.newRecord).toBeDefined();
        });
    });

    describe('Function resetNewRecord() is working', function() {
        it("scope.newRecord.title is empty", function () {
            expect(scope.newRecord.title).toEqual("");
        });

        it("scope.newRecord.time is empty", function () {
            expect(scope.newRecord.time).toEqual("");
        });
    });
});
