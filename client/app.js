const angular = require('angular');

const app = angular
  .module('myApp', [
    'ngRoute',
    'Packafig.HomeController',
  ]);

function configFunction($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController',
    });
}

app.config(configFunction);

angular.module('packafig', [])
.controller('AppController', () => {
  this.entry;
  this.outputPath;
  this.outputFilename;
});
