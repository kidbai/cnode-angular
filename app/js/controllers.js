'use strict';

/* Controllers */

var cnodeAppCtrl = angular.module('cnodeAppCtrl', ['ngSanitize']);

cnodeAppCtrl.controller('getTopicsCtrl', ['$scope', '$http', '$sce', '$stateParams',
    function($scope, $http, $sce, $stateParams) {
        console.log($stateParams);
        if($stateParams.tab === ''){
            $http.get('https://cnodejs.org/api/v1/topics').success(function(data) {
                $scope.topics = data.data;
                console.log($scope.topics);
            });
        }else{
            $http.get('https://cnodejs.org/api/v1/topics/?tab=' + $stateParams.tab).success(function(data) {
                $scope.topics = data.data;
                console.log($scope.topics);
            });
        }
        
        $scope.kindOfTab = function(value) {
            if(value === 'ask'){
                return '问答';
            }
            if(value === 'share'){
                return '分享';
            }
            if(value === 'job'){
                return '工作';
            }

        }
    }
]);

cnodeAppCtrl.controller('getTopicCtrl', ['$scope', '$http', '$sce', "$stateParams",
    function($scope, $http, $sce, $stateParams) {
        console.log($stateParams.topicId);
        $http.get('https://cnodejs.org/api/v1/topic/' + $stateParams.topicId).success(function(data) {
            $scope.topic = data.data;
            console.log($scope.topic);
        });
        $scope.SkipValidation = function(value) {
            return $sce.trustAsHtml(value);
        }
    }
]);

cnodeAppCtrl.controller('sidebarCtrl', ['$scope',
    function($scope){ 
        $scope.sidebarState = false;
    }
])
