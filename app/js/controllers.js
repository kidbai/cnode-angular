'use strict';

/* Controllers */

var cnodeAppCtrl = angular.module('cnodeAppCtrl', []);

cnodeAppCtrl.controller('getTopicsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('https://cnodejs.org/api/v1/topics').success(function(data) {
            $scope.topics = data;
            console.log(data);
        });
    }
]);