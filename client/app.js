const angular = require('angular');

const app = angular.module('packafig', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './partials/production.html',
    controller: 'questionsController',
  });
});

app.controller('questionsController', function($scope) {
    $scope.options = {
        entries: '',
        fileName: '',
        fileOutput: ''
    }
    $scope.loaders = ['sourceMap', 'minimize', 'debug', 'webpack', 'target'];
    $scope.questions = [
        'Enter the entry point',
        'What do you want to name the output file?',
        'Where in your directory should the file output to?',
    ];
});
