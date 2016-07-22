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

angular.module('coolName', [])
.controller('AppController', () => {
  this.entry;
  this.output;
});
