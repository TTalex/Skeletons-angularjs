/** This is a sample Controller */
app.controller('SampleController',
                ['$scope', 'sampleservice',
                function ($scope, sampleservice) {
    $scope.message = "Hello world";

    $scope.callservice = function(){
        sampleservice.get()
            .success(function(data) {$scope.message = data.message;})
            .error(function(data) {});
    }

    $scope.uppercase_message = function(){
        $scope.message = $scope.message.toUpperCase();
    }
}]);
