'use strict';

// Declare app level module which depends on views, and components
angular.module('webStore', [
  'ngRoute',
  'webStore.view1',
  'webStore.view2',
  'webStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
