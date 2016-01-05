'use strict';

/* Controllers */

var cnodeAppCtrl = angular.module('cnodeAppCtrl', ['ngSanitize']);

cnodeAppCtrl.controller('getTopicsCtrl', ['$scope', '$http', '$sce', '$stateParams',
    function($scope, $http, $sce, $stateParams) {
        $scope.currentPage = 1;
        $scope.page = 1;
        $scope.loading = false;
        $http.get('https://cnodejs.org/api/v1/topics/?tab=' + $stateParams.tab + '&limit=20' + '&page=' + $scope.currentPage).success(function(data) {
            $scope.topics = data.data;
            var topics = $scope.topics;
            $scope.labelHandle(topics);
        });
        
        $scope.loadMore = function() {
            console.log($scope.loading);
            if($scope.loading){
                $scope.loading = true;
                return false;
            }
            else{
                $scope.page++;
                $http.get('https://cnodejs.org/api/v1/topics/?tab=' + $stateParams.tab + '&limit=20' + '&page=' + $scope.page).success(function (data){
                    $scope.loading = false;
                    for(var i in data.data){
                        $scope.topics.push(data.data[i]);
                    }
                    $scope.labelHandle(data.data);
                })
            }
            
        }

        $scope.labelHandle = function(topics) {
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
            })
        }
    }
]);

//瀑布流
cnodeAppCtrl.controller('getMoreTopicsCtrl', ['$scope', '$http',
    function($scope, $http){
        var page = 2  //当前页数
            , loading = false;  //判断是否正在请求读取的内容

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
        $scope.name = 'yangbai';
    }
])