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

    describe('Adding of records is working', function() {

        beforeEach(function() {
            scope.checkTitleValidation = function () { return true; };
            scope.showInformModal = function () { return };
            scope.chosenDate = "10 March 2016";
            scope.days = {
                "10 March 2016": [
                    {
                        time: "08:00 - 09:00",
                        title: "-",
                    },
                    {
                        time: "09:00 - 10:00",
                        title: "Phil Rasseliny"
                    }
                ]
            };
        });

        describe("scope.addRecord() calls function applyNewTitle ()", function () {

            it("function applyNewTitle () adds record to correct time", function () {
                scope.newRecord = {
                    title: "Sergey Ivanov",
                    time: "08:00 - 09:00"
                };
                scope.addRecord();
                expect(scope.days[scope.chosenDate][0]).toBeDefined();
                expect(scope.days[scope.chosenDate][0].time).toEqual("08:00 - 09:00");
                expect(scope.days[scope.chosenDate][0].title).toEqual("Sergey Ivanov");
            });

            it("function applyNewTitle () does not add record to incorrect time", function () {
                scope.newRecord = {
                    title: "Sergey Ivanov",
                    time: "09:00 - 10:00"
                };
                scope.addRecord();
                expect(scope.days[scope.chosenDate][0]).toBeDefined();
                expect(scope.days[scope.chosenDate][0].time).toEqual("08:00 - 09:00");
                expect(scope.days[scope.chosenDate][0].title).toEqual("-");
            });

            describe("function applyNewTitle () calls function resetNewRecord ()", function () {
                it("function applyNewTitle () adds record to correct time", function () {
                    scope.newRecord = {
                        title: "Sergey Ivanov",
                        time: "08:00 - 09:00"
                    };
                    scope.addRecord();
                    expect(scope.newRecord).toBeDefined();
                    expect(scope.newRecord.title).toEqual("");
                    expect(scope.newRecord.time).toEqual("");
                });

                it("function applyNewTitle () does not add incorrect record into schedule", function () {
                    scope.newRecord = {
                        title: "Sergey Ivanov",
                        time: "09:00 - 10:00"
                    };
                    scope.addRecord();
                    expect(scope.newRecord).toBeDefined();
                    expect(scope.newRecord.title).toEqual("Sergey Ivanov");
                    expect(scope.newRecord.time).toEqual("09:00 - 10:00");
                });
            });
        });
    });
});

describe('editRecordDrtc', function() {
    var $compile,
            $rootScope,
            scope,
            element;
    beforeEach(module('app'));

    beforeEach(inject(function (_$compile_, _$rootScope_, $templateCache){
        $templateCache.put('testView.html', [
              '<span id="edit" class="glyphicon glyphicon-pencil" role="button" ng-click="showEditForm(record)"></span>'
            ].join(''));
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $compile = _$compile_;
        element = $compile("<edit-record></edit-record>")(scope);
        scope.$digest();

    }));

    it('Object scope.editingRecord is null', function() {
        expect(scope.editingRecord).toBeNull();
    });

    it('Clicks on "edit" open Edit Form', function() {
        spyOn(scope, 'showEditForm');
        simpleHtml = '<span id="edit" class="glyphicon glyphicon-pencil" role="button" ng-click="showEditForm(record)"></span>';
        el = $compile(angular.element(simpleHtml))(scope);
        el.find('#edit').prevObject[0].click();

        expect(scope.showEditForm).toHaveBeenCalled();
    });

    describe('scope.showEditForm() works', function() {
        beforeEach(function() {
            var record = {
                time: "08:00 - 09:00",
                title: "Andrey Vasilyev"
            };
            scope.showEditForm(record);
        });

        it('scope.showEditForm() update scope.editingRecord', function() {
            expect(scope.editingRecord.time).toBeDefined();
            expect(scope.editingRecord.title).toBeDefined();
        });

        it('scope.showEditForm() calls function createEditedEntityStorage, which creates scope.editingRecord', function() {
            expect(scope.editedRecord.time).toBeDefined();
            expect(scope.editedRecord.title).toBeDefined();
        });
    });

    it('Clicks on "save" update record', function() {
        spyOn(scope, 'updateRecord');
        simpleHtml = '<span id="save" class="glyphicon glyphicon-ok" role="button" ng-click="updateRecord(record)"></span>';
        el = $compile(angular.element(simpleHtml))(scope);
        el.find('#save').prevObject[0].click();

        expect(scope.updateRecord).toHaveBeenCalled();
    });

    describe('scope.updateRecord() works', function() {
        var record = {
            time: "08:00 - 09:00",
            title: "Andrey Vasilyev"
        };
        beforeEach(function() {
            scope.checkTitleValidation = function () { return true; };
            scope.showInformModal = function () { return };
        });

        it('Title is not changed - modal shows', function() {
            spyOn(scope, 'showInformModal');
            scope.editedRecord = {
                time: "08:00 - 09:00",
                title: "Andrey Vasilyev"
            };
            scope.updateRecord(record);

            expect(scope.showInformModal).toHaveBeenCalled();
        });

        describe('Record saves', function() {
            beforeEach(function() {
                spyOn(scope, 'showInformModal');
                scope.editedRecord = {
                    time: "08:00 - 09:00",
                    title: "Ivan Vasilyev"
                };
                scope.updateRecord(record);
            });

            it('Title is changed - modal does not show', function() {
                expect(scope.showInformModal).not.toHaveBeenCalled();
            });

            it('Record saved', function() {
                expect(record.title).toEqual("Ivan Vasilyev");
                expect(record.time).toEqual("08:00 - 09:00");
            });

            it('scope.editingRecord reseted', function() {
                expect(scope.editingRecord ).toBeNull();
            });
        });
    });
});
