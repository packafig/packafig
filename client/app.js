// const angular = require('angular');
const app = angular.module('packafig', ['ngRoute']);
let info = {};

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './partials/production.html',
    controller: 'questionsController',
  });
});

app.controller('questionsController', function($scope, $http) {
  $scope.options = {
    entry: '',
    fileName: '',
    fileOutput: '',
  };
  $scope.makeFile = function() {
    console.log('firing');
    info = {
      entry: $scope.options.entry,
      output: {
        path: $scope.options.fileOutput,
        filename: $scope.options.fileName,
      },
    };
    $http.post('/', JSON.stringify(info));
  };
  $scope.loaders = ['sourceMap', 'minimize', 'debug', 'webpack', 'target'];
  $scope.questions = [
    'What is your entry file?',
    'Define the output file path:',
    'What do you want to name the output file?',
  ];
});
