'use strict';

/* Controllers */

var cnodeAppCtrl = angular.module('cnodeAppCtrl', ['ngSanitize']);

cnodeAppCtrl.controller('getTopicsCtrl', ['$scope', '$http', '$sce', '$stateParams',
    function($scope, $http, $sce, $stateParams) {
        console.log($stateParams.tab);
        $http.get('https://cnodejs.org/api/v1/topics/?tab=' + $stateParams.tab + '&limit=20').success(function(data) {
            $scope.topics = data.data;
            console.log($scope.topics);
            var topics = $scope.topics;
            angular.forEach(topics, function(value, key){
                console.log(value.tab);
                console.log(key);
                value.isAsk = false;
                value.isShare = false;
                value.isJob = false;
                switch(value.tab)
                {
                    case "ask": value.tab = '问答'; value.isAsk = true; value.isShare = false; value.isJob = false; break;
                    case "share": value.tab = '分享'; value.isAsk = false; value.isShare = true; value.isJob = false;break;
                    case "job": value.tab = '工作'; value.isAsk = false; value.isShare = false; value.isJob = true;break;
                    case undefined: value.tab = '暂无'; value.isAsk = false; value.isShare = false; value.isJob = false; break;
                    default:
                        break;
                }
            })
        });
        
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
