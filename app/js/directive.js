'use strict';

var cnodeDirective = angular.module('cnodeDirective', []);

cnodeDirective.directive("scrolly", function() {
    return {
        restrict: "A",
        link: function(scope, element, attr){
            console.log(element);
            var raw = element[0];
            console.log(raw);
            element.bind('scroll', function () {
                console.log('in scroll');
                // console.log(raw.scrollTop + raw.offsetHeight);
                // console.log(raw.scrollHeight);
                // console.log(attr);
                if (raw.scrollTop + raw.offsetHeight == raw.scrollHeight) {
                    console.log('yes');
                    console.log(attr.scrolly);
                    scope.$apply(attr.scrolly);
                }
            });
        }
    };
})