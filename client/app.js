// const angular = require('angular');

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
    entry: 'entry file here',
    filename: 'desired filename here',
    filepath: 'desired file path here',
  }
  $scope.loaders = ['sourceMap', 'minimize', 'debug', 'webpack', 'target'];
  $scope.questions = [
    'What is your entry file?',
    'Define the path for your file output:',
    'What do you want to name the output file?',
  ];
});
