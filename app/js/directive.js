'use strict';

var cnodeDirective = angular.module('cnodeDirective', [
    'cnodeApp',
    'cnodeAppCtrl'
]);

cnodeDirective.directive("hello", function() {
    return {
        restrict: "A",
        template: "<li>hello</li>",
        replace: true
    }
})