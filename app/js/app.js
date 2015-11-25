'use strict';

/* App Module */

var cnodeApp = angular.module('cnodeApp', [
  'ui.router',
  'ui.bootstrap',
  'cnodeAppCtrl',
]);

cnodeApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/topics");

  $stateProvider
    .state('topics', {
      url: "/topics",
      views: {
        "": {
          templateUrl: "partials/topics.html",
        },
        "navbar": {
          templateUrl: "partials/navbar.html"
        }
      }
    })
    .state('topic', {
        url: '/topic/:topicId',
        templateUrl: 'partials/topic.html'
    })
})