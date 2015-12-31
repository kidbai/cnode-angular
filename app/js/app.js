'use strict';

/* App Module */

var cnodeApp = angular.module('cnodeApp', [
    'ui.router',
    'ui.bootstrap',
    'cnodeAppCtrl',
    'ngAnimate'
]);

cnodeApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/topics");

    $stateProvider
        .state('topics', {
            url: "/topics/:tab?",
            views: {
                "content": {
                    templateUrl: "partials/topics.html",
                    controller: "getTopicsCtrl"
                }
            }
        })
        .state('home.navbar',{
            templateUrl: 'partials/navbar.html'
        })
        .state('topic', {
            url: '/topic/:topicId',
            templateUrl: 'partials/topic.html'
        })
})

