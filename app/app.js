/** Angular app initialization and configuration
 * ngRoute allows routing through $routeProvider
 */
var app = angular.module('SkeletonApp', ['ngRoute']);
/** The config is pretty straight forward, it links routes to controllers and templates */
app.config(function ($locationProvider, $routeProvider) {
    //This is used to avoid /#/ in the paths, (easier to resolve static files with node)
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            controller: 'SampleController',
            templateUrl: 'app/views/sample.view.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});


// Filters
/** unquote is a new filter removing the first and last characters of an input, usually quotes
 * Usage: {{ string | unquote }}
 * 'Coty' becomes Coty
 */
app.filter('unquote', function () {
    return function (input) {
        if (angular.isDefined(input) && angular.isString(input)) {
            return input.slice(1, input.length - 1);
        }
        return input;
    };
});
