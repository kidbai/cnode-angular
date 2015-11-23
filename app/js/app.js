'use strict';

/* App Module */

var cnodeApp = angular.module('cnodeApp', [
  'ui.router',
  'ui.bootstrap',
  'cnodeAppCtrl',
]);

cnodeApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html",
    })
    .state('topic',{
        url: '/topic',
        templateUrl: 'partials/topic.html'
    })
})