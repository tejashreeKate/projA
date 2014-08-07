angular.module('projAApp')
  .directive('autoHeight', function ($window) {
    'use strict';

    function calcHeight(element, ht) {
      if (isNaN((+ht))) {
        ht = 0;
      }
      var height = $window.innerHeight - (element.position().top + (+ht));
      element.css({
        height: height + 'px'
      });
    }

    return {
      restrict: 'A',
      link: function ($scope, element, attr) {
        var getHeight = +attr.getHeight;
        calcHeight(element, getHeight);

        $scope.$watch(function () {
          return $window.innerHeight;
        }, function (n, o) {
          if (n !== o) {
            calcHeight(element, getHeight);
          }
        });
        $window.onresize = function () {
          $scope.$apply();
        };
      }
    };
  });