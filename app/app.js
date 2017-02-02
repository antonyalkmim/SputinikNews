'use strict';

// Declare app level module which depends on views, and components
var $app = angular.module('app', [
    'ngRoute',
    'app.home',
    'app.news',
    'app.search',
    'app.error'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
