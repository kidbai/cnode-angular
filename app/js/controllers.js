'use strict';

/* Controllers */

var cnodeAppCtrl = angular.module('cnodeAppCtrl', ['ngSanitize']);

cnodeAppCtrl.controller('getTopicsCtrl', ['$scope', '$http', '$sce', '$stateParams',
    function($scope, $http, $sce, $stateParams) {
        console.log($stateParams.tab);
        $http.get('https://cnodejs.org/api/v1/topics/?tab=' + $stateParams.tab + '&limit=40').success(function(data) {
            $scope.topics = data.data;
            var topics = $scope.topics;
            angular.forEach(topics, function(value, key){
                value.label = '';
                if(value.top){
                    value.label = 'top';
                    value.newTab = '顶置';
                }
                if(!value.top && value.good){
                    value.label = 'good';
                    value.newTab = '精华';
                }
                if(!value.top && !value.good && value.tab != ''){
                    value.label = value.tab;
                     switch(value.tab)
                    {
                        case "ask": value.newTab = '问答'; break;
                        case "share": value.newTab = '分享'; break;
                        case "job": value.newTab = '招聘'; break;
                        case undefined: value.newTab = '暂无'; break;
                        default:
                            break;
                    }
                }
                if(!value.top && !value.good && value.tab === undefined){
                    value.label = "none";
                    value.newTab = '暂无';
                }
                // value.isAsk = false;
                // value.isShare = false;
                // value.isJob = false;
               
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
