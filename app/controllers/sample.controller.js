/** This is a sample Controller */
app.controller('SampleController',
                ['$scope', 'sampleservice',
                function ($scope, sampleservice) {
    $scope.message = "Hello world";

    $scope.callservice = function(){
        sampleservice.get()
            .success(function(data) {})
            .error(function(data) {});
    }
}]);
