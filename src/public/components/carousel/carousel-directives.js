angular.module('carouselDirectives', [])

    .directive('carousel', function () {
      return {
        restrict: 'E',
        scope: {
        },
        templateUrl: 'components/carousel/carousel.html',
        link: function (scope, element, attrs) {
        }
      };
    });
