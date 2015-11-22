'use strict';

/* Controllers */

var cnodeAppCtrl = angular.module('cnodeAppCtrl', []);

cnodeAppCtrl.controller('getTopicsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('https://cnodejs.org/api/v1/topics?mdrender=false').success(function(data) {
            $scope.topics = data.data;
            console.log($scope.topics.data);
        });
    }
]);