'use strict';

/* Controllers */

var cnodeAppCtrl = angular.module('cnodeAppCtrl', ['ngSanitize']);

cnodeAppCtrl.controller('getTopicsCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get('https://cnodejs.org/api/v1/topics').success(function(data) {
            $scope.topics = data.data;
            
            console.log($scope.topics);
        });
        $scope.isCollapsed = false;
        $scope.SkipValidation = function(value) {
            return $sce.trustAsHtml(value);
        }
    }
]);
