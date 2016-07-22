var app = angular
    .module('myApp', [
        'ngRoute',
        'Qcontroller',
    ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

    $routeProvider
        .when('/index.html', {
            templateUrl: './partials/index.html',
            controller: 'HomeController'
        })

}
