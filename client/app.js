// const angular = require('angular');

const app = angular.module('packafig', ['ngRoute'])


app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: './partials/production.html',
            controller: 'questionsController'
        });
});


app.controller('questionsController', function($scope, $http) {
    $scope.options = {
        entry: "",
        fileName: "",
        fileOutput: ""
    }
    $scope.makeFile = function() {
        console.log('firing')
        var info = {
            entry: $scope.options.entry,
            output: {
                path: $scope.options.fileOutput,
                filename: $scope.options.fileName
            }
        }
        $http.post('/', JSON.stringify(info));


    }
    $scope.loaders = ["sourceMap", "minimize", "debug", "webpack", "target"];
    $scope.questions = [
        "Enter the entry point",
        "What's the output file's name?",
        "Where in your directory sould the file output to?"
    ];
});




