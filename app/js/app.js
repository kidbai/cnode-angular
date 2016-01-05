'use strict';

/* App Module */

var cnodeApp = angular.module('cnodeApp', [
    'ui.router',
    'cnodeAppCtrl',
    'cnodeDirective',
    'ngAnimate'
]);

cnodeApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/topics");
    $stateProvider
        .state('topics', {
            url: '/topics',
            params: {
                tab: 'all',
            },
            views: {
                "layout": {
                    templateUrl: "partials/layout.html",
                },
                "content": {
                    templateUrl: "partials/topics.html",
                    controller: "getTopicsCtrl"
                }
            }
        })
        .state('topic', {
            url: '/topic/:topicId',
            views: {
                "layout": {
                    templateUrl: "partials/layout.html",
                },
                "content": {
                    templateUrl: 'partials/topic.html',
                    controller: "getTopicCtrl"
                }
            }
        })
})

