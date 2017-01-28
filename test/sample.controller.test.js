describe('SampleController', function(){
    beforeEach(module('SkeletonApp'));

    var $controller;
    var $httpBackend, requestHandler;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    var $scope, controller;
    beforeEach(function(){
        $scope = {};
        controller = $controller("SampleController", {$scope: $scope});
    });
    describe("$scope.uppercase_message", function(){
        it("sets the message to uppercase", function(){
            $scope.uppercase_message();
            expect($scope.message).toEqual("HELLO WORLD");
        })
    })

    // Testing service
    describe("$scope.callservice", function(){
        beforeEach(inject(function($injector) {
          // Set up the mock http service responses
          $httpBackend = $injector.get('$httpBackend');
          // backend definition common for all tests
          requestHandler = $httpBackend.when('GET', '/api/sample')
                                 .respond({'message': 'hello'});
            config.server_ip = "";
        }));
        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
        it('should fetch sample data', function() {
            $httpBackend.expectGET('/api/sample');
            $scope.callservice();
            $httpBackend.flush();
            expect($scope.message).toEqual("hello");
        });
    });



})
