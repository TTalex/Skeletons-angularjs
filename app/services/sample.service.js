/** sampleservice */
app.factory('sampleservice', ['$http', function ($http) {
    return {
        get: function() {
            return $http.get(config.server_ip + '/api/sample',
                {headers: {}}
            );
        },
        post: function (elt) {
            return $http.post(config.server_ip + "/api/sample",
                {elt: elt},
                {headers: {"Content-Type": "application/json"}}
            );
        }
    };
}]);
